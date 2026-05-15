# tylars.com

Personal resume site styled as a mechanical engineering drawing \ Hosted via GitHub Pages.

## Design concept

Design inspiration was taken from technical drawings from solidworks or fusion. Design elements like revision tables, title blocks, and the grid coortinate system were carried over. Attempts at dimension callouts and leader lines were scrapped due to them making the site look cluttered.

## How scaling works

The entire layout lives on a fixed **1600×1000 px canvas**. `scale.js` calculates a uniform CSS `transform: scale()` at load and on every resize, so the drawing always fills the viewport without reflow or media-query breakpoints disrupting the layout. On screens narrower than 768px the transform is dropped and the site switches to a standard scrollable mobile layout instead.

## Deployment

Served directly from the `main` branch via **GitHub Pages** — no build step, no CI pipeline. Push to `main` and the site updates automatically.

## Stack

- Plain HTML, CSS, vanilla JS — no framework, no bundler
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts
- [GoatCounter](https://www.goatcounter.com/) for privacy-friendly analytics
