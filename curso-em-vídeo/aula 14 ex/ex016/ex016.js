function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
 
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Faltam dados')
        res.innerHTML = 'Impossível contar'
        res.style.color = '#ffffff'
    /*} else if (ini.value.length == 0) {
        window.alert('[ERRO] Faltam dados no início')
    } else  if (fim.value.length == 0){
        window.alert('[ERRO] Faltam dados no fim')
    }else if (passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados no passo')*/
    }else{
        res.innerHTML = 'Contando:<br>'
        res.style.color = '#ffffff'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido. Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(let c = i; c<=f; c += p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            //Contagem regressiva
            for(let c = i; c >= f ; c -= p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}