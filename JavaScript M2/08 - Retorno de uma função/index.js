function calculadoraMedia(a, b) {
    const media = (a + b) / 2 
    return media
}

const resultado = calculadoraMedia(6, 7)

console.log(resultado)

function criaProduto (nome,  preco) {
    const produto = {
        nome,
        preco,
        estoque: 1 
    }
    return produto
}

console.log(criaProduto("Notebook AMD", 2000))

function area