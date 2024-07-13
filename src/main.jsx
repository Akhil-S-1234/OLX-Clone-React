import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { FirebaseContext } from './store/Context.jsx';
import Context from './store/Context.jsx';
import firebase from './firebase/config.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
ReactDOM.render(
    <FirebaseContext.Provider value={{firebase}}>
        <Context>
            <App /> 
        </Context>
         
    </FirebaseContext.Provider>
       
    , document.getElementById('root'));
