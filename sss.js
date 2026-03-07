let eletrodomesticos = [
    {nomeProduto: "Tv LG 32", Vendas: 13, Preco: 850.41},
    {nomeProduto: "Geladeira", Vendas: 12, Preco: 454.21},
    {nomeProduto: "Micro-ondas", Vendas: 19, Preco: 519.99},
];
let moveis = [
    {nomeProduto: "Estante Modular 4 Prateleiras", Vendas: 22, Preco: 52.50},
    {nomeProduto: "Cadeira de Plástico Dobrável", Vendas: 41, Preco: 55.75},
    {nomeProduto: "Cama Box Casal", Vendas: 10, Preco: 648},
];
let eletronicos = [
    {nomeProduto: "iPhone 11", Vendas: 5, Preco: 1499.00},
    {nomeProduto: "Redmi Note 14", Vendas: 8, Preco: 1050.00},
    {nomeProduto: "Samsung S24", Vendas: 6, Preco: 2599.51},
];
let categorias = [eletrodomesticos,moveis,eletronicos];

function vendasMesTotal(){
    let totalCategoria = 0
    for (let a = 0; a < categorias.length; a++){
        let categoriaAgora = categorias[a]
        for (let i = 0; i < categoriaAgora.length; i++) {
        totalCategoria += (categoriaAgora[i].Preco * categoriaAgora[i].Vendas)
    }
}
    return `O faturamento total da categoria é: R$${totalCategoria.toFixed(2)}`
}

function vendasMesCategoria(categoria) {
    let totalCategoria = 0
    for (let i = 0; i < categoria.length; i++) {
        totalCategoria += (categoria[i].Preco * categoria[i].Vendas)
    }
    return `O faturamento da categoria é: R$${totalCategoria.toFixed(2)}`
}
// Caso não seja no faturamento:
function listaComissão() {
    console.log("\n-----Comissões-----");
    for (let a = 0; a < categorias.length; a++) { //Percorre por todo o categoriaAgora categorias
        let categoriaAgora = categorias[a]; // a categoria atual vai ser armazenada nesta variavel
        for (let i = 0; i < categoriaAgora.length; i++) { //Percorre o categoriaAgora da categoria atual 
            let produto = categoriaAgora[i] // O nome, vendas, e Preco do produto atual da categoria atual será armazenada nesta variavel
            if (produto.Preco > 2000) { // se verdadeiro, envia na console a comissão extra total
                console.log(`Produto: ${produto.nomeProduto} \nComissão extra total: R$${((produto.Preco * 0.03) * produto.Vendas).toFixed(2)}`)
            }
        }
    }
}

function produtoMaisCaroVendido(array) {
    let maisCaro = array[0][0] //a variavel recebe um produto aleatorio
    for (let a = 0; a < categorias.length; a++) { //percorre as categorias
        let categoriaAgora = categorias[a] // armazena a categoria atual
        for (let i = 0; i < categoriaAgora.length; i++) { // percorre os produtos da categoria
            let produto = categoriaAgora[i] // armazena as informações do produto atual
            if (produto.Preco > maisCaro.Preco) { //se o preço do produto atual for maior que o preço produto aleatoria 
                maisCaro = produto //a variavel recebera as informações do produto atual
            }
        }
    }
    return `-----Produto mais caro vendido no mês----- \nProduto: ${maisCaro.nomeProduto} \nPreco: ${maisCaro.Preco}`
}

console.log(vendasMesTotal());

console.log(vendasMesCategoria(categorias[0]));
console.log(vendasMesCategoria(categorias[1]));
console.log(vendasMesCategoria(categorias[2]));

listaComissão()

console.log(produtoMaisCaroVendido(categorias));
