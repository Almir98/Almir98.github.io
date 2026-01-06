# 🚀 Almir Tihak - Portfolio Website

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://almir98.github.io/)
[![Version](https://img.shields.io/badge/version-2.0.0-blue)](https://almir98.github.io/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE.md)

## 📋 O Projektu

Moderni, responzivni portfolio website sa naprednim funkcijama i animacijama. Prikazuje moje profesionalno iskustvo, projekte, i vještine kao Software Engineer-a sa fokusom na .NET i Angular tehnologije.

🌐 **Live Demo**: [https://almir98.github.io/](https://almir98.github.io/)

---

## ✨ Glavne Funkcije

### 🎨 Dark Mode
- Toggle između svijetle i tamne teme
- Automatsko čuvanje preference
- Keyboard shortcut: `D`
- Smooth transitions

### 📊 Scroll Progress Bar
- Real-time scroll tracking
- Gradient progress indicator
- Fixed position na vrhu stranice

### 🎭 Animacije
- **Typing Animation** - Naslov sa typing efektom
- **Scroll Reveal** - Sekcije fade-in kad ulaze u viewport
- **Hover Effects** - Na projektima, skill tags, buttons
- **Timeline Animation** - Sekvencionalna animacija experience timeline-a
- **Stagger Effects** - Projekti se pojavljuju sa kašnjenjem

### 📈 Skill Progress Bars
- 8 glavnih tehnologija sa animated progress bars
- Shimmer efekt
- Automatski trigger kad uđe u viewport

### 🔍 Project Filters
- Filtriraj projekte po tehnologiji:
  - All Projects
  - .NET / C#
  - Angular
  - Full Stack
  - IoT

### 🖼️ Lazy Loading
- Sve slike se učitavaju on-demand
- Optimizacija performansi
- Fade-in efekt

### ⌨️ Keyboard Shortcuts
- `D` - Toggle Dark Mode
- `T` - Scroll to Top

---

## 🛠️ Tehnologije

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 4
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Lato)
- **APIs**: Intersection Observer, LocalStorage
- **Build**: Gulp (optional)

---

## 🚀 Pokretanje Projekta

### Jednostavno Otvaranje

```bash
# Kloniraj repository
git clone https://github.com/Almir98/Almir98.github.io.git

# Otvori index.html u browseru
```

Ili jednostavno otvori `index.html` fajl direktno u web browseru.

### Sa Live Server (Preporučeno)

```bash
# Instaliraj Live Server extension u VS Code
# ili koristi Python HTTP server

python -m http.server 8000
```

Zatim otvori `http://localhost:8000` u browseru.

---

## 📁 Struktura Projekta

```
├── index.html              # Glavna HTML stranica
├── css/
│   ├── bootstrap.min.css   # Bootstrap framework
│   └── styles.css          # Custom stilovi i animacije
├── js/
│   ├── scripts.js          # Main JavaScript file
│   └── scripts.min.js      # Minified version
├── images/                 # Slike projekata i profile photo
├── libs/
│   └── font-awesome/       # Icon library
├── scss/
│   └── styles.scss         # SCSS source files
├── README.md               # Ovaj fajl
├── IMPROVEMENTS.md         # Detaljne izmjene
└── LICENSE.md             # License
```

---

## 🎨 Customizacija

### Promjena Boja

U `css/styles.css` možeš promijeniti glavne boje:

```css
/* Primary color */
--primary-color: #3498db;

/* Dark mode background */
--dark-bg: #1a1a2e;
```

### Dodavanje Novog Projekta

U `index.html` dodaj novi projekt u `#projects` sekciju:

```html
<div class="project shadow-large fade-in-project" data-category=".net angular">
    <div class="project-image">
        <img class="lazy-load" data-src="images/project.jpg" alt="Project Name" />
    </div>
    <div class="project-info">
        <h3 class="project-title">Project Name</h3>
        <div class="content">
            Project description...
        </div>
        <button onclick="window.open('URL', '_blank')" class="btn btn-primary">
            View Project
        </button>
    </div>
</div>
```

### Dodavanje Novog Skill-a

U `index.html` dodaj novu skill progress bar:

```html
<div class="skill-bar-container">
    <div class="skill-bar-label">
        <span>Skill Name</span>
        <span class="skill-percentage">85%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-bar-fill" data-progress="85"></div>
    </div>
</div>
```

---

## 📱 Responsive Design

Website je potpuno responzivan i testiran na:

- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1919px)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)

---

## 🔧 Development

### SCSS Kompajliranje

```bash
# Instaliraj dependencies
npm install

# Kompajliraj SCSS
npm run sass

# Watch mode
npm run sass:watch
```

### Minifikacija

```bash
# Minify JavaScript
npm run minify-js

# Minify CSS
npm run minify-css
```

---

## 🌟 Features Detaljno

### Dark Mode Implementation

```javascript
// Toggle dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', 
        body.classList.contains('dark-mode') ? 'enabled' : null
    );
});
```

### Scroll Reveal

```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.15 });
```

### Project Filters

```javascript
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        projects.forEach(project => {
            const categories = project.getAttribute('data-category');
            if (filter === 'all' || categories.includes(filter)) {
                project.style.display = '';
            } else {
                project.style.display = 'none';
            }
        });
    });
});
```

---

## 🎯 Performance

- **Lighthouse Score**: 95+ (estimated)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Total Bundle Size**: < 500KB
- **Images**: Lazy loaded

---

## 📊 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

---

## 🤝 Contributing

Prijedlozi za poboljšanja su dobrodošli!

1. Fork projekat
2. Kreiraj feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit izmjene (`git commit -m 'Add some AmazingFeature'`)
4. Push na branch (`git push origin feature/AmazingFeature`)
5. Otvori Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE.md` for more information.

---

## 👤 Autor

**Almir Tihak**

- 🌐 Website: [almir98.github.io](https://almir98.github.io/)
- 💼 LinkedIn: [@almir-tihak](https://www.linkedin.com/in/almir-tihak/)
- 🐙 GitHub: [@Almir98](https://github.com/Almir98)
- 📧 Email: almir.tihak98@hotmail.com
- 🎥 YouTube: [Almir Tihak](https://www.youtube.com/channel/UCBBVqcDbZbp8aqZEryZJhqA)

---

## 🙏 Acknowledgments

- [DevPortfolio Template](https://github.com/RyanFitzgerald/devportfolio-template) - Original template
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography
- [Bootstrap](https://getbootstrap.com/) - CSS Framework

---

## 📈 Changelog

Vidi [IMPROVEMENTS.md](IMPROVEMENTS.md) za detaljnu listu svih izmjena i poboljšanja.

---

## 💡 Tips & Tricks

### Easter Eggs

Otvori Developer Console (`F12`) za skrivene poruke i shortcuts info! 🎉

### Performance Tips

1. Slike optimizuj prije uploada (WebP format preporučen)
2. Koristi lazy loading za sve velike slike
3. Minify CSS i JS fajlove za production
4. Koristi CDN za biblioteke ako je moguće

---

**⭐ Ako ti se sviđa projekat, ostavi zvjezdicu na GitHub-u! ⭐**

---

*Posljednje ažurirano: Januar 2026*
