# Dossier Images

Placez vos images et GIFs de projets ici.

## Structure recommandée

- `project1.jpg` ou `project1.png` - Image statique pour un projet
- `project1.gif` - GIF animé pour un projet
- `hr-management.jpg` - Image pour le projet HR Management
- `job-tracker.gif` - GIF pour le projet Job Tracker
- etc.

## Utilisation

Dans `src/pages/Projects.jsx`, ajoutez le chemin vers vos images :

```javascript
{
  title: 'Mon Projet',
  imgSrc: '/images/mon-projet.jpg',  // Pour une image statique
  gifSrc: '/images/mon-projet.gif',  // Pour un GIF animé
  // ...
}
```

**Note :** Utilisez soit `imgSrc` soit `gifSrc`, pas les deux en même temps. Le GIF aura la priorité si les deux sont définis.

