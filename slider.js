
function preload() {
    imgs = Array('imagens/f1.jpg','imagens/f2.jpg');
    imgQtde = imgs.length;
    for (imgs = 0; imgs < imgQtde; imgs++) {
        var preloading = new Image();
        preloading.src = imgs[1];
    }
}

function iniciaSlider() {
    preload();
    max = 2;
    min = 1;
    fotoIndice = min;
    tr = true;
    carregaFoto("imagens/f1.jpg");
    document.getElementById("moldura").addEventListener("transitionend", fimTr);
    tmr = setInterval(trocaFoto, 5000);
}

function trocaFoto() {
    tr = false;
    fotoIndice++;
    if (fotoIndice > max) {
        fotoIndice = min;
    }
    carregaFoto("imagens/f"+fotoIndice+".jpg");
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
        carregaFoto("imagens/f"+fotoIndice+".jpg");
    }
    tmr = setInterval(trocaFoto, 5000);
}
