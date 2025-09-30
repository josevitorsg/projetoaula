//primeiro metodo utilizado, nao armazena a senha e usuario salvo se a pagina for recarregada
// const usuarios = [];
let usuarios;
//tentando buscara  lista de usuarios que esta salva no localstorage
const usuariosSalvos = localStorage.getItem("listaUsuarios");

if (usuariosSalvos) {
  // se encontrar algo salvo, convertemos o texto de volta para um array
  usuarios = JSON.parse(usuariosSalvos);
} else {
  // se não encontrar nada, começa com um array vazio.
  usuarios = [];
}

function cadastrarUsuario() {
  try {
    //primeiro vamos pegar os inputs do html
    const inputUsuario = document.getElementById("usuario");
    const inputSenha = document.getElementById("senha");
    //pegar o async function entrar() {}que foi digitado nos 2 inputs
    const usuarioDigitado = inputUsuario.value;
    const senhaDigitada = inputSenha.value;

    // estrutura condicional para verificar se os campos digitados estão vazios
    if (usuarioDigitado === "" || senhaDigitada === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const usuarioExistente = usuarios.find(
      (usuario) => usuario.login === usuarioDigitado
    );

    if (usuarioExistente) {
      alert("Usuario ja existente");
      return;
    }

    // criando um objeto usuario com o valor extraido.

    const novoUsuario = {
      login: usuarioDigitado,
      senhaConta: senhaDigitada,
    };

    // Adicionando o usuario digitado no array.
    usuarios.push(novoUsuario);
    //convertendo array 'usuarios' para texto
    //salvamos esse texto no localStorage com o nome 'listaUsuarios'
    localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));
    alert("Usuário cadastrado com sucesso.");
    console.log("Lista de usuarios atualizada", usuarios);

    // limpar os campos do usuario e senha após o cadastro.

    inputUsuario.value = "";
    inputSenha.value = "";
  } catch (error) {
    console.error("ERROR", error);
  }
}

function entrar() {
  // pega os valores digitados no campo de login
  const loginDigitado = document.getElementById("loginUsuario").value;
  const senhaDigitada = document.getElementById("loginSenha").value;

  //irei usar o metodo .find() para procurar pelo array se existe um usuario cadastrado com o nome digitado
  const usuarioEncontrado = usuarios.find(
    (usuario) =>
      usuario.login === loginDigitado && usuario.senhaConta === senhaDigitada
  );

  // se usuarioEncontrado for verdadeiro
  if (usuarioEncontrado) {
    alert(`Login bem sucedido! Bem-vindo, ${usuarioEncontrado.login}!`);
    window.location.href = "homepage.html";
  } else {
    alert("Login ou senha incorretos. Por favor, tente novamente.");
  }
}
