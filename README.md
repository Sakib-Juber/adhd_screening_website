# Clarity — ADHD / Autism Indicator Screener

A full-stack Express + Vite website adapted from the supplied Python terminal program.

## Features
- Original 16 questions, organized by section.
- Clean color-spectrum confidence slider (1–10) with editable numeric field (keyboard input supported).
- Top-right light/dark theme switch; preference is remembered in the browser.
- Automatically scrolls to the top whenever a new screen loads, including results.
- Previous/next flow, progress, answer review/edit, results dashboard, and downloadable text report.
- Express API stores session and report objects in an in-memory `Map`; no database or file persistence.
- Responsive dark UI.

## Run locally
Requires Node.js 18+.
```bash
npm install
npm run dev
```
Open the Vite URL (normally http://localhost:5173). The dev server proxies `/api` to Express at port 3000.

Production:
```bash
npm run build
npm start
```
Open http://localhost:3000.

## Storage
Server data exists only in process memory and disappears on server restart. Browser answers are held in the active page while completing the screener. Multiple server instances do not share memory.

## Health disclaimer
This is an informal, non-diagnostic self-reflection tool, not a validated clinical screening instrument. The custom scoring and labels reproduce the supplied program and should not be treated as medical conclusions. If you have concerns about ADHD or autism, discuss your experiences with a qualified professional.
