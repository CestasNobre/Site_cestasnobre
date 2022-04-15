var interacaoMenu = 0;
/*
let icon = document.getElementById('icon_resp') 
icon.setAttribute('src','imagens/icone_x_menu_resp.png')
*/

function abreFechaMenu() {
    let abertura_menu = document.getElementById('cx_nav')
    if (window.matchMedia('(max-width: 900px)').matches){
        
        if(interacaoMenu == 0){ 
            abertura_menu.style.display='block'
            document.getElementById('icon_resp').src='imagens/icone_x_menu_resp.png'
            interacaoMenu = 1
        }else {
            abertura_menu.style.display='none'
            document.getElementById('icon_resp').src='imagens/icone_menu_responsivo.png'
            interacaoMenu = 0
        }
    }
}