
function sliderMovel() {
    let countImg = 0;
    const containerExt = document.getElementById("moldura");
    const arrayFoto = ['fundo_namorados_adulto', 'fundo_namorados_homossexual', 'fundo_namorados_senhores'];
    containerExt.style.backgroundImage=`url('./imagens/dia_dos_namorados/fundo_namorados_adulto.jpg')`;

    setInterval(function () {
        countImg++
        let mudaFoto = 0;
        if(countImg == 3) {
            countImg = 0;
        }
        mudaFoto = arrayFoto[countImg]
        containerExt.style.backgroundImage=`url('./imagens/dia_dos_namorados/${mudaFoto}.jpg')`;
        
    },5000);
   
}

/*
var ciclo = 1


 //Criando um intervalo para troca da imagem automático
setInterval(function () {
    ciclo++
    if (ciclo > 2) {
        ciclo = 1
    }
    if (window.matchMedia('(max-width: 530px)').matches) {
        carregaFoto("imagens/f"+ciclo+"_responsivo.jpg")
    } else {
        carregaFoto("imagens/f"+ciclo+".jpg")
                
    }
            
}, 4000)    

//Cria uma função de correspondencia
function slider(x) {
    if (x.matches) {
        carregaFoto("imagens/f1_responsivo.jpg");
        document.documentElement.style.setProperty('--ct_cliente', '60%');
    } else {
        carregaFoto("imagens/f1.jpg");
        document.documentElement.style.setProperty('--ct_cliente', '40%');
    }
            
}

function carregaFoto(foto) {
    document.getElementById("moldura").style.backgroundImage="URL("+foto+")";    
}

        //Cria um objeto MediaQueryList
        const jv = window.matchMedia('(max-width: 530px)')
        //Chama a função match em tempo de execução
        slider(jv)
        //Adiciona a função match como listener para mudanças de estado:
        jv.addListener(slider)

*/