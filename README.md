# Jogo de Matemática

## Descrição

O Jogo de Matemática é uma aplicação web interativa projetada para praticar operações matemáticas básicas (+, -, *, /) de forma educativa e divertida. O jogo gera perguntas aleatórias com números inteiros e um operador escolhido aleatoriamente, desafiando o jogador a inserir a resposta correta dentro de um limite de tempo (10 segundos por rodada). O jogador começa com 3 vidas, ganha pontos por acertos e pode receber tempo adicional ao acertar. O jogo termina quando as vidas acabam, exibindo a pontuação final.

## Funcionalidades

- Geração aleatória de perguntas com operações: adição, subtração, multiplicação e divisão.
- Contagem regressiva de tempo (10 segundos por rodada, com bônus de 10 segundos por acerto).
- Sistema de pontuação (10 pontos por acerto).
- Sistema de vidas (3 vidas iniciais, perde 1 por erro).
- Interface simples com entrada de texto e botão de resposta.
- Exibição de pontuação, acertos, vidas e tempo em tempo real.
- Fim de jogo com mensagem de pontuação final ao zerar as vidas.
- Suporte a tecla "Enter" para submeter respostas.

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica da página, incluindo elementos como `<input>` para respostas e `<div>` para exibição de dados.
- **CSS3**: Estilização responsiva com media queries para adaptação a telas menores (até 600px), incluindo centralização, sombras e cores.
- **JavaScript (ES6)**: Lógica do jogo, manipulação do DOM, geração de números aleatórios e controle de tempo com `setInterval` e `clearInterval`.
- **localStorage**: Não utilizado neste código, mas pode ser integrado para salvar pontuação (sugestão de melhoria).

## Pré-requisitos

- Um navegador web moderno (Chrome, Firefox, Edge, Safari).
- Não há dependências externas ou servidor necessário; o jogo roda localmente.

## Estrutura do Projeto


---

### **Instruções para Uso**

1. **Crie o Arquivo `README.md`:**
   - Copie o conteúdo acima e salve como `README.md` na raiz do seu projeto.

2. **Personalize o `README.md`:**
   - Substitua o link do repositório (`https://github.com/seu-usuario/jogo-matematica.git`) pelo URL real do seu repositório, se aplicável.
   - Adicione seu nome ou equipe na seção de agradecimentos.
   - Se planeja usar uma licença (como MIT), crie um arquivo `LICENSE` com os termos correspondentes.

3. **Teste a Renderização:**
   - Se hospedar o projeto em um repositório GitHub, o `README.md` será renderizado automaticamente na página principal.
   - Para visualizar localmente, abra o arquivo em um navegador ou use uma ferramenta como o Visual Studio Code com a extensão Markdown Preview.

---

### **Notas Adicionais**

- O `README.md` foi projetado com foco técnico, detalhando variáveis, funções e a lógica do jogo, além de incluir seções comuns para projetos open-source.
- Se você não usa GitHub ou quer um formato diferente (ex.: mais simples ou com capturas de tela), me avise que posso ajustar!
- As melhorias sugeridas são ideias para expansão futura; você pode implementá-las ou removê-las do documento.

Se precisar de mais ajustes ou quiser adicionar algo específico (como diagramas ou exemplos de código), é só pedir!
