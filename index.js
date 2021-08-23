function dayList() {
    let day = document.getElementById('dia') //busca o elemento HTML com o id "ano"
    for(let i = 1; i<=31; i++){ //loop contendo o ano inicial e final que deverão constar no input select
        let option = document.createElement("option") //cria um elemento "option" na variável option
        option.value = i //atribui o valor do índice ao value do option
        option.text = i //atribui o valor do índice ao text do option
        day.appendChild(option) //cria um option como "filho" para o select, contendo o value e o text equivalentesao index atual
    }
}
dayList()

function monthList() {
    let day = document.getElementById('mes') //busca o elemento HTML com o id "ano"
    for(let i = 1; i<=12; i++){ //loop contendo o ano inicial e final que deverão constar no input select
        let option = document.createElement("option") //cria um elemento "option" na variável option
        option.value = i //atribui o valor do índice ao value do option
        option.text = i //atribui o valor do índice ao text do option
        day.appendChild(option) //cria um option como "filho" para o select, contendo o value e o text equivalentesao index atual
    }
}
monthList()

function yearList() {
    let day = document.getElementById('ano') //busca o elemento HTML com o id "ano"
    for(let i = 1950; i<=2006; i++){ //loop contendo o ano inicial e final que deverão constar no input select
        let option = document.createElement("option") //cria um elemento "option" na variável option
        option.value = i //atribui o valor do índice ao value do option
        option.text = i //atribui o valor do índice ao text do option
        day.appendChild(option) //cria um option como "filho" para o select, contendo o value e o text equivalentesao index atual
    }
}
yearList()

function  estadoCivil() {
    let estadoCivil =  document.getElementById('estado-civil')
    let lista = new  Array('casado',  'solteiro', 'viúvo', 'divorciado', 'união estável')
    for (let i = ''; i < lista.length; i++) {
        let option  = document.createElement("option")
        option.value = i
        option.name = i
        estadoCivil.appendChild(option)
    }
}
estadoCivil()