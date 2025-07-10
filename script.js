'use strict'; //Ativa o modo estrito do JavaScript, otimizando o código e evitando erros que poderiam sobrecarregar o navegador, ativo por padrão no HTML5.

var images = [ //Array com objetos que contêm id e caminho para as imagens
    { 'id': '1', 'url': './img/fc.jpg'},
    { 'id': '2', 'url': './img/sc.jpg'},
    { 'id': '3', 'url': './img/3rd.jpg'},
    { 'id': '4', 'url': './img/zero.jpg'},
    { 'id': '5', 'url': './img/azure.jpg'},
    { 'id': '6', 'url': './img/cs.jpg'},
    { 'id': '7', 'url': './img/cs2.jpg'},
    { 'id': '8', 'url': './img/cs3.jpg'},
    { 'id': '9', 'url': './img/cs4.jpg'},
    { 'id': '10', 'url': './img/reverie.jpg'},
    { 'id': '11', 'url': './img/db.jpg'},
    { 'id': '12', 'url': './img/db2.jpg'},
    { 'id': '13', 'url': './img/horizon.jpg'},
    { 'id': '14', 'url': './img/1st.jpg'},
]

var container = document.querySelector ('#container-items'); 

var loadImages = (images, container) => {
    images.forEach (image => { //Pra cada imagem no array, executa uma função
       /*Adiciona uma div e a imagem ao container através da innerhtml */ container.innerHTML +=`
        <div class='item'> 
            <img src='${image.url}'
         </div>   
        `
    })

}


loadImages(images, container);  