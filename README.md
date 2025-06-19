
# GlobeHopper – Interactive Scapes 🌍

A modern, responsive travel agency landing page built for Frontend Battle Round 1. This premium website showcases stunning destinations with interactive animations, dark/light mode, and immersive user experience.

![GlobeHopper Preview](https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop)

## 🚀 Live Demo

**Deployment Link:** [Your Lovable App URL]

## ✨ Features

### Core Features
- 🎬 **Preloader Screen** - Animated loading screen with smooth transitions
- 🏠 **Hero Section** - Full-screen video background with compelling CTAs
- 🧭 **Sticky Navigation** - Smooth scroll to sections with responsive design
- 🏝️ **Destinations Gallery** - Interactive cards with hover animations
- 📦 **Travel Packages** - Curated travel deals and offerings
- ⭐ **Testimonials Carousel** - Customer reviews with star ratings
- 📊 **Stats Section** - Animated counters showing company achievements
- 📞 **Contact Form** - Responsive contact section with validation
- 🌙 **Dark/Light Mode** - Theme toggle with smooth transitions

### Interactive Elements
- 💧 **Ripple Effects** - Elegant button and card interactions
- 🎯 **Scroll Animations** - Fade-in effects triggered by viewport
- 📱 **Mobile Responsive** - Optimized for all device sizes
- ⚡ **Smooth Scrolling** - Seamless navigation between sections
- 🎨 **Modern Animations** - CSS keyframes and Tailwind transitions

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.3.1
- **Styling:** Tailwind CSS 3.x
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Build Tool:** Vite
- **TypeScript:** Full type safety
- **Deployment:** Lovable Platform

## 📦 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Contact.tsx         # Contact form section
│   ├── Destinations.tsx    # Featured destinations
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx           # Hero section with CTA
│   ├── Navbar.tsx         # Sticky navigation
│   ├── Packages.tsx       # Travel packages
│   ├── Preloader.tsx      # Loading screen
│   ├── ScrollToTop.tsx    # Scroll to top button
│   ├── Stats.tsx          # Statistics section
│   ├── Testimonials.tsx   # Customer reviews
│   └── ThemeToggle.tsx    # Dark/light mode toggle
├── hooks/
│   ├── useRipple.ts       # Ripple effect hook
│   └── useScrollAnimation.ts # Scroll animations
├── pages/
│   ├── Index.tsx          # Main landing page
│   └── NotFound.tsx       # 404 page
└── App.tsx                # Root component
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd globehopper-interactive-scapes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Design Highlights

### Color Scheme
- **Light Mode:** Clean whites with blue accent (#2563eb)
- **Dark Mode:** Deep grays with purple accents
- **Gradients:** Blue to purple for premium feel

### Typography
- **Headings:** Bold, large fonts for impact
- **Body:** Clean, readable text with proper contrast
- **Responsive:** Scales beautifully across devices

### Animations
- **Scroll Triggers:** Fade-in effects on viewport entry
- **Hover States:** Smooth transitions and scale effects
- **Ripple Effects:** Material Design-inspired interactions
- **Loading States:** Engaging preloader animations

## 🔧 Customization

### Adding New Destinations
Edit `src/components/Destinations.tsx` and add to the destinations array:

```tsx
{
  id: 5,
  name: 'Your Destination',
  image: 'image-url',
  price: 'From $999',
  duration: '5 Days',
  description: 'Your description'
}
```

### Modifying Theme Colors
Update `src/index.css` CSS variables for custom theming:

```css
:root {
  --primary: your-color-hsl;
  --primary-foreground: your-color-hsl;
}
```

## 🤖 AI Tools Used

This project was built with assistance from:
- **Lovable AI** - Primary development and code generation
- **ChatGPT** - Planning and optimization suggestions
- **GitHub Copilot** - Code completion and refactoring

## 📈 Performance Features

- ⚡ **Fast Loading** - Optimized images and lazy loading
- 📱 **Mobile First** - Responsive design principles
- 🎯 **SEO Ready** - Semantic HTML and meta tags
- ♿ **Accessible** - ARIA labels and keyboard navigation
- 🔧 **Modern Build** - Vite for fast development and builds

## 🌟 Future Enhancements

- [ ] Blog/Articles section
- [ ] User authentication
- [ ] Booking system integration
- [ ] Multi-language support
- [ ] Advanced filtering for destinations
- [ ] Payment gateway integration

## 📄 License

This project is created for Frontend Battle Round 1 competition.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📞 Contact

**Project Name:** GlobeHopper – Interactive Scapes  
**Built with:** React + Tailwind CSS + Lovable AI  
**Competition:** Frontend Battle Round 1

---

*Made with ❤️ using Lovable AI Platform*
