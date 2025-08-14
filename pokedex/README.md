# pokedex

Une petite démo React qui montre comment consommer PokeAPI et afficher une liste de Pokémon avec une page de détail.

## Purpose

Ce projet est une démonstration pédagogique pour :
- Consommer une API REST (PokeAPI)
- Structurer des composants réutilisables
- Gérer les états de chargement et d'erreur

## Features

- Liste des Pokémon
- Page de détail avec statistiques et informations
- Gestion du chargement et des erreurs

## Architecture & Design Choices

- Composants fonctionnels et hooks pour la logique local
- Petite séparation présentation/logique (list/card/detail)
- Utilisation minimale de styled-components pour les cartes

## Requirements

- Node 16+
- npm

## Run

```powershell
cd "c:\Users\jia-g\Documents\CODE\sandbox\reactjs_classroom\pokedex"
npm install
npm start
```

## Next steps (suggestions)

- Extraire un hook `usePokemon` et un service `api`.
- Ajouter tests unitaires pour la récupération des données.
- Ajouter pagination et recherche.

## Files of interest

- `src/components/pokemon/PokemonList.js`
- `src/components/pokemon/PokemonCard.js`
- `src/components/pokemon/Pokemon.js`

---

Version courte au format du README `reactjs_crud`.
