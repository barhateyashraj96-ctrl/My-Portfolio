# Portfolio Website

A clean, responsive portfolio website for a BCA 1st year student learning web development.

## Customize the content

1. Open the file `src/App.jsx`.
2. Replace the placeholder content such as:
   - `Your Name`
   - `ABC College of Management & Technology`
   - `Jaipur, Rajasthan`
   - email, LinkedIn, and GitHub links
   - project titles, descriptions, and demo links
3. Update the color theme and spacing in `src/App.css` if you want to match your personal style.
4. Update the page title and meta description in `index.html`.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal, usually `http://localhost:5173`.

## Build for production

```bash
npm run build
```

This creates a production-ready build in the `dist` folder.

## Deploy

### Netlify

1. Push the project to GitHub.
2. Go to Netlify and click "Add new site" > "Import project".
3. Choose your repository.
4. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy your site.

### Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the default Vite settings or set the build command to `npm run build`.
4. Deploy.

## Notes

This project uses Bootstrap for layout and custom CSS for styling. The design includes smooth scrolling, semantic sections, and SEO-friendly metadata for a polished personal portfolio.
