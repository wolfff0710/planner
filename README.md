# Planner

Daily task planner: projects, labels, priorities, reschedule (Todoist-style), repeat, widgets / list / schedule views. Installable and works offline (PWA). Data is stored in the browser (localStorage) on each device.

## Deploy (GitHub Pages)
1. Create a new repo and upload everything in this folder (keep the folder structure).
2. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`.
3. Open `https://<username>.github.io/<repo>/` on your tablet.
4. Chrome: ⋮ → **Install app**. iPad Safari: Share → **Add to Home Screen**.

## Edit and rebuild
```
npm install
npm run build
```
Source is in `src/`. After a rebuild, bump `CACHE` in `sw.js` (e.g. `planner-v2`) so installed copies update.
