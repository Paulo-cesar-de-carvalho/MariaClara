function criar_questão(item, base){
    let selectQuestao = document.createElement("select")
    selectQuestao.setAttribute ("name", item)
    selectQuestao.setAttribute ("id", item)
    selectQuestao.setAttribute("required", true)
    let paragrafo = document.createElement("p")
    paragrafo.innerHTML = `<label for=${item}>${item}</label>`
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

let divBase = document.querySelector("#questionario")

criar_questão("teste",divBase )