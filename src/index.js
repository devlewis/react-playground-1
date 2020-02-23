import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { BrowserRouter } from "react-router-dom";
//import App from './playingwithdanger/App'

//import RegistrationForm from "./registrationForm/registrationForm"
//import AppLang from './paltrows-power-toes/App';
//import AppLang from './lang-context/AppLang';

// import Demonym from './demonymapp/demonymApp';
// import HelloWorld from './state-drills/HelloWorld.js';
// import Bomb from './state-drills/Bomb.js';
// import RouletteGun from './state-drills/RouletteGun.js';
// import Tabs from './state/Tabs.js';


import Accordion from './state-drills/Accordion';
const sections = [
    {
        title: "valentine",
        content: "HOLA"
    },

    {
        content: "red"
    },

    {
        title: "arrow"
    }
]

{/* <Accordion sections={sections} /> */ }

ReactDOM.render(
    <Accordion sections={sections} />,
    document.getElementById('root'));

// ReactDOM.render(
//     <App />,
//     document.querySelector("#root")
// )

