function criar_questão(item, base,numero){
    let selectQuestao = document.createElement("select")
    selectQuestao.setAttribute ("name", item)
    selectQuestao.setAttribute ("id", item)
    selectQuestao.setAttribute("required", true)
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = `<label for=${item}>${numero} - ${item}: </label>`
    paragrafo.appendChild(selectQuestao)
    let opcao = document.createElement("option")
    opcao.innerText = ""
    selectQuestao.appendChild(opcao)
    for (let i = 0; i <= 10;i++){
        let opcao = document.createElement("option")
        opcao.value = 10 - i
        opcao.innerHTML = 10- i
        selectQuestao.appendChild(opcao)
    }
    base.appendChild(paragrafo)
}

function criar_questionario(indiceProfissional){
    let divBase = document.querySelector("#questionario")
    divBase.innerText = ""
    for (indicePergunta of profissionais[indiceProfissional]){
        criar_questão(questoes[indicePergunta-1],divBase,indicePergunta)
    }
}

categoria.addEventListener("change", function(){
    criar_questionario(this.selectedIndex)
})

function iniciar(){
    criar_questionario(0)
}
iniciar()
