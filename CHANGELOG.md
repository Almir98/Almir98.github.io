# 📝 Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2026-01-06

### 🎉 Major Update - Complete Redesign

This is a major version update with extensive enhancements, new features, and improvements.

---

### ✨ Added

#### Core Features
- **Dark Mode Toggle** with localStorage persistence
- **Scroll Progress Bar** at the top of the page
- **Preloader Animation** on page load
- **Scroll to Top Button** with smooth animation
- **Keyboard Shortcuts** (D for dark mode, T for scroll to top)

#### Animations
- **Typing Animation** for main heading
- **Scroll Reveal Animations** for all sections
- **Stagger Animation** for projects
- **Sequential Animation** for timeline items
- **Hover Effects** on all interactive elements
- **Float Animation** utility class
- **Pulse Animation** utility class
- **Shimmer Effect** on skill bars
- **Ripple Effect** on buttons

#### UI Components
- **Skill Progress Bars** with 8 key technologies
- **Project Filters** with 5 categories (.NET, Angular, Full Stack, IoT, All)
- **Custom Tooltips** on hover
- **Enhanced Shadows** system
- **Gradient Text** utility
- **Badge System** for tags
- **Section Dividers** with gradient
- **Custom Scrollbar** styling
- **Custom Text Selection** colors

#### Performance
- **Lazy Loading** for all images
- **Intersection Observer** for animations
- **Debounced Scroll Events**
- **Image Optimization** handler
- **Prefetch Images** on idle
- **Performance Monitoring** with metrics logging

#### Developer Features
- **Console Easter Eggs** with welcome messages
- **Random Quotes** on load
- **View Counter** in localStorage
- **Performance Metrics** logging
- **Error Handling** with global handlers
- **Browser Detection**
- **Device Detection**
- **Connection Speed Detection**
- **Analytics Tracking** placeholders

#### Accessibility
- **ARIA Labels** on all interactive elements
- **Keyboard Navigation** support
- **Focus Indicators** with custom styling
- **Screen Reader** compatibility
- **Semantic HTML** improvements
- **WCAG AA** color contrast compliance
- **Reduced Motion** support

#### SEO
- **Meta Descriptions** enhanced
- **Open Graph Tags** improved
- **Alt Text** on all images
- **Semantic Structure** optimized
- **Proper Heading Hierarchy**

---

### 🔧 Fixed

#### HTML
- Removed duplicate closing `</div>` tags (lines 93, 290)
- Updated copyright year from 2023 to 2026
- Fixed image path for pomozi.ba (removed leading slash)
- Added missing ARIA labels
- Improved semantic structure

#### CSS
- Reorganized and formatted entire stylesheet
- Fixed dark mode theme conflicts
- Improved cross-browser compatibility
- Fixed responsive breakpoint issues
- Optimized animation performance

#### JavaScript
- Fixed memory leaks in event listeners
- Improved scroll event performance with debouncing
- Fixed IntersectionObserver compatibility
- Resolved timing issues in animations
- Fixed localStorage fallback handling

---

### 🚀 Improved

#### Performance
- Reduced JavaScript bundle size through optimization
- Implemented lazy loading for all images
- Added debouncing to scroll events
- Used GPU-accelerated animations
- Optimized CSS with efficient selectors
- Reduced layout shifts with proper sizing

#### User Experience
- Smoother animations with better timing functions
- Better hover feedback on all interactive elements
- Improved mobile touch targets
- Enhanced keyboard navigation
- Better loading states and feedback
- More intuitive filter interactions

#### Code Quality
- Better code organization and structure
- Comprehensive comments and documentation
- Consistent naming conventions
- DRY principles applied
- Modern JavaScript (ES6+) syntax
- Better error handling

#### Design
- More consistent spacing and alignment
- Better color scheme in dark mode
- Enhanced visual hierarchy
- Professional gradient usage
- Improved typography
- Better contrast ratios

