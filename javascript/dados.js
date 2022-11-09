//pais: 1 a 8, 12 e 13
//Fono: 1,2,4,5,6,7,10,11,12
//Terapeuta: 1,2,4,5,6,7,10,11,12
//Psicomotricista: 1, 2, 3, 4, 9, 11
//Escola: 1, 2, 5, 6, 12

//1. Agitação 2.Agressividade; 3.Apetite;  4.Choro; 5.Comunicação; 6.Concentração/Atenção; 7.Contato Visual; 8.Controle de Esfincter
// 10.Fuga/Esquiva; 9.Desempenho motor; 11.Reciprocidade; 12.Sensorial; 13.Sono

const pais = [1,2,3,4,5,6,7,8,12,13]
const fono = [1,2,4,5,6,7,10,11,12]
const terapeuta = [1,2,4,5,6,7,10,11,12]
const psicomotricista = [1, 2, 3, 4, 9, 11]
const escola = [ 1, 2, 5, 6, 12]

const profissionais = [pais,fono,terapeuta,psicomotricista,escola]
const profissionaisCompleto = ["Pais", "Fonoaudióloga", "Acompanhante Terapêutica", "Psicomotricista", "Escola"]

const questoes = ["Agitação","Agressividade","Apetite","Choro", "Comunicação", "Concentração / Atenção",
"Contato Visual", "Controle de Esfíncter", "Desempenho Motor","Fuga / Esquiva", "Reciprocidade", "Sensorial",
"Sono"]

//preencher opção profissionais:
let categoria = document.querySelector("#categoria")
for (item of profissionaisCompleto){
    let opcao = document.createElement("option")
    opcao.innerText = item
    categoria.appendChild (opcao)
}


