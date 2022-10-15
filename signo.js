let dataEscolhida = pegarData("data")
buscaSigno(dataEscolhida)
function pegarData(parametro){
    let local = location.search.substring(1,location.search.length)
    let dados = local.split("=")
    

    return dados[1]
}

function buscaSigno(dataEscolhida){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            signoDetalhes(this,dataEscolhida)
        }
    }
    xmlhttp.open("GET","signos.xml", true)
    xmlhttp.send()
}

function signoDetalhes(xml,data){
    let xmlDoc = xml.responseXML
    let x = xmlDoc.getElementsByTagName("signo")
    let lista = []
    let dtEscolhida = retornaObjData(data)
    for (let i = 0; i<x.length; i++){
        let obj = {
            dtInicio:retornaObjData(x[i].getElementsByTagName("dataInicio")[0].childNodes[0].nodeValue),
            dtFim:retornaObjData(x[i].getElementsByTagName("dataFim")[0].childNodes[0].nodeValue),
            sigNome:x[i].getElementsByTagName("signoNome")[0].childNodes[0].nodeValue,
            descri:x[i].getElementsByTagName("descricao")[0].childNodes[0].nodeValue,
        }
        lista.push(obj)
    }
    for(let z = 0; z<lista.length; z++){
        console.log(dtEscolhida)
        if(dtEscolhida>=lista[z].dtInicio && dtEscolhida<= lista[z].dtFim){
            let text = ""
            text+=`<h4>${lista[z].sigNome}</h4>`
            text+= `<p>${lista[z].descri}</p>`
            
            return document.getElementById("resultado").innerHTML = text
        }
    }
}

function retornaObjData(data){
    let dados = data.split("/")
    let dia = parseInt(dados[0])
    let mes = parseInt(dados[1])
    let dataConvertida = new Date(2022,mes,dia)

    return dataConvertida
}

