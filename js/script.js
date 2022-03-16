function novaFrase() {
    var frases = [
    "O homem honesto é cauteloso em suas amizades, mas o caminho dos ímpios os leva a perder-se.",
    "O temor do Senhor é o princípio do conhecimento, os loucos desprezam a sabedoria e a instrução.",
    "A resposta delicada acalma o furor, mas a palavra dura aumenta a raiva.",
    "O filho sábio dá alegria ao pai, o filho tolo dá tristeza à mãe.",
    "Mais vale uma mão cheia com descanso, do que duas com trabalho e aflição de espírito.",
    "O homem vaidoso não gosta de correção.",
    "As mãos preguiçosas empobrecem o homem, porém as mãos diligentes lhe trazem riqueza.",
    "Todo o que ama a disciplina ama o conhecimento, mas aquele que odeia a repreensão é tolo.",
    "O Senhor odeia os lábios mentirosos, mas se deleita com os que falam a verdade.",
    "O coração ansioso deprime o homem, mas uma palavra bondosa o anima."]
    //Máx. caractere usar o lenght aqui "O coração ansioso deprime o homem, mas uma palavra bondosa o anima.O coração ansioso deprime o homem, mas uma palavra bondosa o anima.O coração ansioso deprime o homem, mas uma palavra bondosa o anima.O coração ansioso deprime o homem, mas uma palavra bondosa o anima.O coração ansioso deprime o homem, mas uma palavra bondosa o anima o amina o anima"
    var numero = Math.floor(Math.random() * 10 )
    document.getElementById("frase").innerText = frases[numero]
}

function salvaFrase() {
    var item =  document.createElement("li");
    var conteudo = document.createTextNode(document.getElementById("frase").innerText);
    item.appendChild(conteudo);
    var lista = document.getElementById("listaFrasesSalvas");
    lista.insertAdjacentElement("beforeend", item) 
}
