# 🚀 Dharma Steel Website

A modern, high-performance industrial website built using **React + Vite + TypeScript** and deployed using **Jenkins CI/CD on AWS EC2 with Nginx**.

---

## 🌐 Live Demo

👉 http://13.63.82.249

---

## 🛠️ Tech Stack

* ⚛️ React (with TypeScript)
* ⚡ Vite (fast build tool)
* 🎨 Tailwind CSS / ShadCN UI
* 🖥️ Nginx (production server)
* ☁️ AWS EC2 (hosting)
* 🔄 Jenkins (CI/CD pipeline)

---

## ⚙️ Features

* Responsive modern UI
* Fast loading with optimized build
* CI/CD pipeline using Jenkins
* Automated deployment to Nginx server
* Clean component-based architecture

---

## 📦 Project Structure

```
Steelsheets/
│
├── steel/              # Frontend app
│   ├── src/
│   ├── public/
│   └── package.json
│
└── Jenkins Pipeline    # Deployment automation
```

---

## 🚀 Deployment (CI/CD)

This project uses **Jenkins** for automated deployment:

### Pipeline Steps:

1. Pull latest code from GitHub
2. Install dependencies (`npm ci`)
3. Build project (`npm run build`)
4. Deploy to `/var/www/html`
5. Restart Nginx

---

## 🧑‍💻 Setup Locally

```bash
git clone https://github.com/premjha597/Steelsheets.git
cd Steelsheets/steel

npm install
npm run dev
```

---

## 🏗️ Build for Production

```bash
npm run build
```

---

## 📡 Server Setup (EC2)

* Ubuntu EC2 instance
* Nginx configured
* Jenkins running on port 8080

---

## 🔮 Future Improvements

* Add custom domain & HTTPS
* Enable auto-deploy via GitHub webhooks
* Optimize bundle size
* Add backend APIs

---

## 👨‍💻 Author

**Premkant Jha**
GitHub: https://github.com/premjha597

---

## ⭐️ Show Your Support

If you like this project, give it a ⭐ on GitHub!
