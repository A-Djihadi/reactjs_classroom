Ce dossier contient les petits composants utilisés par la démo CRUD.

Contexte
- Initialement la démo était contenue dans `CrudApp.tsx`. Pour améliorer la lisibilité et la testabilité, le code a été séparé en trois éléments :

- `ItemList.tsx` — composant de présentation qui affiche la liste d'items et émet les événements "éditer" / "supprimer".
- `ItemForm.tsx` — composant de présentation du formulaire (create / edit); reçoit l'état et les callbacks depuis le parent.
- `useItems.ts` — hook personnalisé qui gère l'état des items, la persistance dans `localStorage` et les opérations CRUD.

Petit contrat (inputs / outputs)
- `ItemList`:
	- Props: `items: Item[]`, `onEdit(item)`, `onDelete(id)`
	- Comportement: affiche les éléments fournis, appelle `onEdit` quand l'utilisateur clique "Edit" et `onDelete` pour "Delete".

- `ItemForm`:
	- Props: `title`, `notes`, `onChangeTitle`, `onChangeNotes`, `onSubmitCreate`, `onSubmitUpdate`, `onCancel`, `editing`
	- Comportement: composant contrôlé (le parent fournit l'état du formulaire) — déclenche les callbacks respectifs.

- `useItems`:
	- Retourne: `{ items, createItem, startEdit, editingItem, editingId, updateItem, removeItem, cancelEdit }`
	- Persistance: lit/écrit `localStorage` sur la clé `reactjs_crud.items`.

Cas limites importants
- Données invalides: le hook ignore la création si le `title` est vide ou ne contient que des espaces.
- Concurrence: le hook utilise l'état React local; pour une application multi-onglet on pourrait ajouter un `storage` listener.
- LocalStorage absent (mode privé strict): le hook capture les erreurs de parsing et retourne une liste vide.

Pourquoi cette séparation
- Séparation des responsabilités : présentation (ItemList/ItemForm) vs logique métier (useItems).
- Facilite les tests unitaires et la réutilisation.
- Prépare la migration vers un stockage distant (remplacer simplement la couche de persistence dans `useItems`).

Comment utiliser
- `CrudApp.tsx` compose le hook et ces composants — voir `src/components/CrudApp.tsx`.
- Pour exécuter la démo (depuis le dossier racine du projet):


Voir aussi le `README.md` racine du projet pour les décisions d'architecture globales.
