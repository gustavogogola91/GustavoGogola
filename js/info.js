const info =    document.getElementById("info");
const key = new URLSearchParams(window.location.search).get("key");
var dados = JSON.parse(localStorage.getItem("dados")) || [];

function loadInfo() {
    dados.forEach((i, k) => {
        if(k == key) {
            info.innerHTML += `
                <div>
                    <p>Nome: ${i.nome}</p>
                    <p>Cpf: ${i.cpf}</p>
                    <p>Email: ${i.email}</p>
                    <p>Telefone: ${i.telefone}</p>
                    <p>Tipo Solicitação: ${i.tipoSolicitacao}</p>
                    <p>Descrição: ${i.descricao}</p>
                    <p>Situação: ${i.situacao}</p>
                    <a href="./relatorio.html">Retornar</a>
                </div>
                
            `;
        }
    })
}

loadInfo()