let numeroSorteado = [];
let numLimite = 10;
let numSecreto = numAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function msgInicial(){
    exibirTexto('h1', 'Número secreto');
    exibirTexto('p', 'Selecione um número de 1 à 10');
}

    msgInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numSecreto){
        exibirTexto('h1', 'Acertou!');
        let qtdTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${qtdTentativas}.`;

        exibirTexto('p',msgTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        if (chute > numSecreto){
        exibirTexto('p',`Número secreto é menor que ${chute}.`);
        } else {
        exibirTexto('p', `Número secreto é maior que ${chute}`);
        }

        tentativas++;
        limparCampo();
    }
}

function numAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numLimite + 1);
    let qtdNumLista = numeroSorteado.length;

    if (qtdNumLista == numLimite){
        numeroSorteado = [];
    }

    if (numeroSorteado.includes(numeroEscolhido)) {
        return numAleatorio();
    } else {
        numeroSorteado.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numSecreto = numAleatorio();
    limparCampo();
    tentativas = 1;
    msgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}