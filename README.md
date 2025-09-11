<!-- README.md -->

# 🔐 Password-SPA  
> A sleek, zero-dependency¹ single-page app that cooks strong passwords in milliseconds.

![demo](https://img.shields.io/badge/demo-live-success?style=flat-square)
![size](https://img.shields.io/badge/size-<10kB-gold?style=flat-square)
![license](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

---

## ✨ Features
- ⚙️  Adjustable length (4-128) & character pools (upper, lower, digits, symbols)  
- 📊  Real-time entropy-based strength meter  
- 📋  One-click copy to clipboard  
- 🕰️  Local history (localStorage) with delete  
- 🌑  Dark-mode-first, responsive UI  
- 🚀  Runs offline after first load  

---

## ⚡ Quick Start
```bash
git clone https://github.com/your-username/password-spa.git
cd password-spa
npm i
npm start
Open http://localhost:3000 – done.
📁 Structure
Copy
password-spa/
├── app.js              # Express static server (30 LOC)
├── package.json
└── public/
    ├── index.html      # SPA shell
    ├── style.css       # Dark theme + CSS variables
    └── app.js          # Router + generator + history
🛡️ Security Notes
Uses crypto.getRandomValues() for PRNG
Zero server-side state; no passwords touch the wire
Audit-friendly: <200 LOC client-side
🧪 Hacking
Table
Copy
Script	Purpose
npm start	Start dev server
npm run lint	(optional) ESLint
📸 Preview
https://via.placeholder.com/600x350/1e1e2f/ffffff?text=Screenshot+Placeholder
📄 License
MIT – feel free to fork, embed, or remix.
¹ Express is only used to serve static files; the app itself is framework-free.