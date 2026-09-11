# College Committee Website

A beautiful, responsive website for your college committee featuring event photos, registration, and hidden Easter egg content!

## 📋 Features

✅ **Home Page** - Eye-catching hero section with call-to-action  
✅ **About Page** - Committee mission, history, university info, and values  
✅ **Photo Gallery** - Display photos from last year's events  
✅ **Registration Form** - Collect new member information  
✅ **Hidden Event Page** - Easter egg surprise for December event announcement  
✅ **Fully Responsive** - Works perfectly on mobile, tablet, and desktop  
✅ **Modern Design** - Beautiful gradient colors and smooth animations  

## 🎯 How to Access

### Online (GitHub Pages)
If you've enabled GitHub Pages in your repository settings, your website will be live at:
`https://nick8888kartik.github.io/college-committee-website/`

### Locally
1. Download or clone the repository
2. Open `index.html` in your web browser
3. That's it! No server required.

## 🔐 Easter Egg - Hidden Event Page

Your visitors can unlock a secret surprise! Here's how:

**Method 1: Double-click the logo** 🎓  
Double-click the "🎓 College Committee" logo in the top-left corner of any page.

**Method 2: Press "E" twice quickly** ⌨️  
Press the "E" key twice in quick succession anywhere on the site.

This will reveal the hidden December event announcement page with a special confetti animation!

## 📝 Customization Guide

### Step 1: Update Committee Information

**Edit `about.html`:**
```html
<!-- Replace these placeholders with your info -->
- [YEAR] → Year your committee was founded
- [UNIVERSITY NAME] → Your university name
```

### Step 2: Add Your Photos

**In `gallery.html`:**
Replace the placeholder images:
```html
<img src="https://via.placeholder.com/300x200?text=Event+Photo+1" alt="Event photo 1">
```

With your actual photo URLs. You can:
- Upload photos to GitHub (in an `images/` folder)
- Use image hosting services like Imgur or Cloudinary
- Add local file paths if running locally

**Example with GitHub images:**
```html
<img src="images/event1.jpg" alt="Event photo 1">
```

### Step 3: Update December Event Details

**Edit `hidden-event.html`:**
```html
📅 <strong>Date:</strong> December [DATE TO BE CONFIRMED]
⏰ <strong>Time:</strong> [TIME TO BE CONFIRMED]
📍 <strong>Location:</strong> [VENUE TO BE CONFIRMED]
```

Replace the placeholders with actual event details.

### Step 4: Customize Colors

**Edit `styles.css`:**
The main gradient colors are used throughout. Search for `#667eea` and `#764ba2` to find all color instances:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Replace with your preferred colors. Use a [color picker](https://htmlcolorcodes.com/) to find hex codes.

### Step 5: Update University & Committee Details

Search through all HTML files and replace:
- Committee name
- University name
- Contact information
- Any generic placeholder text

## 📧 Registration Form

The registration form stores data in your browser's local storage. When users submit:
- Their information is saved locally in their browser
- Console shows the submission data
- A success message is displayed

**To see submissions:**
1. Open the website in your browser
2. Open Developer Tools (F12)
3. Go to Console tab
4. Submissions will be logged there

**For production use:** You'll need to connect this to a backend service to actually send emails or store data. Options include:
- Google Forms integration
- Formspree
- Custom backend (Node.js, Python, etc.)
- Firebase

## 📱 Responsive Design

The website automatically adapts to different screen sizes:
- **Desktop** (1200px+) - Full layout
- **Tablet** (768px - 1199px) - Adjusted spacing
- **Mobile** (under 768px) - Single column layout

## 🚀 Deployment

### GitHub Pages (Free & Easy)
1. Go to repository Settings
2. Scroll to "Pages" section
3. Select "Deploy from a branch"
4. Choose `main` branch
5. Save and wait 2-3 minutes
6. Your site will be live!

### Other Hosting Options
- Netlify (Free)
- Vercel (Free)
- Firebase Hosting (Free tier)
- Traditional web hosting

## 📂 File Structure

```
college-committee-website/
├── index.html              # Homepage
├── about.html              # About & Mission page
├── gallery.html            # Photo gallery
├── register.html           # Registration form
├── hidden-event.html       # Easter egg page
├── styles.css              # All styling
├── script.js               # Interactivity & Easter egg logic
├── README.md               # This file
└── images/                 # (Optional) Folder for your photos
    ├── event1.jpg
    ├── event2.jpg
    └── ...
```

## ⚙️ Tips & Tricks

1. **Add more pages**: Copy an existing HTML file and modify the content
2. **Change fonts**: Update the font-family in `styles.css`
3. **Add more photos**: Copy a gallery-item div and update the image URL
4. **Contact form**: Consider integrating Formspree or similar service
5. **Dark mode**: Add a toggle by creating alternate CSS variables

## 🐛 Troubleshooting

**Images not showing?**
- Check the image URL is correct
- For local images, ensure the path is relative to the HTML file
- Check browser console (F12) for error messages

**Form not working?**
- Open Developer Tools (F12)
- Go to Console tab
- Submit the form and check for errors

**Easter egg not working?**
- Make sure JavaScript is enabled
- Try the keyboard shortcut (press "E" twice)
- Check console for any errors

## 📞 Support

If you need help:
1. Check the browser console (F12) for error messages
2. Verify all file paths are correct
3. Make sure you're viewing via a web server (not just opening the file)
4. Test in different browsers

## 🎨 Further Customization

This is just a starting template! Feel free to:
- Add more pages (events, blog, team members)
- Add social media links
- Create a carousel/slider for gallery
- Add animations and effects
- Integrate a backend for form submissions
- Add a countdown timer for December event
- Create a testimonials section

## 📄 License

Free to use and modify for your college committee!

---

**Made with ❤️ for your committee!** 🎓