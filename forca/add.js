const gid = el=>document.getElementById(el);

async function novaPalavra(categoria, palavra) {
    console.log("Chegou")
    var tamanho = await getData().then(res => res)
    tamanho = await tamanho.length
    putData(tamanho, {
        categoria: categoria,
        nome: palavra
    })
}

function redirect(){
    location.assign("index.html")
}

async function onSubmit(){
    await novaPalavra(gid("categoria").value, gid("nome").value)
    await alert("Enviado com sucesso")
    location.assign("add.html")
}