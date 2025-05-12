let vidas = 3;
let pontos = 0;
let acertos = 0;
let tempoRestante = 10;
let timeId = null;
let respostaCorreta = null;

const questaoDisplay = document.getElementById("questao");
const respostaInput = document.getElementById("resposta");
const btnResponder = document.getElementById("btn-responder");
const btnReiniciar = document.getElementById("btn-reiniciar");
const modalRegras = document.getElementById("modal-regras");
const btnIniciarJogo = document.getElementById("btn-iniciar-jogo");

const pontosDisplay = document.getElementById("pontos");
const acertosDisplay = document.getElementById("acertos");
const vidasDisplay = document.getElementById("vidas");
const tempoDisplay = document.getElementById("tempo");

// Mostra a modal ao carregar a página
window.onload = function () {
  modalRegras.style.display = "flex";
  // Desativa o input e botão até o jogo iniciar
  respostaInput.disabled = true;
  btnResponder.disabled = true;
};

// Adiciona evento para o botão "Iniciar Jogo"
btnIniciarJogo.addEventListener("click", function () {
  modalRegras.style.display = "none";
  respostaInput.disabled = false;
  btnResponder.disabled = false;
  novaPergunta(); // Inicia o jogo
  respostaInput.focus();
});

btnResponder.addEventListener("click", verificarResposta);

btnReiniciar.addEventListener("click", reiniciarJogo);

respostaInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    verificarResposta();
  }
});

novaPergunta();

function novaPergunta() {
  pararTempo();

  const operacoes = ["+", "-", "*", "/"];

  const num1 = Math.floor(Math.random() * 20) + 1;

  let num2 = Math.floor(Math.random() * 20) + 1;

  const operador = operacoes[Math.floor(Math.random() * operacoes.length)];

  let questaoTexto = "";

  if (operador === "+") {
    questaoTexto = `${num1} + ${num2}`;
    respostaCorreta = num1 + num2;
  } else if (operador === "-") {
    num2 = Math.floor(Math.random() * num1) + 1;
    questaoTexto = `${num1} - ${num2}`;
    respostaCorreta = num1 - num2;
  } else if (operador === "*") {
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
      tempoDisplay.textContent = `Tempo: ${tempoRestante}`;
    } else {
      perdeuVida();
    }
  }, 1000);
}

function verificarResposta() {
  const respostaUsuario = parseFloat(respostaInput.value);

  if (!isNaN(respostaUsuario) && respostaUsuario == respostaCorreta) {
    pontos += 10;
    acertos++;
    pontosDisplay.textContent = `Pontos: ${pontos}`;
    acertosDisplay.textContent = `Acertos: ${acertos}`;
    novaPergunta();
    tempoRestante = Math.min(tempoRestante + 10, 30);
  } else {
    perdeuVida();
  }

  respostaInput.value = "";
  respostaInput.focus();
}

function perdeuVida() {
  vidas--;
  vidasDisplay.textContent = `Vidas: ${vidas}`;

  if (vidas == 0) {
    gamerOver();
  } else {
    novaPergunta();
  }
}

function pararTempo() {
  if (timeId) {
    clearInterval(timeId);
    timeId = null;
  }
}

function gamerOver() {
  pararTempo();

  questaoDisplay.textContent = `Fim de jogo ! Pontuação Final: ${pontos}. Acertos: ${acertos}`;
  respostaInput.disabled = true;
  btnResponder.disabled = true;

  tempoDisplay.textContent = `Jogo encerrado!`;
  btnReiniciar.style.display = "block";
}

function reiniciarJogo() {
  // Reseta todas as variáveis
  vidas = 3;
  pontos = 0;
  acertos = 0;
  tempoRestante = 10;
  timeId = null;
  respostaCorreta = null;

  // Atualiza a interface
  vidasDisplay.textContent = `Vidas: ${vidas}`;
  pontosDisplay.textContent = `Pontos: ${pontos}`;
  acertosDisplay.textContent = `Acertos: ${acertos}`;
  tempoDisplay.textContent = `Tempo: ${tempoRestante}`;
  questaoDisplay.textContent = "";

  // Reativa os controles
  respostaInput.disabled = false;
  btnResponder.disabled = false;
  respostaInput.value = "";
  respostaInput.focus();

  // Oculta o botão de reiniciar
  btnReiniciar.style.display = "none";

  // Inicia uma nova partida
  novaPergunta();
}
