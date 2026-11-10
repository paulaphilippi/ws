# Paula Philippi – Research Profile Website

This repository hosts the personal academic portfolio and research website of **Paula Philippi** (Research Associate & PhD Student at the Chair of Clinical Child and Adolescent Psychology and Psychotherapy, University of Wuppertal).

The website is statically hosted via **GitHub Pages** from the `main` branch.

---

## 📁 Repository Structure

```text
├── index.html                   # Main landing page (Bio, About Me, Work overview)
├── project-pages/               # Subpages for specific sections
│   ├── publications.html        # Publications, Preprints & Preregistrations
│   ├── slides.html              # Conference talks, presentations & slide downloads
│   ├── projects.html            # Research projects (READY, STRESSY, RehaCAT+)
│   ├── cv.html                  # Academic CV overview & PDF viewer
│   └── project-template.html    # Blueprint for adding future project pages
├── css/                         # Styling (pure CSS, no build tools needed)
│   ├── layout.css               # Page geometry, spacing, flexbox & media queries (mobile responsive)
│   ├── typography.css           # Font families, sizes, font weights, line clamps
│   └── utilities.css            # Buttons, navbar, footer, links, and icons
├── js/
│   └── script.js                # Minimal JavaScript (optional smooth scrolling)
├── assets/
│   ├── files/                   # Downloadable PDFs (CV, slides, posters)
│   ├── icons/                   # UI and social media icons (SVG / PNG / JPG)
│   └── images/                  # Profile pictures and photos
├── .gitignore                   # Ignores OS and temporary files (.DS_Store, .Rhistory, etc.)
└── README.md                    # Documentation & maintenance guide
```

---

## 💻 How to Preview Locally

Because this is a pure static website (HTML, CSS, JS), you do not need any build tools, compilers, or server setups.

### Method 1: Double-Click in Finder (Easiest)
1. Open the repository folder (`ws`) in **Finder**.
2. Simply double-click `index.html` (or right-click → *Open With* → your preferred browser, e.g. Safari or Chrome).
3. The website will open in your browser (`file:///...`). All subpages and styling will work immediately because all links use relative paths.

### Method 2: Local Web Server via Terminal (Optional)
If you ever prefer running a local HTTP server:
1. Open your terminal in the repository folder (`ws`).
2. Run:
   ```bash
   python3 -m http.server 8000
   ```
3. Open your browser and navigate to `http://localhost:8000`.
4. Press `Ctrl + C` in the terminal to stop the server when done.

---

## 📝 How to Update Content

### 1. Adding a Publication or Preprint
Open `project-pages/publications.html` and add a new paragraph under either `<div class="main-title">Publications</div>` or `<div class="main-title">Preprints</div>`:
```html
<p>Author, A., <strong>Philippi, P.</strong>, & Colleague, C. (2026). Paper title. <i>Journal Name, Vol</i>(Issue). <a href="https://doi.org/..." target="_blank" rel="noopener noreferrer" class="no-underline">https://doi.org/...</a></p>
```

### 2. Adding a Conference Talk & Slides
1. Place your slide PDF into `assets/files/` (e.g. `assets/files/talk_2026.pdf`).
2. Open `project-pages/slides.html` and insert a new talk block:
   ```html
   <div class="body-text"><br>
     <strong>2026 - Name of the Conference</strong><br><br>
     Short description of the talk and presented findings.<br><br>
     <a class="button" href="../assets/files/talk_2026.pdf" download="Talk2026_PaulaPhilippi.pdf" target="_blank">
       <span class="button-text">Download slides</span>
     </a>
   </div>
   ```

### 3. Updating the CV
1. Replace `assets/files/CV.pdf` with your new PDF file (keeping the filename `CV.pdf` or updating the path).
2. In `project-pages/cv.html`, update the date text (`Last updated in [Month Year]`).

---

## 🚀 Committing and Deploying Changes

### Using GitHub Desktop (Recommended)

1. Open **GitHub Desktop**.
2. Select your repository `ws`. In the left sidebar under **Changes**, you will see all modified and newly created files.
3. In the bottom-left corner, fill in the commit details:
   * **Summary (required):** e.g. `Clean up HTML structure, fix navigation and add .gitignore`
   * **Description (optional):** Details on what was changed.
4. Click the blue button **Commit to main**.
5. In the top bar, click **Push origin** (or `Cmd + P`) to upload the commit to GitHub.
6. GitHub Pages will automatically update your live site within 1–2 minutes!

### Using the Terminal (Alternative)

```bash
git status
git add .
git commit -m "Clean up HTML structure, fix navigation and add .gitignore"
git push origin main
```

---

## 📜 Attribution & License
Website structure adapted from the [Unemployables Portfolio Template](https://github.com/ndoherty-xyz/unemployables-portfolio-template) under the CC0 1.0 Universal License.
