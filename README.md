# reactjs_classroom

Ce dépôt sert de collection de projets pratiques ReactJS. L'objectif est de regrouper plusieurs petites applications/démonstrations, chacune dans son propre dossier, pour apprendre des patterns, bonnes pratiques et techniques courantes avec React.

But du dépôt
- Partager des projets d'exemple et des exercices ReactJS prêts à l'emploi.
- Illustrer des architectures simples, des patterns (hooks, séparation présentational/container, persistance, etc.), et des approches modernes d'UI.

Structure
- `pokedex/` — mini-app Pokedex (exemple de consommation d'API, composants, layout).
- `reactjs_crud/` — petite démo CRUD en TypeScript + Vite + Tailwind (persistance localStorage, architecture propre).

Chaque dossier contient son propre fichier `package.json` et les instructions pour lancer le projet.

Comment lancer un projet
1. Ouvrez un terminal et placez-vous dans le dossier du projet voulu, par exemple :

```
cd ".\reactjs_classroom\reactjs_crud"
```

2. Installez les dépendances et démarrez le serveur de développement :

```
npm install
npm run dev
```

Répétez les mêmes étapes pour les autres dossiers (par ex. `pokedex`).

Conventions pour ajouter un nouveau projet
- Créez un nouveau dossier racine pour le projet.
- Ajoutez un `package.json` avec les scripts `dev`, `build`, et `preview` si pertinent.
- Documentez brièvement le projet dans un `README.md` dans le dossier du projet.

Contributions
- Les contributions sont bienvenues : ouvrez une issue pour proposer un nouveau projet ou une amélioration, puis une Pull Request.

Licence
- Voir le fichier `LICENSE` à la racine du dépôt.

---

Si vous voulez, je peux :
- ajouter des scripts utilitaires à la racine pour lancer les projets plus facilement,
- ajouter des README localisés pour chaque projet,
- ou normaliser les conventions de structure et config.
