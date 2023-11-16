const dados = JSON.parse(localStorage.getItem("dados")) || [];
const table = document.getElementById("conteudo");
const modal = document.getElementById("dialog");

function exibir() {
  dados.forEach((i, k) => {
    table.innerHTML += `
        <tr>
		<td>${k}</td>
		<td>${i.nome}</td>
		<td>${i.email}</td>
		<td>${i.tipoSolicitacao}</td>
		<td>${i.situacao}</td>
		<td><a href="./maisInfo.html?key=${k}">Mais informações</a></td>
	</tr>
        `;
  });
}

exibir();