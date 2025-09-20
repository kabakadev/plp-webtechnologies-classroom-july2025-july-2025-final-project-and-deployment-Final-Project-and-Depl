# Acme Studio — Multipage Website

A simple, production-ready starter demonstrating **HTML5 semantics**, **responsive CSS3**, and **vanilla JavaScript** interactivity. Includes a hero slider, scroll reveal, mobile nav, and validated contact form.

---

## ✨ Features

* 4 pages: **Home**, **About**, **Services**, **Contact**
* Shared header/footer, responsive nav (hamburger)
* Hero image slider (no dependencies)
* Scroll-reveal animations via `IntersectionObserver`
* Accessible form with client-side validation
* Clean file structure: `/css`, `/js`, `/images`

---

## 🗂 Project Structure

```
.
├─ index.html
├─ about.html
├─ services.html
├─ contact.html
├─ css/
│  └─ style.css
├─ js/
│  └─ main.js
└─ images/
   ├─ hero-1.jpg
   ├─ hero-2.jpg
   ├─ hero-3.jpg
   └─ logo.svg
```

---

## 🚀 Run Locally

Open `index.html` directly in your browser, or use a lightweight local server:

```bash
# Python 3
python -m http.server 8080
# Visit http://localhost:8080
```

---

## 🌍 Deploy

### GitHub Pages

1. Push your repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select `main` branch → `/ (root)`.
4. Save — your site will be live at:

   ```
   https://<username>.github.io/<repo>/
   ```

### Netlify

* Drag & drop the folder to [Netlify Drop](https://app.netlify.com/drop), or connect your Git repo:

  * Build command: none
  * Publish directory: `/`

### Vercel

* Run `vercel` in your project root (or import repo in dashboard).
* Framework preset: **Other**
* Output directory: `/`

---

## ✅ Checklist

* [ ] Replace placeholder images in `/images/`
* [ ] Update `<title>` and `<meta description>` for each page
* [ ] Test all links on mobile & desktop
* [ ] Validate HTML & CSS (W3C Validators)
* [ ] Lighthouse check: Performance, Accessibility, Best Practices, SEO

---

## 📄 License

MIT — free to use, modify, and share.
