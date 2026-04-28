# Portfolio v2 — Garance Pruvost

Version **HTML / CSS / Vanilla JavaScript** du portfolio, sans aucune dépendance.

## Fichiers

```
portfolio2/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Différences avec la v1 (HTML / CSS pure)

| Fonctionnalité            | v1 (HTML/CSS) | v2 (HTML/CSS/JS) |
|---------------------------|:-------------:|:----------------:|
| Navigation par ancre      | ✅            | ✅               |
| Design responsive         | ✅            | ✅               |
| Menu burger mobile        | ❌            | ✅               |
| Bascule clair / sombre    | ❌            | ✅ (avec mémo)   |
| Animations au scroll      | ❌            | ✅               |
| Formulaire avec validation| ❌            | ✅               |
| Mémorisation du thème     | ❌            | ✅ localStorage  |

## Aperçu local

Double-clic sur `index.html` (ou `Live Server` dans VSCode).

## GitHub Pages

Mêmes étapes que la v1 :

```bash
git init
git add .
git commit -m "Portfolio v2"
git branch -M main
git remote add origin https://github.com/<pseudo>/<repo>.git
git push -u origin main
```

Puis `Settings > Pages > main / root > Save`.

## Notes pédagogiques (vanilla JS)

- `IntersectionObserver` pour les animations au scroll (plus performant que `scroll`).
- `localStorage` pour mémoriser le thème entre les visites.
- Validation côté client : on bloque le `submit` avec `e.preventDefault()`,
  on contrôle chaque champ, on affiche les erreurs sous le champ.
- Aucun framework, aucune lib : tout fonctionne avec les API natives du navigateur.
