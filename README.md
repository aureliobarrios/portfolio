# Personal Portfolio Website

A clean, professional single-page portfolio built with vanilla HTML/CSS/JS for GitHub Pages deployment. No build tools, no dependencies - just pure code!

## 🚀 Quick Start

### Local Development

```bash
cd /Users/ari/Code/personal-website
open index.html  # Opens in default browser on macOS
# or
open -a Chrome index.html  # Opens in Chrome specifically
```

### Deploy to GitHub Pages

1. Initialize Git repo:
```bash
cd /Users/ari/Code/personal-website
git init
git add .
git commit -m "Initial commit"
```

2. Create a new GitHub repository at github.com/yourusername/your-repo-name

3. Link to GitHub Pages:
```bash
ghp-pages  # If you have ghp-pages installed, otherwise:
git remote add origin github.com/your-user/repo.git
git push -u main gh-pages
```

Or simply enable GitHub Pages in repo settings → Source branch → Deploy from `gh-pages` branch.

## 📁 Project Structure

```
personal-website/
├── index.html           # Main landing page (single-page design)
├── css/
│   └── styles.css       # Full responsive stylesheet with CSS variables
├── js/
│   ├── blog.js          # Blog post parser and renderer
│   └── main.js          # Smooth scroll, animations, utilities
├── projects/
│   ├── project1.html    # Project detail pages (standalone)
│   ├── project2.html
│   └── project3.html
└── blog/
    ├── post1.md         # Blog posts in markdown format
    └── post2.md
```

## 🎨 Features

- **Responsive Design**: Mobile-first, breaks at 640px and 968px
- **Professional Color Scheme**: Neutral tones with accent colors
- **Smooth Navigation**: Sticky header with scroll-to-section links
- **MDX Blog System**: JavaScript-powered markdown rendering (no server needed)
- **Accessible**: Semantic HTML, proper contrast ratios, keyboard navigation
- **SEO Friendly**: Meta tags, structured basic schema support

## 📝 Customization Guide

### Update Personal Information

Edit `index.html` and search/replace:
- "Alex Chen" → Your name
- Bio text in the about section
- Project descriptions in project cards
- Blog post titles and excerpts

### Add Real Project Images

Replace placeholder URLs with your own images:

```html
<!-- In index.html, project cards -->
<img src="images/project1-screenshot.png" alt="Project 1">

<!-- In footer for social links -->
<a href="#" class="social-link github">...</a>
```

### Modify Color Scheme

Edit `css/styles.css` variables at top:
```css
--primary-color: #2c5282;      /* Main accent (navy blue) */
--secondary-color: #319795;    /* Complementary (teal) */
--bg-primary: #ffffff;          /* Light background */
--text-primary: #2d3748;       /* Primary text color */
```

### Add More Blog Posts

Add to `blog/postX.md` following the markdown format, then link from the main blog section. The blog system auto-renders any `.md` file from `/blog/`.

## 🖥️ Deployment Checklist

- [ ] Set up GitHub repository
- [ ] Commit all files
- [ ] Enable GitHub Pages in repo settings (Settings → Pages → source: gh-pages branch)
- [ ] Wait 1-2 minutes for build to complete
- [ ] Access at `https://yourusername.github.io/personal-website/`

### Custom Domain (Optional)

In GitHub Pages settings, add your custom domain under "Custom domain"

## 📊 Analytics (Optional)

To track visitors without external scripts:
1. Create a separate empty analytics.html that loads Google Analytics/Plausible
2. Load it in background via Service Worker (advanced)
3. Or use GitHub Pages' built-in simple stats if available

## 🛠️ Troubleshooting

- **Images not loading**: Check file paths are relative and correct
- **404 on pages**: Push to gh-pages branch or check repo settings
- **Styling broken**: Clear browser cache, ensure CSS loads

## 📜 License

This template is available for personal use. Feel free to modify and deploy!

---

Built with ☕ and ❤️ • Perfect for data scientists transitioning to AI engineering roles
