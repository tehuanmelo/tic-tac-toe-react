# Tic Tac Toe (React + Vite)

A clean, responsive **Tic Tac Toe** game built with **React** and **Vite**, styled with **Tailwind CSS**.

## 🚀 Live Demo

- **GitHub Pages:** https://tehuanmelo.github.io/tic-tac-toe/

> Replace `YOUR_GITHUB_USERNAME` with your GitHub username.

## ✨ Features

- Classic 3×3 Tic Tac Toe
- Win detection + winner highlight
- Responsive layout (works on mobile and desktop)
- Fast dev experience with Vite

## 🧰 Tech Stack

- React
- Vite
- Tailwind CSS
- gh-pages (deployment)

## ✅ Getting Started

### 1) Install

```bash
npm install
```

### 2) Run locally

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### 3) Build

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## 🌍 Deploy to GitHub Pages

This project is configured to deploy the `dist` folder using `gh-pages`.

### One-time GitHub setup

1. Push your code to GitHub.
2. In your repo on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the branch **`gh-pages`** and folder **`/(root)`**, then save.

### Deploy command

```bash
npm run deploy
```

After deploy, your site will be available at:

```
https://YOUR_GITHUB_USERNAME.github.io/tic-tac-toe/
```

## 📝 Notes

- If you ever see a blank page on GitHub Pages, it’s usually because asset paths are wrong. This project uses a **relative base** (`base: "./"`) in `vite.config.js` to avoid that.

## 📄 License

MIT
