# ⚡ Quick Start Guide

Brzi vodič za testiranje svih novih funkcija na portfolio website-u!

---

## 🚀 Pokretanje

1. **Otvori `index.html` u browseru**
   ```bash
   # Jednostavno dupli-klik na index.html
   # ILI
   # Right-click → Open with → Browser
   ```

2. **Ili pokreni local server**
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js (http-server)
   npx http-server
   
   # VS Code Live Server
   # Instaliraj Live Server extension i klikni "Go Live"
   ```

3. **Otvori Developer Console (F12)**
   - Vidjet ćeš welcome poruke i statistike! 🎉

---

## ✅ Test Checklist

### 🌙 Dark Mode
- [ ] Klikni na mjesec ikonu u headeru
- [ ] Stranica prelazi u dark mode
- [ ] Ikona se mijenja u sunce
- [ ] Refresh stranice - dark mode ostaje aktivan
- [ ] Pritisni `D` na tastaturi - toggle dark mode

**Rezultat**: Theme se mijenja smooth-no, svi elementi su readable

---

### 📊 Progress Bar
- [ ] Scroll down stranice
- [ ] Primijeti progress bar na vrhu (gradient)
- [ ] Bar se puni kako scrollaš
- [ ] Scroll do dna - bar je 100%

**Rezultat**: Smooth tracking scroll pozicije

---

### ⏳ Preloader
- [ ] Refresh stranicu (F5)
- [ ] Vidi loading spinner i tekst
- [ ] Čeka ~800ms
- [ ] Fade out animacija

**Rezultat**: Profesionalni loading screen

---

### 🔝 Scroll to Top
- [ ] Scroll dolje (više od 500px)
- [ ] Pojavi se floating button (dolje desno)
- [ ] Hover over button - scale up animacija
- [ ] Klikni button - smooth scroll to top
- [ ] Pritisni `T` na tastaturi - isto

**Rezultat**: Button appears/disappears correctly, smooth scroll

---

### ⌨️ Typing Animation
- [ ] Gledaj glavni naslov "Almir Tihak"
- [ ] Tekst se "kuca" character by character
- [ ] Blinking cursor za vrijeme tipkanja
- [ ] Cursor nestaje nakon završetka

**Rezultat**: Typewriter efekt na naslov

---

### 👀 Scroll Reveal
- [ ] Scroll polako kroz stranicu
- [ ] "About" sekcija fade-in kad uđe u view
- [ ] "Experience" sekcija fade-in
- [ ] "Education" sekcija fade-in
- [ ] "Skills" sekcija fade-in
- [ ] "Projects" sekcija fade-in

**Rezultat**: Sve sekcije animiraju kad ulaze u viewport

---

### 🎨 Project Animations
- [ ] Scroll do Projects sekcije
- [ ] Projekti se pojavljuju jedan po jedan (stagger)
- [ ] Hover over projekat - lift efekt + shadow
- [ ] Hover over sliku u projektu - scale efekt

**Rezultat**: Smooth stagger animation, interactive hover effects

---

### 🔍 Project Filters
- [ ] Klikni "All Projects" - svi projekti vidljivi
- [ ] Klikni ".NET / C#" - samo .NET projekti
- [ ] Klikni "Angular" - samo Angular projekti
- [ ] Klikni "Full Stack" - samo fullstack projekti
- [ ] Klikni "IoT" - samo IoT projekti
- [ ] Active button ima drugačiju boju

**Rezultat**: Projekti se filtriraju smooth-no sa fade animacijom

---

### 📈 Skill Progress Bars
- [ ] Scroll do Skills sekcije
- [ ] Čekaj da uđe u viewport
- [ ] Progress bars se animiraju jedan po jedan
- [ ] Shimmer efekt na barovima
- [ ] Hover over bar - subtle glow

**Rezultat**: Sequential animation sa shimmer efektom

---

### 🏷️ Skill Tags
- [ ] Scroll do skill tags (ispod progress bars)
- [ ] Hover over bilo koji tag
- [ ] Tag scale up + mijenja boju + shadow
- [ ] Tooltip se pojavljuje (desktop only)

**Rezultat**: Interactive hover with smooth transitions

---

### 🎭 Hover Effects

#### Experience Timeline
- [ ] Hover over bilo koji experience card
- [ ] Card slide desno + shadow increase
- [ ] Left border se mijenja u plavu

#### Education Cards
- [ ] Hover over education card
- [ ] Card scale up animacija
- [ ] Border boja mijenja

#### Social Icons
- [ ] Hover over social icon (top ili footer)
- [ ] Icon lift up + rotate 360°

**Rezultat**: Sve interakcije responsive i smooth

---

### 🖼️ Lazy Loading
- [ ] Otvori Developer Tools → Network tab
- [ ] Refresh stranicu
- [ ] Scroll polako dolje
- [ ] Primijeti da se slike učitavaju kako scrollaš
- [ ] Fade-in efekt kad se slika učita

**Rezultat**: Images load on-demand, performanse bolje

---

### 📧 Copy Email
- [ ] Klikni na email link (ili ikonu)
- [ ] Toast notification pojavi se: "Email copied!"
- [ ] Check clipboard - email je kopiran
- [ ] Notification nestaje nakon 2s

**Rezultat**: Email copied to clipboard sa feedback

---

### 🎨 Visual Enhancements

#### Custom Scrollbar
- [ ] Scroll stranicu
- [ ] Primijeti custom scrollbar (blue/green)
- [ ] Hover over scrollbar - boja se mijenja
- [ ] Dark mode - scrollbar je zeleni

#### Text Selection
- [ ] Selektiraj bilo koji tekst
- [ ] Background je plavi (light mode)
- [ ] Dark mode - background zeleni

#### Gradient Text
- [ ] Primijeti headings sa gradient efektom
- [ ] Dark mode - drugačiji gradient

**Rezultat**: Custom branding throughout

---

### ⌨️ Keyboard Shortcuts
- [ ] Pritisni `D` → Dark mode toggle
- [ ] Pritisni `T` → Scroll to top
- [ ] Tab navigacija radi
- [ ] Focus indicators vidljivi

**Rezultat**: Keyboard accessible, good UX

---

### 📱 Responsive Testing

#### Desktop (1920px+)
- [ ] Sve sekcije proper layout
- [ ] 2 kolone za skill bars
- [ ] Project cards sa slikama
- [ ] Timeline sa left side dates

#### Tablet (768px - 1023px)
- [ ] Layout adjusts
- [ ] Skill bars responsive
- [ ] Navigation accessible

#### Mobile (< 768px)
- [ ] Mobile menu button pojavljuje se
- [ ] Skill bars 1 kolona
- [ ] Project images hidden, info full width
- [ ] Typing animation disabled
- [ ] Scroll to top button manji

**Rezultat**: Perfektna responsiveness na svim uređajima

---

## 🎯 Advanced Testing

### Performance
1. **Lighthouse Test**
   ```
   Chrome DevTools → Lighthouse → Run
   Očekivani score: 90+
   ```

2. **Network Tab**
   ```
   Check load times
   Verify lazy loading works
   Check total bundle size
   ```

3. **Console**
   ```
   No errors (green ✓)
   Performance metrics logged
   Feature confirmations
   ```

### Accessibility
1. **Tab Navigation**
   - Tab kroz sve elemente
   - Focus indicators clear
   - Logical tab order

2. **Screen Reader**
   - ARIA labels present
   - Alt text na slikama
   - Semantic structure

3. **Color Contrast**
   - WCAG AA compliant
   - Dark mode readable
   - Links distinguishable

---

## 🐛 Troubleshooting

### Dark Mode ne pamti izbor
**Fix**: Provjeri da je localStorage enabled u browseru

### Animacije ne rade
**Fix**: Provjeri da je JavaScript enabled

### Slike se ne učitavaju
**Fix**: Provjeri putanje u `data-src` atributima

### Preloader ne nestaje
**Fix**: Refresh i čekaj 2-3 sekunde

### Progress bar ne radi
**Fix**: Scroll event možda nije fired - refresh

---

## 🎉 Easter Eggs

1. **Console Messages**
   - Otvori console (F12)
   - Vidi welcome poruke, quotes, i shortcuts info

2. **View Counter**
   - Check console - prikazuje total views
   - Stored u LocalStorage

3. **Performance Metrics**
   - Console loguje load time
   - LCP measurement
   - Connection speed

4. **Random Quote**
   - Svaki put kad refreshaš
   - Programerska mudrost! 💡

---

## 📊 Expected Results Summary

| Feature | Expected Result |
|---------|----------------|
| Dark Mode | Smooth toggle, persists |
| Progress Bar | Accurate tracking |
| Preloader | Smooth fade out |
| Scroll Top | Shows after 500px |
| Typing | Typewriter effect |
| Scroll Reveal | Sequential fade-in |
| Project Filters | Smooth filtering |
| Skill Bars | Sequential animation |
| Lazy Loading | On-demand loading |
| Hover Effects | Smooth transitions |
| Keyboard | All shortcuts work |
| Responsive | Perfect on all devices |
| Performance | Fast load, smooth animations |
| Accessibility | Keyboard + screen reader friendly |

---

## 🔥 Pro Tips

1. **Clear cache** if seeing old version
2. **Use incognito** for fresh test
3. **Try different browsers** (Chrome, Firefox, Safari)
4. **Test on actual mobile** device
5. **Check console** for helpful logs
6. **Slow down animations** in DevTools for debugging

---

## ✅ Sign Off

Ako sve ovo radi kako treba - **ČESTITAMO!** 🎉

Tvoj portfolio je:
- ✨ Moderan
- 🚀 Brz
- 🎨 Lijep
- ♿ Pristupačan
- 📱 Responzivan
- 💼 Profesionalan

**Ready for production!** 🚀

---

## 📞 Pitanja?

Ako nešto ne radi ili imaš pitanja:
1. Check console errors (F12)
2. Read documentation (IMPROVEMENTS.md)
3. Contact: almir.tihak98@hotmail.com

---

*Happy testing! 🧪*

