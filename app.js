dados.forEach(function (atleta) {
    console.log("Título: " + atleta.titulo);
    console.log("Descrição: " + atleta.descrição);
    console.log("Link: " + atleta.link);
    console.log("------------------------");
});
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    for (let dado of dados) {
        resultados += ` <div class="item-resultado">
        <h2>
        <a href="#" target+"_blank">${dado.titulo}</a>
        </h2>
        <p class="descrição-meta">${dado.descrição}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `;
    }
    section.innerHTML = resultados;
}

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descrição = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descrição = dado.descrição.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
        <div class="item-resultado">
        <h2>
        <a href="#" target="_blank">${dado.titulo}</a>
        <h2>
        <p class="descrição-meta">${dado.descrição}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `;
        }
    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    section.innerHTML = resultados;
}
