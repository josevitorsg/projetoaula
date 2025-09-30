// selecionando os elementos do html

const inputTamanho = document.getElementById("tamanho");
const checkMaiusculas = document.getElementById("maiuscula");
const checkNumeros = document.getElementById("numeros");
const checkEspeciais = document.getElementById("especial");
const botaoGerar = document.getElementById("btn-gerar");
const campoGerado = document.getElementById("senhaGerada");

function gerarSenha() {
  //criando as variaveis para incluir na senha gerada
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";
  const caracEspeciais = "!@#$%&*()-=_+[]/;~,.<>?|";

  // agora vou pegar os valores do usuario, que o usuario passou

  // usei o parseInt para transformar e  garantir que é um número inteiro
  const tamanhoDaSenha = parseInt(inputTamanho.value);
  const incluirMaiusculas = checkMaiusculas.checked;
  const incluirNumeros = checkNumeros.checked;
  const incluirEspeciais = checkEspeciais.checked;

  let caracteresPermitidos = minusculas;

  if (incluirMaiusculas) {
    caracteresPermitidos += maiusculas;
  }
  if (incluirNumeros) {
    caracteresPermitidos += numeros;
  }
  if (incluirEspeciais) {
    caracteresPermitidos += caracEspeciais;
  }

  //
  if (caracteresPermitidos.length === 0) {
    campoResultado.textContent = "Selecione ao menos um tipo de caractere!";
    return;
  }

  let senhaGerada = "";

  //loop para pegar os caracteres de acordo com o tamanho escolhido pelo usuario (por exemplo se o usuario tiver definido o tamanho da senha como 12)
  for (let i = 0; i < tamanhoDaSenha; i++) {
    //sorteia um indice aleatorio dentro da string de caracteres permitidos
    const indiceAleatorio = Math.floor(
      Math.random() * caracteresPermitidos.length
    );
    // vá ate o indice e pegue o caractere q esta em tal posição
    senhaGerada += caracteresPermitidos.charAt(indiceAleatorio);
  }

  // muda o texto da div para a senha gerada.
  campoResultado.textContent = senhaGerada;
}

botaoGerar.addEventListener("click", senhaGerada);
