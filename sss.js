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
    let totalCategoria = 0 // criar variavel
    for (let a = 0; a < categorias.length; a++){ // percorre cada categoria
        let categoriaAgora = categorias[a] // armazena numa variavel a categoria que esta sendo percorrida
        for (let i = 0; i < categoriaAgora.length; i++) { // percorre cada produto da categoria
        totalCategoria += (categoriaAgora[i].Preco * categoriaAgora[i].Vendas) // calculo para o valor total
    }
}
    return `-----Faturamento total----- \nO faturamento total da categoria é: R$${totalCategoria.toFixed(2)}`
}

function vendasMesCategoria(categoria) { //no parametro recebe os produtos de uma categoria
    let totalCategoria = 0 // criar o total da categoria
    for (let i = 0; i < categoria.length; i++) { //percorre todos os produtos da categoria
        totalCategoria += (categoria[i].Preco * categoria[i].Vendas) //multiplica o preço do produto pelas vendas e o resultado é enviado a variavel
    }
    return `-----Faturamento categoria----- \nO faturamento da categoria é: R$${totalCategoria.toFixed(2)}`
}
// Caso não seja no faturamento:
function listaComissão() {
    console.log("\n-----Comissões-----");
    for (let a = 0; a < categorias.length; a++) { //Percorre por todas as categorias
        let categoriaAgora = categorias[a]; // a categoria atual vai ser armazenada nesta variavel
        for (let i = 0; i < categoriaAgora.length; i++) { //Percorre os produtos da categoria atual 
            let produto = categoriaAgora[i] // O nome, vendas, e Preco do produto atual da categoria atual será armazenada nesta variavel
            if (produto.Preco > 2000) { // se verdadeiro, envia na console a comissão extra total
                console.log(`Produto: ${produto.nomeProduto} \nComissão extra total: R$${((produto.Preco * 0.03) * produto.Vendas).toFixed(2)}`)
            }
        }
    }
}

function produtoMaisCaroVendido(array) { //recebe o array
    array.sort((a,b) => b[1].Preco - a[0].Preco);
    array[0].sort((a,b) => b.Preco - a.Preco)
    return `-----Produto mais caro vendido----- \nProduto: ${array[0][0].nomeProduto} \nPreço: ${array[0][0].Preco}`
}

function categoriaMaisFaturadora(array) {// recebe o array
    let totais = [] //cria uma variavel

    for (let a = 0; a < array.length; a++){ //percorre cada categoria
        let categoriaAgora = array[a] // armazena numa variavel a categoria que esta sendo percorrida
        let totalCategoria = 0 // cria uma variavel para armazenar o total da categoria atual
        let categoriaString = ["Eletrodomésticos", "Móveis", "Eletrônicos"] // Os nomes de cada categoria
        for (let i = 0; i < categoriaAgora.length; i++) { //percorre todos os produtos da categoria
        totalCategoria += (categoriaAgora[i].Preco * categoriaAgora[i].Vendas)// calculo para o valor total
    }
    totais.push({total: totalCategoria.toFixed(2), nome: categoriaString[a]}) // puxa na lista o total da categoria e o nome da categoria
    }
    totais.sort((a,b) => b.total - a.total) // ordenamos a lista em ordem decrescente em funções do total de cada categoria
    return `-----Maior faturamento----- \nA categoria com mais faturamento é: ${totais[0].nome} \nTotal: ${totais[0].total}`
}

function metaFinal(){
    let totalCategoria = 0
    for (let a = 0; a < categorias.length; a++){
        let categoriaAgora = categorias[a]
        for (let i = 0; i < categoriaAgora.length; i++) {
        totalCategoria += (categoriaAgora[i].Preco * categoriaAgora[i].Vendas)
        }
    }
    let meta = totalCategoria - 50000;
    if(totalCategoria>=50000){
        return `-----Meta final----- \nMeta final atingida, valor: R$${totalCategoria}`;
    }else{
        return `-----Meta final----- \nMeta final não atingida, valor: R$${meta.toFixed(2)}`;
    }
}
console.log(vendasMesTotal());

console.log(vendasMesCategoria(categorias[0]));
console.log(vendasMesCategoria(categorias[1]));
console.log(vendasMesCategoria(categorias[2]));

listaComissão();

console.log(produtoMaisCaroVendido(categorias));
console.log(categoriaMaisFaturadora(categorias));
console.log(metaFinal());
