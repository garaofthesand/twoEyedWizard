# 🎯 QUICK START - DO THIS NOW!

## 3 Simple Steps to See Your Website

### Step 1: Open Command Prompt
Navigate to: `d:\twoEyedWizard\twoeyedwizard-portfolio`

### Step 2: Install (First Time Only)
```bash
npm install
```
Wait for completion (~5 minutes)

### Step 3: Start Website
```bash
ng serve --open
```

**That's it!** Browser opens automatically to `http://localhost:4200`

---

## 🎨 Website Pages

Once running, visit these pages:
- 🏠 Home: `http://localhost:4200`
- 🎵 Music: `http://localhost:4200/music`
- 📰 News: `http://localhost:4200/news`
- 📅 Appearances: `http://localhost:4200/appearances`
- 📸 Gallery: `http://localhost:4200/gallery`
- 📧 Contact: `http://localhost:4200/contact`
- 🛍️ Shop: `http://localhost:4200/shop`

---

## 🛠️ If PowerShell Won't Work

Try these fixes:

1. **Run PowerShell as Administrator**
   - Right-click PowerShell
   - Select "Run as Administrator"

2. **Fix Execution Policy**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
   ```

3. **Try Using CMD Instead**
   - Open Command Prompt (not PowerShell)
   - Run the commands

---

## 📝 Customize Your Site

### Change Colors
Edit: `src/app/app.scss`
Find:
```scss
--primary-color: #0066ff;
--secondary-color: #00d4ff;
```
Change to your colors!

### Update Content
Edit these files:
- **Home albums**: `src/app/components/home/home.ts`
- **Music catalog**: `src/app/components/music/music.ts`
- **News**: `src/app/components/news/news.ts`
- **Shop**: `src/app/components/shop/shop.ts`

### Replace Images
Replace all `https://via.placeholder.com/...` URLs with your actual image URLs.

---

## 📱 Check Mobile View
1. Open website in browser
2. Press `F12` to open DevTools
3. Click the phone icon 📱 in top left
4. See how it looks on mobile!

---

## ✅ Features Working

✅ Home page with hero section
✅ Navigation menu
✅ All pages routable
✅ Mobile responsive
✅ Professional styling
✅ Contact form
✅ Album gallery
✅ News feed
✅ Social links
✅ Footer

---

## 🚀 Next: Deploy Online

When ready to go live, run:
```bash
ng build --configuration production
```

Then upload the `dist/` folder to Netlify, Firebase, or GitHub Pages!

---

## 📞 Questions?

- Check `README.md` for full docs
- See `SETUP_GUIDE.md` for detailed setup
- Read `PROJECT_SUMMARY.md` for features

---

**Ready? Run these 3 commands:**

```bash
cd d:\twoEyedWizard\twoeyedwizard-portfolio
npm install
ng serve --open
```

**Your website loads in 30 seconds! 🎉**
