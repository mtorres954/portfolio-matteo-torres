# Portfolio Matteo Torres — version locale

## Lancer le site
Le plus simple :
1. Ouvrir ce dossier dans Visual Studio Code.
2. Installer l'extension **Live Server**.
3. Clic droit sur `index.html` > **Open with Live Server**.

Le site est entièrement sur UNE SEULE PAGE.

## Modifier le contenu sans toucher au HTML
Ouvre :
`js/contenu.js`

C'est le fichier prévu pour modifier :
- le texte d'accueil ;
- le parcours ;
- les missions ;
- les projets ;
- les compétences ;
- la veille ;
- l'adresse e-mail.

## Ajouter un projet
Dans `js/contenu.js`, cherche `projets:` puis copie un bloc projet existant.
Modifie seulement le titre, le statut, la description et les technologies.

## Ajouter une actualité de veille
Dans `js/contenu.js`, cherche `veille:` et copie le bloc existant.

## Ajouter ton CV
Place ton PDF dans :
`documents/CV-Matteo-Torres.pdf`

Le bouton "Voir mon CV" fonctionnera automatiquement.

## Ajouter de vraies captures plus tard
Le dossier `images/` est prévu pour tes captures Packet Tracer, GLPI, Intune, etc.
Avant publication, masque toute donnée sensible de la mairie (IP internes, comptes, données personnelles, secrets, configurations sensibles).

## Fichiers
- `index.html` : structure de la page — normalement tu n'y touches pas.
- `css/style.css` : design.
- `js/script.js` : fonctionnement — normalement tu n'y touches pas.
- `js/contenu.js` : TON contenu — c'est principalement ici que tu travailles.

## Production
Ne rien publier pour le moment. Quand la version locale sera validée, le dossier pourra être envoyé tel quel sur GitHub Pages.
