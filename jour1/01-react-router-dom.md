## lien hypertexte

en html => <a href=""></a>

avec la librairie react-router-dom => <Link to=""></Link>

import { Link } from "react-router-dom" ;

## le composant Link doit être mis dans <BrowserRouter> ou un composant Parent

src/index.js => ****
src/App.js

import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>  
  </React.StrictMode>,
  document.getElementById('root')
);

## router version 6 react router dom à mettre dans App.js

<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
</Routes>

créer les composants Home et Contact 

Modifier le composant Navbar => <Link to="/"> <Link to="/contact"> 


## router version 5 react router dom

<Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" component={Contact} />
</Switch>

## cas pratique 

créer un nouveau composant => Articles 

ce composant sera accessible via l'adresse suivante : /articles
=> ajouter une nouvelle route dans App.js 
=> mettre à jour le composant Menu.jsx 

## cas pratique 

1 créer un hook personnalisé useUser => retourner 3 profils utilisateurs 
chaque profil aura id / nom / role / url => https://thispersondoesnotexist.com/image?v=1

2 utiliser ce hook personnalisé dans la page contact => afficher tous les profils dans le composant et ajouter un lien <Link> à la fin de chaque lien
contact/:id

3 si vous cliquez sur sur un lien => afficher la contact concerné dans la page 

## navigation programmatique 

déterminer où on va via un hook 

useNavigate

## erreur 404 

créer le composant NotFound 

## dans le composant Contact 

mettre en place un système de tri par ordre alphabétique sur les prénoms des users 

en utilisant queryString et bouton pour lancer le tri 