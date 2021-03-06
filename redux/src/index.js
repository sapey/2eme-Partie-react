import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore , applyMiddleware } from "redux"
import { Provider } from "react-redux";
// connexion entre redux et l'extension
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

//const initialState = { val : 0 }

/* function reducer(state = initialState , action){
  switch(action.type){
    case "test" : 
      return {...state , val : state.val + action.payload}

    default :
      return state ;
  }
} */

import reducer from "./reducers"; // pas besoin d'ajouter index 
import {getAllPost} from "./actions/article" ;
import {getUser1} from "./actions/user" ;

const store = createStore( reducer , 
  composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(getAllPost()) ; // curring 
store.dispatch(getUser1()) ; // curring 


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();