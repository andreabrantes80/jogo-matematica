let vidas = 3
let pontos = 0;
let acertos = 0;
let tempoRestante = 10;
let timeId = null;
let respostaCorreta = null;

const questaoDisplay = document.getElementById('questao');
const respostaInput = document.getElementById('resposta');
const btnResponder = document.getElementById('btn-responder');

const pontosDisplay = document.getElementById('pontos');
const acertosDisplay = document.getElementById('acertos');
const vidasDisplay = document.getElementById('vidas')
const tempoDisplay = document.getElementById('tempo');

btnResponder.addEventListener('click', verificarResposta);

respostaInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        verificarResposta();
    }
});

novaPergunta();

function novaPergunta() {
    pararTempo();

    const operacoes = ['+', '-', '*', '/'];

    const num1 = Math.floor(Math.random() * 20) + 1;

    let num2 = Math.floor(Math.random() * 20) + 1;

    const operador = operacoes[Math.floor(Math.random() * operacoes.length)];

    let questaoTexto = '';

    if (operador === '+') {
        questaoTexto = `${num1} + ${num2}`
        respostaCorreta = num1 + num2;
    }else if (operador === '-') {
      questaoTexto = `${num1} - ${num2}`;
      respostaCorreta = num1 - num2;
    } else if (operador === '*') {
      questaoTexto = `${num1} * ${num2}`;
      respostaCorreta = num1 * num2;
    } else {

        num2 = Math.floor(Math.random() * 10) + 1;
        questaoTexto = `${num1 * num2} / ${num2}`;
        respostaCorreta = (num1 * num2) / num2;
    }

    questaoDisplay.textContent = questaoTexto;

    tempoRestante = 10;
    tempoDisplay.textContent = `Tempo: ${tempoRestante}`;

    contarTempo();

}

function contarTempo() {
    timeId = setInterval(() => {

        if (tempoRestante > 0) {
            tempoRestante--;
            tempoDisplay.textContent = `Tempo: ${tempoRestante}`
        } else {
            perdeuVida()
        }

    }, 1000);
}

function verificarResposta() {

    const respostaUsuario = parseFloat(respostaInput.value);

    if (!isNaN(respostaUsuario) && respostaUsuario == respostaCorreta) {
        pontos += 10;
        acertos++;
        pontosDisplay.textContent = `Pontos: ${pontos}`;
        acertosDisplay.textContent = `Acertos: ${acertos}`
        novaPergunta();
        tempoRestante = Math.min(tempoRestante + 10, 30);
    } else {
        perdeuVida();
    }

    respostaInput.value = "";
}

function perdeuVida() {
    vidas--;
    vidasDisplay.textContent = `Vidas: ${vidas}`

    if (vidas == 0) {
        gamerOver();
    } else {
        novaPergunta();
    }
}

function pararTempo() {
    if (timeId) {
        clearInterval(timeId);
        timeId = null
    }
}

function gamerOver() {
    pararTempo();

    questaoDisplay.textContent = `Fim de jogo ! Pontuação Final: ${pontos}. Acertos: ${acertos}`;
    respostaInput.disabled = true;
    btnResponder.disabled = true;

    tempoDisplay.textContent = `Jogo encerrado!`;


}
