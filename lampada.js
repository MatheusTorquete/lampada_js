// criando as variaveis
const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );
// funcao para retornar ela quebrado
function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}
// carregando a imagem ligada
function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
    }
}
// retornar ela desligada
function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './img/desligada.jpg';
    }
}
// carregar a imagem quebrada
function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}


// botao que envia a lampada ligada
turnOn.addEventListener ( 'click', lampOn );
// botao para desligar a lampada
turnOff.addEventListener ( 'click', lampOff );
// quando passar o mouse fica ligada
lamp.addEventListener ( 'mouseover', lampOn );
// tirou o mouse desliga
lamp.addEventListener ( 'mouseleave', lampOff );
// duplo click quebra a lampada
lamp.addEventListener ( 'dblclick', lampBroken );
