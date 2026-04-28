# Portfolio — Garance Pruvost

Site portfolio statique en HTML / CSS, prêt à être hébergé sur GitHub Pages.

## Structure du projet

```
portfolio/
├── index.html      # Page principale du portfolio
├── style.css       # Feuille de style (élégant clair)
└── README.md       # Ce fichier
```

## Aperçu local

Ouvre simplement `index.html` dans ton navigateur (double-clic).
Aucun build, aucune dépendance, c'est du HTML/CSS pur.

## Mise en ligne sur GitHub Pages

1. Crée un dépôt sur GitHub (ex. `portfolio` ou `garance-pruvost.github.io`).
2. Place les fichiers `index.html`, `style.css` et `README.md` à la racine du dépôt.
3. Push tes fichiers :
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<ton-pseudo>/<nom-du-repo>.git
   git push -u origin main
   ```
4. Sur GitHub : `Settings` → `Pages` → Source : `Deploy from a branch` → branche `main`, dossier `/ (root)` → `Save`.
5. Au bout d'une minute, ton site sera dispo à l'URL :
   `https://<ton-pseudo>.github.io/<nom-du-repo>/`

## Personnalisation rapide

- **Texte** : modifie directement `index.html`. Toutes les sections sont commentées.
- **Couleurs** : change les variables CSS en haut de `style.css` (bloc `:root`).
  - `--color-accent` : couleur principale (vert sapin par défaut)
  - `--color-bg` : fond clair
  - `--color-text` : couleur du texte
- **Polices** : modifie `--font-display` et `--font-body`. Pour utiliser des polices Google Fonts, ajoute le `<link>` dans le `<head>` de `index.html`.
- **Projets** : duplique un bloc `<article class="project-card">` pour ajouter un projet.
- **Timeline** : duplique un bloc `<li class="timeline-item">` pour ajouter une étape.

## Sections incluses

- Hero (titre + accroche)
- À propos (bio + carte d'infos clés)
- Compétences techniques (4 catégories)
- Projets et réalisations
- Parcours (timeline)
- Contact (lien email)

## Licence

Code libre d'utilisation pour ton usage personnel.
