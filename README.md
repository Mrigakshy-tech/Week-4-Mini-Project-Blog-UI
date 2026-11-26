# Week 4 Mini Project – Blog UI

A responsive blog front-end built with React, Vite, React Router, and local mock JSON data.

## Assignment requirements covered

- Blog listing page with article cards.
- Individual article detail pages using dynamic routes.
- Mock JSON data stored in `src/data/posts.json`.
- Client-side navigation using React Router.
- Category filters and article search.
- Responsive layout for desktop and mobile.
- Reusable post card component and clear empty state.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the localhost URL printed by Vite (normally `http://localhost:5173`).

## Build

Run `npm run build` to create the production build in `dist/`.

## Routes

- `/` – blog list, featured article, categories, and search.
- `/post/:id` – article detail page.

## Mock data

The sample articles are stored in `src/data/posts.json`. Add or edit objects there to change the blog content.

## Project structure

```text
output/
  screenshot.png
src/
  data/posts.json
  App.jsx
  main.jsx
  styles.css
index.html
package.json
vite.config.js
README.md
```
