# 🔐 Password-SPA

A sleek, zero-dependency **Single Page Application** that generates strong, customizable passwords in milliseconds.
Built with **Node.js, Express, and vanilla JavaScript** — lightweight, fast, and private.

[![Demo](https://img.shields.io/badge/demo-live-green)](http://localhost:3000)
![Size](https://img.shields.io/github/languages/code-size/your-username/password-spa)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ Features

-   🔢 Adjustable password length (4–128) & character sets (uppercase, lowercase, numbers, symbols)
-   📊 Real-time entropy-based strength meter
-   📋 One-click copy to clipboard
-   💾 Local history with delete option (via `localStorage`)
-   🌙 Dark theme, responsive UI
-   ⚡ Offline-ready after first load

---

## 🚀 Quick Start

Follow these steps to run the app locally:

### 1️⃣ Clone the Repository
```bash
git clone [https://github.com/your-username/password-spa.git](https://github.com/your-username/password-spa.git)
cd password-spa
📥 2️⃣ Install Dependencies
Bash

npm install
⚙️ 3️⃣ Start the Server
Bash

npm start
🌐 4️⃣ Open in Browser
👉 http://localhost:3000

📂 Project Structure
password-spa/
├── app.js          # Express static server
├── package.json    # Metadata & scripts
└── public/         # Client-side code
    ├── index.html  # SPA shell
    ├── style.css   # Dark theme + CSS variables
    └── app.js      # Router + generator + history
