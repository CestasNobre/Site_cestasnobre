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

        /*
function preload() {
    if (largura <= 530) {
        imgs = Array('imagens/f1_responsivo.jpg','imagens/f2_responsivo.jpg')
    } else {
        imgs = Array('imagens/f1.jpg','imagens/f2.jpg')
    }
    ;
    imgQtde = imgs.length;
    for (imgs = 0; imgs < imgQtde; imgs++) {
        var preloading = new Image();
        preloading.src = imgs[1];
    }
}

   var largura = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
    var altura = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

if (largura <= 560) {
    document.documentElement.style.setProperty('--vp_slider', '280px');
    document.documentElement.style.setProperty('--ct_cliente', '60%');
    document.documentElement.style.setProperty('--ct_lt', '0.8em');
    document.documentElement.style.setProperty('--msg_lt', '80%');
} else {
    document.documentElement.style.setProperty('--vp_slider', '550px');
    document.documentElement.style.setProperty('--ct_cliente', '40%');
    document.documentElement.style.setProperty('--ct_lt', '1.5em');
    document.documentElement.style.setProperty('--msg_lt', '30%');
}


console.log(altura);
console.log(largura);

function iniciaSlider() {
    preload();
    max = 2;
    min = 1;
    fotoIndice = min;
    tr = true;
    if (largura <= 530) {
        carregaFoto("imagens/f1_responsivo.jpg");
    } else {
        carregaFoto("imagens/f1.jpg");
    }
    document.getElementById("moldura").addEventListener("transitionend", fimTr);
    tmr = setInterval(trocaFoto, 5000);
}

function trocaFoto() {
    tr = false;
    fotoIndice++;
    if (fotoIndice > max) {
        fotoIndice = min;
    }
    if (largura <= 530) {
        carregaFoto("imagens/f"+fotoIndice+"_responsivo.jpg");
    } else {
        carregaFoto("imagens/f"+fotoIndice+".jpg");
    }
    
}

function fimTr() {
    tr = true;
}

function carregaFoto(foto) {
    document.getElementById("moldura").style.backgroundImage="URL("+foto+")";    
}

function troca(dr) {
    clearInterval(tmr);
    if (tr) {
        tr = false;
        fotoIndice+= dr ;
        if (fotoIndice > max) {
            fotoIndice = min;
        }
        if (fotoIndice < min) {
            fotoIndice = max;
        }
        if (largura <= 530) {
            carregaFoto("imagens/f"+fotoIndice+"_responsivo.jpg");
        } else {
            carregaFoto("imagens/f"+fotoIndice+".jpg");
        }
    }
    tmr = setInterval(trocaFoto, 5000);
}
*/