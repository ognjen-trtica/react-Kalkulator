# Repository overview

This is a very small **create‑react‑app** project bootstrapped with TypeScript.  There are no custom build tools or server code – everything lives under `src/` and `public/`.

Key points:

* Entry point: `src/index.tsx` renders `<Kalkulator />` (exported from `src/App.tsx`).  The main component is still called `Kalkulator`.
* Styling is trivial: `src/App.css` and `src/index.css` are imported by the top‑level files.  You can add additional CSS/SCSS files anywhere and import them in components.
* Tests live alongside components with the `.test.tsx` suffix and use `@testing-library/react`.
* Dependencies are standard CRA ones (`react`, `react-dom`, `react-scripts`, plus types and testing-library packages).  Add new packages with `npm install --save ...` or `npm install --save-dev ...` as usual.


## Architecture and conventions

1. **Component files** use `.tsx` and default exports.  The only component at the moment is `Kalkulator` in `App.tsx`.  When you add new features, put them in `src/components` or directly under `src/`, but keep the naming consistent.
2. **State and logic** are expected to be local to components; there is currently no global state manager (Redux, context, etc.).  Use React hooks for state/effects.
3. **Routing** is not present; this is a single‑page UI.  If you add `react-router` later, import it in `index.tsx` or `App.tsx`.
4. **Tests** are run with `npm test` (invokes `react-scripts test`).  The sample test in `App.test.tsx` simply checks that the word "Kalkulator" renders.


## Developer workflows

Use the scripts provided in `package.json`:

```bash
npm start       # launches development server on localhost:3000
npm run build   # creates a production build in the ./build folder
npm test        # starts jest in watch mode
npm run eject   # uncommon, only if you need to customise CRA config
```

> ⚠️ The repository is currently small; there’s no lint or prettier configuration beyond CRA defaults.

The workspace uses Node&nbsp;16+; ensure your local environment is compatible or use the version bundled with the project.


## Project-specific notes

* The top‑level component name `Kalkulator` is used everywhere instead of the usual `App` – tests and imports refer to it by that name.
* Keep `public/` files minimal (index.html, static manifest).  Assets placed here are served verbatim and referenced with `%PUBLIC_URL%` if needed.
* When adding new packages, update `package.json` and commit the lockfile (`npm` uses `package-lock.json` by default).


## Helpful files

* `src/index.tsx` – React DOM render call
* `src/App.tsx` – main UI component
* `src/App.test.tsx` – example test pattern
* `tsconfig.json` – TypeScript config, mostly defaults from CRA
* `README.md` – currently contains the stock CRA README; update as features are added


## Guidance for AI agents

* Assume any new component will live in `src/` and use default exports.
* Use `react-scripts` commands for building/testing; do not invent new build scripts.
* Avoid touching CRA configuration unless `npm run eject` has been executed (there’s no sign of customized configuration yet).
* For UI text/content, look for the string "Kalkulator" – the sample test targets it.

> 📝 After changes to this file or project structure, please ask the user if anything is unclear or missing.