# quiprendquoi

### Lien de l'application en ligne: 

https://quiprendquoii.herokuapp.com/

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

### Sujet: Notifications API

Notifications API est une API qui va nous permettre de notifier l'utilisateur concernant certains
évènement de l'application.

Dans mon cas je m'en suis servi pour avertir l'utilisateur quand un élément est ajouté à un
événement où quand un élément est supprimé.

Avant de commencer à spammer de façon indésirable notre utilisateur nous allons tout d'abord
lui demander son autorisation, car ces notifications peuvent être nuisibles pour certaines
personne.

Il y a 3 choix auquels notre code doit s'adapter: 
- default si l'utilisateur n'a pas encore choisi ce qu'il voulait (en général c'est la première fois ou il accède à l'application) 
- granted si l'utilisateur a accepté de se faire notifier
- denied si il a décidé de refuser les notifications.

