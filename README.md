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

Ces notifications vont nous permettre de notifier l'utilisateur même lorsqu'il sera en dehors du navigateur
ce qui va nous permettre de pouvoir le rediriger vers notre application en cliquant sur cette notification.

De ce fait nous allons avoir plus d'interraction avec l'application et nous allons pouvoir fidéliser les 
utilisateurs plus efficacement en les incitants à cliquer sur cette notification.

des avantages certes, mais aussi un inconvénient principal :

- Le spam

Pour certaines personne le fait de recevoir des notifications pour tout et pour rien peut avoir un impact
négatif sur la vision de notre application, cela ressemblerais à du racolage et nous ne voulons pas de cette
image.

Donc pour éviter que notre application sois considérée comme une application en manque d'utilisateur
choisissez bien quel sont les événements qui méritent le plus d'être notifié pour que ce sois
aussi plaisant d'un message sur Messenger, une promotion sur Dealabs, la récupération de nos vies
sur Candy Crush et non désagréable comme votre solde bancaire aussi négatif que votre tante éloigné
pendant cette période de quarantaine !