#### Mobile Experience
- Optimized responsive breakpoints
- Better mobile menu interactions
- Touch-friendly button sizes
- Faster load times
- Optimized images for mobile
- Better viewport handling

---

### 📚 Documentation

- **README.md** - Complete rewrite with detailed instructions
- **IMPROVEMENTS.md** - Comprehensive list of all changes
- **SUMMARY.md** - Quick overview and statistics
- **QUICK_START.md** - Testing guide for all features
- **CHANGELOG.md** - This file, version tracking

---

### 🎨 Design Changes

- New gradient color scheme (Purple to Violet)
- Custom scrollbar design
- Enhanced shadow system
- Better dark mode implementation
- Improved button styles
- Modern card designs
- Professional animations

---

### ⚙️ Technical Changes

#### Dependencies
- No new external dependencies added
- Maintained lightweight approach
- Used native JavaScript APIs
- Bootstrap 4 (existing)
- jQuery (existing, for legacy support)
- Font Awesome (existing)

#### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

#### File Structure
```
Added/Modified:
- index.html (150+ lines changed)
- css/styles.css (1,000+ lines added)
- js/scripts.js (600+ lines added)
- README.md (complete rewrite)
- IMPROVEMENTS.md (new)
- SUMMARY.md (new)
- QUICK_START.md (new)
- CHANGELOG.md (new)
```

---

### 📊 Statistics

- **Total Lines Added**: ~1,500+
- **New Features**: 25+
- **New Animations**: 20+
- **Bug Fixes**: 10+
- **Performance Improvements**: 15+
- **Accessibility Improvements**: 20+
- **Documentation Files**: 4 new

---

### 🔄 Migration Guide

#### From v1.x to v2.0

**No Breaking Changes!**

All existing functionality is preserved. Simply:

1. Replace all files with new versions
2. Clear browser cache
3. Test all features
4. Enjoy new enhancements!

**Note**: Dark mode preference will be stored in localStorage. Users will need to set their preference again after migration.

---

## [1.2.2] - 2020-03-25

### Base Template

Original portfolio template by Ryan Fitzgerald

#### Features
- Basic responsive design
- Experience timeline
- Projects section
- Skills section
- Education section
- Basic animations
- Mobile menu

---

## Future Roadmap

### [2.1.0] - Planned
- [ ] Multilingual support (English/Bosnian)
- [ ] Blog section integration
- [ ] Contact form with validation
- [ ] Project detail modals
- [ ] Testimonials slider
- [ ] Skills categories filter
- [ ] Download CV functionality
- [ ] Light/Dark/Auto theme options

### [3.0.0] - Ideas
- [ ] CMS integration
- [ ] Real-time chat widget
- [ ] Video background support
- [ ] 3D elements
- [ ] Advanced animations library
- [ ] PWA support
- [ ] Offline mode
- [ ] Push notifications

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0.0 | 2026-01-06 | Major update with modern features |
| 1.2.2 | 2020-03-25 | Base template |

---

## Contributing

When contributing, please:
1. Update this CHANGELOG
2. Follow [Semantic Versioning](https://semver.org/)
3. Use conventional commit messages
4. Test all features before submitting
5. Update documentation

---

## Links

- **Live Site**: [https://almir98.github.io/](https://almir98.github.io/)
- **Repository**: [https://github.com/Almir98/Almir98.github.io](https://github.com/Almir98/Almir98.github.io)
- **Issues**: [Report a bug](https://github.com/Almir98/Almir98.github.io/issues)

---

## Credits

- **Original Template**: [DevPortfolio](https://github.com/RyanFitzgerald/devportfolio-template) by Ryan Fitzgerald
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Framework**: [Bootstrap](https://getbootstrap.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)

---

**Maintained by**: [Almir Tihak](https://github.com/Almir98)  
**Contact**: almir.tihak98@hotmail.com

---

*Last updated: January 6, 2026*

