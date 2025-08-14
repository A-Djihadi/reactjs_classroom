 # reactjs_crud

Une petite application de démonstration React + Vite + TypeScript illustrant les opérations CRUD, une architecture claire et une interface moderne avec Tailwind CSS.

## Objectif

Ce projet sert d'exemple pédagogique et met en avant :
- Une séparation claire des responsabilités (UI, persistance des données, petites fonctions utilitaires)
- Des fonctions simples et testables
- L'application de motifs de conception adaptés aux petites applications front-end
- Une interface moderne et épurée, inspirée des esthétiques Apple/Facebook

## Fonctionnalités

- Créer / Lire / Mettre à jour / Supprimer des éléments persistés dans `localStorage`.
- Écrit en TypeScript avec React 18 et Vite pour une expérience de développement rapide.
- Style réalisé avec Tailwind CSS (approche utilitaire pour une UI moderne).

## Architecture & choix de conception

Contrat (résumé) :
- Entrées : interactions utilisateur (création/édition/suppression), champs texte.
- Sorties : liste d'éléments mise à jour, persistée dans `localStorage`, affichée dans l'interface.
- Modes d'erreur : un titre vide/invalide est ignoré ; en cas d'échec de `localStorage`, l'application tolère l'échec et fonctionne en mémoire quand c'est possible.

Motifs et bonnes pratiques montrés :
- Séparation des couches : les fonctions de persistance (`load`/`save`) sont isolées du composant.
- Approche présentational/container : `CrudApp` contient la logique et l'état, et le JSX est structuré pour être facilement extrait en composants présentations.
- Petite usine/fonction utilitaire : `uid()` génère des identifiants uniques.
- Source unique de vérité : l'état du composant reflète `localStorage` et est persistant via un `useEffect`.

Pourquoi ces choix :
- Simplicité : pour une petite démo, des motifs explicites et simples sont préférables aux solutions lourdes.
- Testabilité : les fonctions pures (comme `load`/`save`/`uid`) sont faciles à couvrir par des tests unitaires.
- Réalisme : `localStorage` simule une couche de persistance sans nécessiter un backend.

## Prérequis

- Node 18+ recommandé
- npm (ou yarn)

## Lancer le projet

npm install
npm run dev


Ensuite, ouvrez l'adresse affichée par Vite (généralement http://localhost:5173).

## Étapes suivantes (suggestions)

- Ajouter des tests unitaires pour les helpers `load`/`save`.
- Extraire les parties présentational (`ItemList.tsx`, `ItemForm.tsx`) et créer un hook `useItems`.
- Remplacer progressivement `localStorage` par une API en mémoire ou un backend réel pour simuler un vrai service.

## Fichiers importants

- `src/components/CrudApp.tsx` — composant principal de démonstration
- `src/styles/index.css` — entrée Tailwind
- `vite.config.ts`, `tailwind.config.cjs` — configuration de build et de styles

---
