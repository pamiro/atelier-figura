# Atelier Figura Website

An exact recreation of [atelier-figura.nl](https://atelier-figura.nl/) built with React and Tailwind CSS.

## Features

- ✅ Exact content from original website
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Mobile hamburger menu
- ✅ Google Maps integration
- ✅ Weekly schedule overview
- ✅ Summer weeks information
- ✅ Contact section

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Google Fonts** - Typography (Open Sans, Playfair Display)

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Project Structure

```
atelier-figura/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation with smooth scroll
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Overview.jsx     # Schedule overview
│   │   ├── ScheduleDay.jsx  # Reusable day card
│   │   ├── SummerWeeks.jsx  # Summer courses
│   │   ├── Contact.jsx      # Contact & map
│   │   └── Footer.jsx       # Footer section
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── postcss.config.js        # PostCSS configuration
```

## Content Sections

### 1. Inloop Atelier
Information about drop-in studio sessions, pricing, and what participants need to bring.

### 2. Weekly Schedule
- **Tuesday**: Portrait sessions (afternoon and evening)
- **Wednesday**: Portrait sessions (evening)
- **Thursday**: Private group
- **Friday**: Quick poses with nude model
- **Sunday**: Monthly painting, drawing, and sculpting sessions

### 3. Summer Weeks (2026)
- Drawing week (Tekenweek)
- Painting week (Schilderweek)

### 4. Contact
Address: Nobeldwarsstraat 9, Utrecht
Includes Google Maps integration

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: '#2c3e50',    // Main text color
  secondary: '#34495e',  // Secondary color
  accent: '#e74c3c',     // Accent color
}
```

### Fonts
Google Fonts are loaded in `index.html`. Update the links and `tailwind.config.js` to change fonts.

## License

© Copyright. Alle rechten voorbehouden.

---

Built with ❤️ using React and Tailwind CSS
