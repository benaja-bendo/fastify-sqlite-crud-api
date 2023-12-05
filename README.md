# Fastify SQLite CRUD API

Ce projet est une application CRUD API construite avec Fastify, un framework web rapide et léger pour Node.js, et utilise SQLite comme base de données.

## Prérequis

Assurez-vous d'avoir Node.js dans sa version recommandée (LTS) installé sur votre machine installé sur votre machine avant de commencer.

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone 
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd fastify-sqlite-crud-api
   ```

3. Installez les dépendances :
   ```bash
   npm install
   ```

## Configuration

1. Copiez le fichier `.env.example` et renommez-le en `.env` :
   ```bash
   cp .env.example .env
   ```

2. Modifiez le fichier `.env` selon vos besoins. Assurez-vous de spécifier le chemin correct pour votre base de données SQLite.

## Utilisation

1. Démarrez l'application :
   ```bash
   npm start
   ```

2. L'API sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Endpoints

- `GET /api/items`: Récupère tous les éléments de la base de données.
- `GET /api/items/:id`: Récupère un élément spécifique par son ID.
- `POST /api/items`: Crée un nouvel élément.
- `PUT /api/items/:id`: Met à jour un élément existant.
- `DELETE /api/items/:id`: Supprime un élément par son ID.

## Exemple de Requête (via curl)

1. Récupérer tous les éléments :
   ```bash
   curl http://localhost:3000/api/items
   ```

2. Créer un nouvel élément :
   ```bash
   curl -X POST -H "Content-Type: application/json" -d '{"name": "Nouvel Élément"}' http://localhost:3000/api/items
   ```

3. Mettre à jour un élément existant :
   ```bash
   curl -X PUT -H "Content-Type: application/json" -d '{"name": "Nouveau Nom"}' http://localhost:3000/api/items/:id
   ```

4. Supprimer un élément :
   ```bash
   curl -X DELETE http://localhost:3000/api/items/:id
   ```

## Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence [MIT](LICENSE).
