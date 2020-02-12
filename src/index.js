import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
// import AppLang from './paltrows-power-toes/App';
import AppLang from './lang-context/AppLang';

// import Demonym from './demonymapp/demonymApp';
// import HelloWorld from './state-drills/HelloWorld.js';
// import Bomb from './state-drills/Bomb.js';
// import RouletteGun from './state-drills/RouletteGun.js';
// import Tabs from './state/Tabs.js';

ReactDOM.render(
    <BrowserRouter>
        <AppLang />
    </BrowserRouter>,
    document.getElementById('root'));

