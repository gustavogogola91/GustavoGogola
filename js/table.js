const dados = JSON.parse(localStorage.getItem("dados")) || [];
const table = document.getElementById("conteudo");
const modal = document.querySelector("modal");

function exibir() {
  dados.forEach((i, k) => {
    table.innerHTML += `
        <tr>
		<td>${k}</td>
		<td>${i.nome}</td>
		<td>${i.email}</td>
		<td>${i.tipoSolicitado}</td>
		<td>${i.situacao}</td>
		<td><a href="./maisInfo.html?key=${k}">Mais informações</a> || <a href="#" onclick="alterarSituacao(${k})"> Mudar situação </a> </td>
	</tr>
        `;
  });
}

exibir();

function alterarSituacao(key) {
	modal.showModal();
}
