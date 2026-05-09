# VEHICLE Systems Lab draft: HOME-base architecture

This local draft keeps HOME, VEHICLE-ODI and VEHICLE-CPS on the same visual architecture.

## Implemented

- ODI and CPS now use the same structural footprint as HOME:
  - `hero-section`
  - `hero-content`
  - `left-panel`
  - `right-panel`
  - `cube-card`
  - `info-card`
- Removed internal content sliders/scrollbars from project pages.
- ODI keeps the 3D Earth/orbital debris visual.
- CPS keeps the 3D rotating human silhouette.
- CPS content follows the provided VEHICLE-CPS v1.1 PDF: civil protection, environmental safety, P0-P6, 1,000-10,000 node simulations, mandatory human supervision, and no surveillance framing.
- Official email remains `contact@vehiclesystemslab.com`.

## Review locally

Copy these two files into `src` and run:

```powershell
npm run dev
```

Review:

1. HOME
2. Space Debris Project / VEHICLE-ODI
3. VEHICLE-CPS
4. Contact & Collaboration

Do not push until the visual footprint is approved.
