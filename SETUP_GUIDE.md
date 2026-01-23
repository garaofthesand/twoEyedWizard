# Angular Artist Portfolio - Setup & Running Guide

## ✅ Project Successfully Created!

Your Angular artist portfolio website has been completely built with all components, styling, and functionality.

## 📋 What's Included

### Components (8 Total)
✓ Navbar - Responsive navigation with mobile menu
✓ Home - Hero section with featured content
✓ Music - Album catalog with stream counts
✓ News - Article feed with categories
✓ Appearances - Event listings and tour information
✓ Gallery - Photo gallery with filtering
✓ Contact - Contact form with validation
✓ Shop - Merchandise store with products
✓ Footer - Social links and quick navigation

### Design Features
✓ Modern gradient backgrounds (Blue/Cyan theme)
✓ Dark mode theme
✓ Fully responsive design (Mobile, Tablet, Desktop)
✓ Smooth animations and transitions
✓ Professional color scheme
✓ Hover effects and interactive elements

---

## 🚀 How to Run the Website

### Step 1: Open PowerShell as Administrator
- Right-click PowerShell
- Select "Run as administrator"
- Navigate to: `cd d:\twoEyedWizard\twoeyedwizard-portfolio`

### Step 2: Fix Execution Policy (If Needed)
If you get a PowerShell error, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```
Then press `Y` to confirm.

### Step 3: Install Dependencies
```bash
npm install
```
Wait for this to complete (~5 minutes).

### Step 4: Start Development Server
```bash
ng serve --open
```
or
```bash
npm start
```

The website will automatically open in your default browser at: `http://localhost:4200`

---

## 📁 Project Structure

```
d:\twoEyedWizard\twoeyedwizard-portfolio\
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/          [Navigation Bar]
│   │   │   ├── footer/          [Footer]
│   │   │   ├── home/            [Home Page]
│   │   │   ├── music/           [Music Catalog]
│   │   │   ├── news/            [News Feed]
│   │   │   ├── appearances/     [Events & Tours]
│   │   │   ├── gallery/         [Photo Gallery]
│   │   │   ├── contact/         [Contact Form]
│   │   │   └── shop/            [Shop/Merchandise]
│   │   ├── services/            [Angular Services]
│   │   ├── app.ts               [Root Component]
│   │   ├── app.routes.ts        [Routes Config]
│   │   ├── app.html             [Root Template]
│   │   └── app.scss             [Global Styles]
│   ├── styles.scss              [Global CSS]
│   └── main.ts                  [Entry Point]
├── package.json                 [Dependencies]
├── angular.json                 [Angular Config]
├── tsconfig.json               [TypeScript Config]
└── README.md                    [Documentation]
```

---

## 🎨 Customization Guide

### Change Colors
Edit `src/app/app.scss`:
```scss
:root {
  --primary-color: #0066ff;        // Change this
  --secondary-color: #00d4ff;      // Change this
  --dark-bg: #0a0a0a;             // Change this
}
```

### Update Content

#### Home Page Albums
Edit: `src/app/components/home/home.ts`
```typescript
featuredAlbums = [
  {
    id: 1,
    title: 'Your Album Title',
    artist: 'Your Name',
    image: 'URL_TO_YOUR_IMAGE',
    year: 2024
  }
]
```

#### Music Catalog
Edit: `src/app/components/music/music.ts`
Update the `albums` array with your actual albums.

#### News Articles
Edit: `src/app/components/news/news.ts`
Update the `newsArticles` array with your news.

#### Shop Products
Edit: `src/app/components/shop/shop.ts`
Update the `products` array with your merchandise.

### Replace Images
All images use placeholder URLs. Replace with your actual images:
- Artist photos
- Album covers
- Event photos
- Gallery images
- Product images

---

## 🔧 Common Commands

```bash
# Start development server
ng serve

# Start with auto-open in browser
ng serve --open

# Build for production
ng build --configuration production

# Run tests
ng test

# Generate new component
ng generate component components/my-component

# Generate new service
ng generate service services/my-service
```

---

## 📱 Responsive Design

The website is fully responsive across:
- **Mobile**: < 768px (Phones)
- **Tablet**: 768px - 1024px (iPads)
- **Desktop**: > 1024px (Computers)

Test on different screen sizes using browser DevTools (F12).

---

## 🌐 Deployment

### Deploy to Netlify
1. Build: `ng build --configuration production`
2. Upload `dist/twoeyedwizard-portfolio/browser/` to Netlify
3. Configure as SPA

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
```bash
ng build --configuration production --base-href="/repo-name/"
# Upload dist/ folder
```

### Deploy to Firebase
```bash
npm install -g firebase-tools
firebase init
firebase deploy
```

---

## 🔍 Features Overview

### Navbar
- Logo/Brand
- Navigation links to all pages
- Mobile hamburger menu
- Social media icons
- Sticky positioning

### Home Page
- Large hero banner
- Call-to-action buttons
- Featured albums section
- Latest news feed
- Newsletter signup

### Music Page
- Album grid layout
- Album covers with hover effects
- Play button overlay
- Stream counts
- Track information

### News Page
- Article cards
- Category badges
- Dates and excerpts
- Featured images
- Read more links

### Appearances Page
- Event listings
- Date and location info
- Status indicators
- Featured images
- Get tickets button

### Gallery Page
- Photo grid
- Category filtering
- Hover overlays
- Smooth animations
- Responsive layout

### Contact Page
- Contact form with validation
- Contact information section
- Business inquiries info
- Social media links
- Email field

### Shop Page
- Product grid
- Product images
- Pricing display
- Category labels
- Add to cart buttons

### Footer
- Quick links
- Social media links
- Current year
- Business info

---

## ⚡ Performance Tips

1. **Images**: Optimize images before uploading
2. **Lazy Loading**: Can be added to routes
3. **Caching**: Configure service workers for PWA
4. **CDN**: Deploy assets on CDN
5. **Minification**: Already done in production build

---

## 🐛 Troubleshooting

### Port 4200 Already in Use
```bash
ng serve --port 4201
```

### Styles Not Loading
```bash
# Clear cache and rebuild
ng serve --poll
```

### Module Errors
```bash
rm -r node_modules package-lock.json
npm install
```

### PowerShell Won't Run Scripts
Run as Administrator:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```

---

## 📚 Learning Resources

- **Angular Docs**: https://angular.io
- **Angular Tutorial**: https://angular.io/tutorial
- **TypeScript Guide**: https://www.typescriptlang.org/docs
- **SCSS Guide**: https://sass-lang.com/guide
- **MDN Web Docs**: https://developer.mozilla.org

---

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start server: `ng serve --open`
3. 🔄 Update content with your information
4. 🎨 Customize colors and branding
5. 📸 Replace placeholder images
6. 🚀 Deploy to production

---

## 📞 Support

If you encounter issues:
1. Check the browser console (F12)
2. Look at terminal output
3. Check Angular documentation
4. Review component source files

---

**Website Ready!** 🎉

Your professional artist portfolio website is now ready to customize and deploy!

Visit: http://localhost:4200 (after running `ng serve --open`)
