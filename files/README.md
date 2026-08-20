# Nrushad Joshi — Portfolio

A static portfolio site styled after an HPC job-scheduler dashboard (Slurm `#SBATCH` directives + a `squeue` job queue as navigation).

## Structure
```
├── index.html              # home page
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/profile.jpg     # <-- add your photo here (see below)
└── README.md
```

## Add your photo
Drop a photo file at `assets/img/profile.jpg` (any reasonably sized JPG/PNG works — a portrait crop, roughly 4:5, looks best). The page already points to this path and will swap in your photo automatically; until it's there, a "no signal" placeholder is shown.

## Hosting on GitHub Pages
1. Create a new repo (e.g. `nrushad-portfolio`) or use an existing one.
2. Push these files to the repo root (or to a `docs/` folder — just update Pages settings to match).
3. On GitHub: **Settings → Pages → Source** → choose the branch (e.g. `main`) and folder (`/root` or `/docs`).
4. Your site will be live at `https://<username>.github.io/<repo-name>/` within a minute or two.

If you want it at the root domain `https://<username>.github.io/`, name the repo exactly `<username>.github.io`.

## Next pages
The home page's job queue links to:
- `work-experience.html`
- `projects.html`
- `leadership.html`
- `skills.html`
- `summary.html`

These aren't built yet — happy to do them next, matching this same visual system.
