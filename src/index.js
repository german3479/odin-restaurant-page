import {makeHome} from './home.js';
import Intro from './intro';
import Menu from './menu';
import Contact from './contact';

import "./styles/style.css";

const clearTabArea = () =>{
    while (tabArea.firstChild){
        tabArea.firstChild.remove();
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    makeHome();
    
    const tabArea = document.querySelector("#tabArea");
    const homeBtn = document.querySelector("#homeBtn");
    const menuBtn = document.querySelector("#menuBtn");
    const contactBtn = document.querySelector("#contactBtn");

    homeBtn.addEventListener('click', ()=>{
        clearTabArea();
        Intro();
    })
    menuBtn.addEventListener('click', ()=>{
        clearTabArea();
        Menu();
    })
    contactBtn.addEventListener('click', ()=>{
        clearTabArea();
        Contact();
    })
})