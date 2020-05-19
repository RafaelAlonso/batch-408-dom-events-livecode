// 1. pegar o elemento que vai prestar atenção no evento
const button = document.querySelector("#show-hint");

// 2. saber qual o evento que prestaremos
const event = 'click';

// 3. o código que vai ser executado quando o evento acontecer com o elemento
const code = (event) => {
  const hint = document.querySelector('.hint');

  // trocando algum estilo do meu elemento
  // hint.style.opacity = '1';

  // adicionando uma classe ao meu elemento
  hint.classList.toggle('active');

};

// 4. juntar tudo usando o addEventListener
button.addEventListener(event, code);


// ==========================================================================

// 1. pegar o elemento que vai prestar atenção no evento
const quadrados = document.querySelectorAll('td');

// 2. saber qual o evento que prestaremos
const evento = 'click';

// 3. o código que vai ser executado quando o evento acontecer com o elemento
const codigo = (event) => {
  // pegar o quadrado clicado, a linha e a coluna dele
  const quadrado_que_cliquei = event.currentTarget;
  const coluna_do_clicado = quadrado_que_cliquei.cellIndex;
  const linha_do_clicado = quadrado_que_cliquei.parentElement.rowIndex;

  // pegar o quadrado vazio, a linha e a coluna dele
  const quadrado_vazio = document.querySelector('.empty');
  const coluna_do_vazio = quadrado_vazio.cellIndex;
  const linha_do_vazio = quadrado_vazio.parentElement.rowIndex;

  // Verificar se tem um espaço vazio adjacente
  // -- ele está imediatamente na esquerda/direita se estiver na mesma linha e na coluna -1 ou +1
  // -- ele está em cima/baixo se estiver na mesma coluna e na linha -1 ou +1
  if (linha_do_clicado === linha_do_vazio && coluna_do_clicado === coluna_do_vazio - 1 || // esq
      linha_do_clicado === linha_do_vazio && coluna_do_clicado === coluna_do_vazio + 1 || // dir
      coluna_do_clicado === coluna_do_vazio && linha_do_clicado === linha_do_vazio - 1 || // cim
      coluna_do_clicado === coluna_do_vazio && linha_do_clicado === linha_do_vazio + 1){  // bai

    // estão adjacentes!!
    // troca o estilo deles (o clicado fica vazio, o vazio fica branco)
    quadrado_que_cliquei.classList.add('empty');
    quadrado_vazio.classList.remove('empty');

    // troca o conteúdo deles (o clicado fica vazio, o vazio fica com o número do clicado)
    quadrado_vazio.innerText = quadrado_que_cliquei.innerText;
    quadrado_que_cliquei.innerText = "";


    // verificar se ganhamos (os quadrados estão em ordem)
    // -- Vai de quadrado em quadrado e verifica se ele está com o número certo
    // (quadrado[0] === 1, quadrado[1] === 2, ...)
    let ordem_correta = true;
    const quadrados_atualizados = document.querySelectorAll('td')
    for(i = 0; i < 15; i++){
      // se o quadrado na posição i não tiver o número (i + 1) dentro dele...
      if (quadrados_atualizados[i].innerText !== (i + 1).toString()){
        ordem_correta = false; // ...eles não estão na ordem correta
        break; // pode parar que tá tudo errado
      }
    }

    // ======================= CODIGO NÃO TERMINADO ============================
    // -- Pegamos todos os textos dos quadrados e verificamos se estão em ordem
    // if texto === '1,2,3,4,5,...'
    // const array_de_numeros = [];
    // quadrados.forEach((quadrado) => {
    //   array_de_numeros.push(quadrado.innerText);
    // })
    // =========================================================================

    if (ordem_correta){
      document.querySelector('table').insertAdjacentHTML('beforebegin', '<h1> You Win!! </h1>');
      window.location = '';
    }
  }
};

// queremos adicionar o event listener em CADA quadrado
quadrados.forEach((quadrado) => {
  // 4. juntar tudo usando o addEventListener
  quadrado.addEventListener(evento, codigo);
})











