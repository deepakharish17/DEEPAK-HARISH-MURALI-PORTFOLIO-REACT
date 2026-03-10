# Deepak Harish — Portfolio

A modern, component-based React portfolio built with Vite.

---

## 📁 Folder Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── deepak.jpeg          ← Put your photo here!
└── src/
    ├── main.jsx             ← React entry point
    ├── App.jsx              ← Composes all sections
    ├── data/
    │   └── index.js         ← All data: projects, services, skills, EmailJS keys
    ├── hooks/
    │   └── useScrollSpy.js  ← Active nav link hook
    ├── styles/
    │   └── global.css       ← All shared CSS styles
    └── components/
        ├── Cursor.jsx       ← Custom animated cursor
        ├── Navbar.jsx       ← Fixed top navbar + mobile menu
        ├── Hero.jsx         ← Hero / landing section
        ├── About.jsx        ← About me section
        ├── Projects.jsx     ← Projects grid with GitHub + Live Demo links
        ├── Services.jsx     ← Services cards
        ├── Contact.jsx      ← EmailJS contact form
        └── Footer.jsx       ← Footer with nav links
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## 📸 Add Your Photo

Copy your photo into the `public/` folder and name it `deepak.jpeg`:

```
public/deepak.jpeg
```

---

## 📬 Setup EmailJS (Contact Form)

1. Go to https://www.emailjs.com and sign up (free)
2. Add a **Gmail service** → connect `harishdeepak35@gmail.com`
3. Create an **Email Template** using these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{message}}` — the message body
4. Copy your credentials and open `src/data/index.js`:

```js
export const EMAILJS_SERVICE_ID  = "service_xxxxxxx";
export const EMAILJS_TEMPLATE_ID = "template_xxxxxxx";
export const EMAILJS_PUBLIC_KEY  = "your_public_key";
```

---

## 🌐 Deploy to Vercel

```bash
# Build
npm run build

# Then push to GitHub and import repo on vercel.com
# Vercel auto-detects Vite and deploys!
```
