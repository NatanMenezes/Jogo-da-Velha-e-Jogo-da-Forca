const letrasHtml = document.querySelectorAll(".letra")
const palavraHtml = document.getElementById("palavra")
const categoriaHtml = document.getElementById("categoria")
const gid = el=>document.getElementById(el);
const jogadas = [gid("jogada1"), gid("jogada2"), gid("jogada3"), gid("jogada4"), gid("jogada5"), gid("jogada6"), gid("jogada7")]
let erros = 0;
let acertos = 0;
let palavra;
let letras;
letrasHtml.forEach(letra => {
    letra.addEventListener("click", () => {
        procuraLetra(letra)
    })
})

async function iniciaJogo(){
    jogadas[0].style.display = "block"
    palavraHtml.innerHTML = ""
    palavra = await sorteiaPalavra()
    //console.log(palavra)
    categoriaHtml.innerHTML = palavra.categoria
    letras = await palavra.nome.split("")
    letras.forEach(letra=>{
        palavraHtml.innerHTML += "_"
    })
}
async function sorteiaPalavra(){
    
    // let lista = await getData();
    // let tamanho = await lista.length
    // return await lista[Math.round(Math.random()*tamanho-1)]

    var categoria = window.prompt("Qual a categoria da palavra?")
    var palavra = window.prompt("Qual a palavra?")

    return {
        categoria: categoria,
        nome: palavra
    }
}

async function procuraLetra(letra){
    var novaString = ""
    let acertou = 0
    for(var i = 0; i<letras.length; i++){
        if(letras[i].toLowerCase() == letra.innerHTML.toLowerCase()){
            acertou++
            novaString += letra.innerHTML
        }else{
            novaString += palavraHtml.innerHTML[i]
        }
    }
    if(acertou){
        letra.style.backgroundColor = "#28a745"
        acertos++
    }else{
        letra.style.backgroundColor = "#dc3545"
        erros++
    }
    palavraHtml.innerHTML = novaString
    window.setTimeout(mudaStatus, 200)
}
function mudaStatus(){
    if(erros != 0){
        jogadas[erros].style.display = "block"
        jogadas[erros-1].style.display = "none"
    }

    if(erros == 6){
        window.setTimeout(()=>{
            alert("Opa, você perdeu. O resultado era " + palavra.nome)
            limpar()
            jogadas[6].style.display = "none"
        }, 100)
    }else if(palavraHtml.innerHTML.indexOf("_") == -1){
        alert("Parabéns, você venceu")
        limpar()
    }
}
function limpar(){
    letrasHtml.forEach(letra=>{
        letra.style.backgroundColor = "white"
    })
    jogadas.forEach(jogada=>{
        jogada.style.display = "none"
    })
    palavraHtml.innerHTML=""
    erros = 0
    acertos = 0
    iniciaJogo()
}
function redirect(){
    window.location.assign("add.html")
}
iniciaJogo()