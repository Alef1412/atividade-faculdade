$('#btn_pesquisar').on('click',()=>{
    let dataDigitada = $('input[type=date]').val()
    let dataConvertida = converteDados(dataDigitada)
    window.location = `signos.html?data=${dataConvertida}`
})

function converteDados(data){
    let dados = data.split('-')
    let mes = dados[1]
    let dia = dados[2]
    let dataPadrao = `${dia}/${mes}`
    
    return dataPadrao
}