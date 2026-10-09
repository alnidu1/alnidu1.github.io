# Andy Liu — Personal Portfolio

Personal portfolio site for [alnidu1.github.io](https://alnidu1.github.io/), built with Angular.

## Development

Run `npm ci` to install the lockfile dependencies, then start the local development server:

```sh
npm start
```

Create a production build with:

```sh
npm run build
```

The production output is written to `docs/` for GitHub Pages.

## Profile photo

The portfolio uses `src/assets/image/andy_suit.jpg`, a compressed copy of the original `andy_suit.PNG`. To change the photo, replace the JPEG and keep its name, or update the image path in `src/app/app.component.html`.

## Updating site content

The portfolio sections are in `src/app/app.component.html`; site colors and responsive styles are in `src/styles.css`. The scroll-reveal effect is implemented in `src/assets/js/scroll-reveal.js` and respects reduced-motion preferences. The `Projects` section is intentionally an empty state until project details are ready.

The hero's `Resume` action opens `src/assets/andy-liu-resume.pdf` in a new tab. Update this file and its matching `docs/assets/andy-liu-resume.pdf` copy when replacing the résumé.
