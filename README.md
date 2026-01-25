# Artist Portfolio Website - Angular

A professional, modern artist portfolio website built with Angular inspired by artist portfolio sites like snoopdogg.com.

## Quick Start

### 1. Navigate to project:
```bash
cd d:\twoEyedWizard\twoeyedwizard-portfolio
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Run development server:
```bash
ng serve --open
```

The application will open at `http://localhost:4200/`

## Project Features

### Pages & Sections
1. **Home** - Hero banner with featured albums and latest news
2. **Music** - Complete album catalog with stream counts
3. **News** - Latest news and announcements feed
4. **Appearances** - Upcoming events, tours, and performances
5. **Gallery** - Photo gallery with category filtering
6. **Contact** - Contact form with validation
7. **Shop** - Official merchandise store

### Design Highlights
- Modern gradient UI with blue/cyan color scheme
- Dark theme (#0a0a0a background)
- Fully responsive for all devices
- Smooth animations and transitions
- Professional navigation with mobile menu
- Hover effects and interactive elements
- Font Awesome icons included

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Navigation bar component
│   │   ├── footer/          # Footer component
│   │   ├── home/            # Home page with hero
│   │   ├── music/           # Albums catalog
│   │   ├── news/            # News articles
│   │   ├── appearances/     # Events & tours
│   │   ├── gallery/         # Photo gallery
│   │   ├── contact/         # Contact form
│   │   └── shop/            # Merchandise shop
│   ├── services/            # Angular services
│   ├── app.ts               # Root component
│   ├── app.routes.ts        # Routes configuration
│   └── app.scss             # Global styles
├── styles.scss              # Global stylesheet
└── main.ts                  # Entry point
```

## Technologies Used
- Angular 18+
- TypeScript
- SCSS/CSS3
- Reactive Forms
- Font Awesome 6.4
- Bootstrap 5 (CSS framework)

## Color Scheme
- **Primary**: #0066ff (Electric Blue)
- **Secondary**: #00d4ff (Cyan)
- **Background**: #0a0a0a (Dark Black)
- **Text**: #ffffff (White)

## Building for Production

```bash
ng build --configuration production
```

## Deployment Options

### Netlify
1. `ng build --configuration production`
2. Upload `dist/` folder to Netlify

### GitHub Pages
```bash
ng build --configuration production --base-href="/repo-name/"
```

### Firebase
```bash
firebase init
firebase deploy
```

## Customization

### Update Colors
Edit `src/app/app.scss`:
```scss
:root {
  --primary-color: #0066ff;
  --secondary-color: #00d4ff;
  --dark-bg: #0a0a0a;
}
```

### Update Content
- **Home**: Edit `src/app/components/home/home.ts`
- **Music**: Edit `src/app/components/music/music.ts`
- **News**: Edit `src/app/components/news/news.ts`
- **Shop**: Edit `src/app/components/shop/shop.ts`

### Replace Images
Replace placeholder images in component templates with your actual assets.

## Troubleshooting

### PowerShell Execution Policy
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Port 4200 Already in Use
```bash
ng serve --port 4201
```

### Clean Install
```bash
rm -r node_modules package-lock.json
npm install
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Features Roadmap
- [ ] Backend API integration
- [ ] User authentication
- [ ] Shopping cart & payments
- [ ] Blog system
- [ ] Video integration
- [ ] Email notifications
- [ ] Analytics
- [ ] Internationalization (i18n)

## License
Free to use and modify for personal/commercial projects.

## Support
Check Angular documentation: https://angular.io

---
**Created:** January 2024 | **Version:** 1.0.0

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
