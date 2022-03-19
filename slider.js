
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
