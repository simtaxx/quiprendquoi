# quiprendquoi

## INSTALLATION

```
npm i
npm run dev
```

## AMÉLIORATION APPORTÉES

- Ajout d'un item dans un événement (`app.js`, `party.pug`)
- Affichage de la liste des items sur la page événément (`app.js`, `party.pug`)
- Possibilité de supprimer un item (`app.js`, `party.pug`)
- Utilisation d'une web API (VibrationApi) (`vibrationInteraction.js`)
  Cette web API me permet de faire vibrer un appareil compatible sur certaines focntionalités de la PWA.
- Rafraîchissement automatique des items toute les 5 secondes avec _fetch_ et affichage d'une notification (`notification.js`, fonctionne seulement en local car ayant le certificat HTTPS en ligne je ne peux 
  pas effectuer de requête sur une API externe en HTTP)
- Meilleure présentation visuelle des items (`tasks.scss`)
- Mise en ligne de l'application via Heroku ( changement du script start pour que heroku puisse correctement
  lancer l'application )

## Article personnel

### Sujet: Web Bluetooth API
