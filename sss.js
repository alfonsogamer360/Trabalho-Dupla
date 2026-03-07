let eletrodomesticos = [
    {nomeProduto: "Tv LG 32", Vendas: 13, Preço: 850.41},
    {nomeProduto: "Geladeira", Vendas: 12, Preço: 454.21},
    {nomeProduto: "Micro-ondas", Vendas: 19, Preço: 519.99},
];
let moveis = [
    {nomeProduto: "Estante Modular 4 Prateleiras", Vendas: 22, Preço: 52.50},
    {nomeProduto: "Cadeira de Plástico Dobrável", Vendas: 41, Preço: 55.75},
    {nomeProduto: "Cama Box Casal", Vendas: 10, Preço: 648},
];
let eletronicos = [
    {nomeProduto: "iPhone 11", Vendas: 5, Preço: 1499.00},
    {nomeProduto: "Redmi Note 14", Vendas: 8, Preço: 1050.00},
    {nomeProduto: "Samsung S24", Vendas: 6, Preço: 2599.51},
];
let categorias = [eletrodomesticos,moveis,eletronicos];

function vendasMesTotal(){
    let totalCategoria = 0
    for (let a = 0; a < categorias.length; a++){
        let categoriaAgora = categorias[a]
        for (let i = 0; i < categoriaAgora.length; i++) {
        totalCategoria += (categoriaAgora[i].Preço * categoriaAgora[i].Vendas)
    }
}
    return `O faturamento total da categoria é: R$${totalCategoria.toFixed(2)}`
}

function vendasMesCategoria(categoria) {
    let totalCategoria = 0
    for (let i = 0; i < categoria.length; i++) {
        totalCategoria += (categoria[i].Preço * categoria[i].Vendas)
    }
    return `O faturamento da categoria é: R$${totalCategoria.toFixed(2)}`
}
// Caso não seja no faturamento:
function listaComissão() {
    console.log("\n-----Comissões-----");
    for (let a = 0; a < categorias.length; a++) { //Percorre por todo o array categorias
        let categoriaAgora = categorias[a]; // a categoria atual vai ser armazenada nesta variavel
        for (let i = 0; i < categoriaAgora.length; i++) { //Percorre o array da categoria atual 
            let produto = categoriaAgora[i] // O nome, vendas, e preço do produto atual da categoria atual será armazenada nesta variavel
            if (produto.Preço > 2000) { // se verdadeiro, envia na console a comissão extra total
                console.log(`Produto: ${produto.nomeProduto} \nComissão extra total: R$${((produto.Preço * 0.03) * produto.Vendas).toFixed(2)}`)
            }
        }
    }
}
console.log(vendasMesTotal());

console.log(vendasMesCategoria(categorias[0]));
console.log(vendasMesCategoria(categorias[1]));
console.log(vendasMesCategoria(categorias[2]));

listaComissão()