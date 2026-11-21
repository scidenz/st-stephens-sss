# Bright Future Secondary School Website

A responsive React + Vite multi-page school website with a black-and-white visual style.

## Pages
- Home: `/`
- Our School: `/about.html`
- Academics: `/academics.html`
- School Life: `/school-life.html`
- Admissions: `/admissions.html`
- Contact: `/contact.html`

The site uses React to render separate page views based on the URL. Vite's development server supports these URLs.

## Run on Windows
Open PowerShell in this project folder and run:

```powershell
npm.cmd install
npm.cmd run dev
```

Then open the local URL shown by Vite. `npm.cmd` avoids the PowerShell `npm.ps1` execution-policy error.

## Images and before publishing
The site includes relevant school, classroom, library, science, sports, student, and graduation photographs via Unsplash image URLs. Internet access is required to load these photographs. They are remote image links, not bundled local image files. For a production launch, download properly licensed photos or use the school's own photos and store them in `public/images`, then update the image URLs in `src/main.jsx`.

## Important placeholders
The school address, phone number, and email are sample placeholders. Confirm and replace them before publishing. The contact form is a front-end demo only and does not deliver messages until connected to a form service.
