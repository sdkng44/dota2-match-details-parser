# Dota 2 Match Details Parser
`dota2-match-details-parser` est un outil qui vous permet de télécharger les détails des matchs de Dota 2 aux formats CSV et JSON. Il utilise l'API OpenDota pour obtenir des informations détaillées sur les matchs et offre un support multilingue pour plusieurs langues.

## Prérequis
Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine.

## Avis Important
Pour utiliser cet outil, votre profil Steam ID doit être défini sur public. Sinon, les données ne pourront pas être récupérées.

## Installation
Vous pouvez installer le projet en clonant le dépôt depuis GitHub ou en utilisant npm.

### Depuis GitHub
Suivez ces étapes pour installer et configurer le projet :

1. Clonez le dépôt ou téléchargez-le depuis GitHub :
    ```bash
    git clone https://github.com/sdkng44/dota2-match-details-parser.git
    cd dota2-match-details-parser
    ```

2. Installez les dépendances :
    ```bash
    npm install
    ```

3. Configurez votre fichier `config.json` avec votre `STEAM_ID` :
    ```json
    {
      "steamId": "votre_steam_id_ici"
    }
    ```

### Depuis npm
Vous pouvez également installer le package en utilisant npm :

#### Pour les systèmes Windows

1. Créez un répertoire initial et naviguez-y :
    ```powershell
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Installez le package :
    ```powershell
    npm install dota2-match-details-parser
    ```

3. Créez un nouveau répertoire racine et déplacez-y le contenu du package hors du répertoire racine actuel, puis placez-vous dans le nouveau répertoire racine :
    ```powershell
    mkdir ../dota2-match-details
    Copy-Item -Recurse node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Supprimez l'ancien répertoire racine d'installation :
    ```powershell
    Remove-Item -Recurse -Force ../dota2-parser-installation
    ```

5. Installez les dépendances dans le nouveau répertoire :
    ```powershell
    npm install
    ```

6. Configurez votre fichier `config.json` avec votre `STEAM_ID` :
    ```json
    {
      "steamId": "votre_steam_id_ici"
    }
    ```

#### Pour les systèmes Unix (Linux/macOS)

1. Créez un répertoire initial et naviguez-y :
    ```bash
    mkdir dota2-parser-installation
    cd dota2-parser-installation
    ```

2. Installez le package :
    ```bash
    npm install dota2-match-details-parser
    ```

3. Créez un nouveau répertoire racine et déplacez-y le contenu du package hors du répertoire racine actuel, puis placez-vous dans le nouveau répertoire racine :
    ```bash
    mkdir ../dota2-match-details
    mv node_modules/dota2-match-details-parser/* ../dota2-match-details/
    cd ../dota2-match-details
    ```

4. Supprimez l'ancien répertoire racine d'installation :
    ```bash
    rm -rf ../dota2-parser-installation
    ```

5. Installez les dépendances dans le nouveau répertoire :
    ```bash
    npm install
    ```

6. Configurez votre fichier `config.json` avec votre `STEAM_ID` :
    ```json
    {
      "steamId": "votre_steam_id_ici"
    }
    ```

## Utilisation
Pour exécuter le projet, il suffit de naviguer jusqu'au répertoire d'installation et d'utiliser la commande suivante :
```bash
npm start
```
Cela démarrera l'application et vous demandera de sélectionner votre langue préférée. Ensuite, elle téléchargera les détails des matchs de Dota 2 associés au STEAM_ID fourni.

## Continuité des Téléchargements
Si vous exécutez le script et téléchargez un certain nombre de matchs, puis arrêtez le script et le relancez, l'outil recherchera les fichiers précédemment créés avec les matchs téléchargés. Il lira les matchs déjà téléchargés et continuera là où il s'était arrêté.

## Résolution des Problèmes d'Affichage des Langues
Si vous rencontrez des problèmes d'affichage des caractères dans votre langue, il peut être nécessaire de configurer CMD ou PowerShell pour utiliser une police qui prend en charge ces caractères.
1. Faites un clic droit sur la barre de titre de CMD ou PowerShell.
2. Sélectionnez "Propriétés".
3. Allez à l'onglet "Fonte".
4. Choisissez "SimSun Ext-B" comme fonte. Cette police prend en charge une large gamme de caractères et est installée par défaut.

Note : "SimSun Ext-B" est juste un exemple qui a été testé pour fonctionner avec tous les caractères. Vous pouvez également installer d'autres polices qui prennent en charge les caractères de votre langue si nécessaire.

## Dépôt et Package
Ce projet est disponible sur GitHub et npm :

1. GitHub: https://github.com/sdkng44/dota2-match-history-parser
2. npm: https://www.npmjs.com/package/dota2-match-details-parser


## Límites de l'API
Ce projet utilise l'API OpenDota, qui a des limites quant au nombre de requêtes que vous pouvez effectuer. Soyez conscient de ces limites pour éviter des problèmes lors de la récupération des données.

## Licence
Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus de détails.


## Journal des Modifications
Pour plus d'informations sur les mises à jour, veuillez consulter le [CHANGELOG](CHANGELOG.md).
