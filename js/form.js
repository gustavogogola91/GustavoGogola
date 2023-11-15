const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const endereco = document.getElementById("endereco");
const cpf = document.getElementById("cpf");
const telefone = document.getElementById("telefone");
const tipoSolicitado = document.getElementById("tipoSolicitacao");
const descricao = document.getElementById("descricao");

var dados = JSON.parse(localStorage.getItem("dados")) || [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let novoNome = nome.value;
  let novoEmail = email.value;
  let novoEndereco = endereco.value;
  let novoCpf = cpf.value;
  let novoTelefone = telefone.value;
  let novoTipoSolicitado;
  let novoDescricao = descricao.value;
  let indexSelecionado = tipoSolicitado.selectedIndex;

  if (indexSelecionado !== -1) {
    if (indexSelecionado == 1) {
      novoTipoSolicitado = "Software";
    } else if (indexSelecionado == 2) {
      novoTipoSolicitado = "Hardware";
    } else {
      novoTipoSolicitado = "Não selecionado";
    }
  } else {
    novoTipoSolicitado = "Error";
  }

  dados.push({
    nome: novoNome,
    email: novoEmail,
    endereco: novoEndereco,
    cpf: novoCpf,
    telefone: novoTelefone,
    tipoSolicitacao: novoTipoSolicitado,
    descricao: novoDescricao,
    situacao: "Em aberto",
  });

  window.location.href = "./agradecimento.html";
  localStorage.setItem("dados", JSON.stringify(dados));
});
