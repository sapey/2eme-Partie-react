## Création projet
npx create-react-app jour1-tp
cd jour1-tp
npm start

## bootstrap / router 
1 installer bootstrap dans ce nouveau projet 
2 installer react router dom dans ce nouveau projet

npm i bootstrap react-router-dom

## json server 
npm install --global json-server
créer le dossier db dans le dossier public
dans le dossier db, créer le fichier db.json
{
    "articles" : []
}
package.json ajouter un nouveau script 
"script" : {
    "api" : "json-server --watch ./public/db/db.json --port 3002"
}