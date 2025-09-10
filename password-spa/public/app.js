// Simple client-side router
const routes = {
  'generator': generatorPage,
  'history':   historyPage
};
let currentRoute = 'generator';
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

function router() {
  const hash = location.hash.slice(2) || 'generator';
  if (!routes[hash]) return router('generator');
  currentRoute = hash;
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.route === hash));
  routes[hash]();
}

/* ============== GENERATOR PAGE ============== */
function generatorPage() {
  const root = document.getElementById('root');
  root.innerHTML = `
  <div class="card">
    <h2>Password Generator</h2>
    <label>Length: <span id="lenVal">16</span></label>
    <input type="range" id="length" min="8" max="64" value="16">
    <div>
      <label><input type="checkbox" id="upper" checked> Uppercase</label>
      <label><input type="checkbox" id="lower" checked> Lowercase</label>
      <label><input type="checkbox" id="numbers" checked> Numbers</label>
      <label><input type="checkbox" id="symbols" checked> Symbols</label>
    </div>
    <div>
      <input type="text" id="password" readonly style="width:100%;padding:6px;margin:8px 0;">
      <button class="copy-btn" onclick="copyPwd()">Copy</button>
    </div>
    <div>
      <span>Strength:</span>
      <meter id="strength" min="0" max="100" value="0" low="40" high="70" optimum="90"></meter>
      <span id="strengthText"></span>
    </div>
  </div>`;

  ['length','upper','lower','numbers','symbols'].forEach(id=>document.getElementById(id).addEventListener('input', updatePwd));
  updatePwd();
}

function updatePwd() {
  const len = +document.getElementById('length').value;
  document.getElementById('lenVal').textContent = len;
  const sets = {
    upper:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower:'abcdefghijklmnopqrstuvwxyz',
    numbers:'0123456789',
    symbols:'!@#$%^&*()_+[]{};:,.<>?'
  };
  let pool = '';
  Object.keys(sets).forEach(k=>{
    if(document.getElementById(k).checked) pool += sets[k];
  });
  if(!pool) return;
  let pwd = '';
  for(let i=0;i<len;i++) pwd += pool[Math.floor(Math.random()*pool.length)];
  document.getElementById('password').value = pwd;
  strengthMeter(pwd);
}

function strengthMeter(pwd) {
  let score = 0;
  if (pwd.length > 12) score += 25;
  if (/[a-z]/.test(pwd)) score += 10;
  if (/[A-Z]/.test(pwd)) score += 10;
  if (/[0-9]/.test(pwd)) score += 10;
  if (/[^a-zA-Z0-9]/.test(pwd)) score += 15;
  score = Math.min(score + pwd.length * 1.5, 100);
  document.getElementById('strength').value = score;
  const txt = score < 40 ? 'Weak' : score < 70 ? 'Medium' : 'Strong';
  document.getElementById('strengthText').textContent = txt;
}

function copyPwd() {
  const pwd = document.getElementById('password').value;
  navigator.clipboard.writeText(pwd);
  alert('Copied to clipboard!');
}

/* ============== HISTORY PAGE ============== */
const history = JSON.parse(localStorage.getItem('pwdHistory') || '[]');
function historyPage() {
  const root = document.getElementById('root');
  root.innerHTML = `<div class="card"><h2>Password History</h2>
  ${history.length ? history.map((p,i)=>`
    <div class="card mb-2 fade">
      <div class="d-flex justify-content-between align-items-center p-2">
        <span>${p.pwd}</span>
        <button class="del-btn btn-sm" onclick="delHist(${i})">Delete</button>
      </div>
    </div>`).join('') : '<p>No passwords saved.</p>'}`;
}

// Save each generated password
document.addEventListener('input', e=>{
  if(e.target.id==='password' && e.target.value){
    if(!history.find(h=>h.pwd===e.target.value)){
      history.unshift({pwd:e.target.value});
      localStorage.setItem('pwdHistory', JSON.stringify(history));
    }
  }
});
function delHist(i){
  history.splice(i,1);
  localStorage.setItem('pwdHistory', JSON.stringify(history));
  router(); // refresh view
}