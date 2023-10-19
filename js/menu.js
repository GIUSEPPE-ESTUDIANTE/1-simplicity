"use strict";

// Selecionado o elemento (atraves de descendecia) que acionara o menu
const botaoMenu = document.querySelector("nav h2");


//  Selecionando a lista/menu atraves de classe 
const menu = document.querySelector(".menu");


// Selecionando o link que esta dentro do h2
const textobotao = document.querySelector("a")

botaoMenu.addEventListener("click", function(event){

    /* Anular/prevenir o comportamento do link */
    event.preventDefault();
    menu.classList.toggle("aberto");

});
