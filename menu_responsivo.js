var interacaoMenu = 0;

function abreFechaMenu() {
    let abertura_menu = document.getElementById('cx_nav')
    
    if(interacaoMenu == 0){ 
        abertura_menu.style.display='block'
        interacaoMenu = 1
    }else {
        abertura_menu.style.display='none'
        interacaoMenu = 0
    }
    
}