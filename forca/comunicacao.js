const getData = () =>
    fetch('https://it3-forca-default-rtdb.firebaseio.com/conteudo/NGU2.json')
        .then(response => response.json())
        .catch(err => console.error(err));

const putData = (novoIndice, novaSubmissao) => {
    fetch('https://it3-forca-default-rtdb.firebaseio.com/conteudo/NGU2/' + novoIndice + '.json', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaSubmissao)
    })
        .then(response => response.json())
        .catch(err => console.error(err));
}