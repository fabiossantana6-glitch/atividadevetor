
//ATIVIDADE 4

function gerenciacompras(){

    
let entradadocarrinho = [];

//MERCADORIA

entradadocarrinho.push("arroz");
entradadocarrinho.push("feijao");
entradadocarrinho.push("leite");

//RETIRADA DA MERCADORIA

let saidadocarrinho = entradadocarrinho.shift();

//RESULTADO

console.log("retirado das compras,", saidadocarrinho);
console.log("mercadoria escolhida,", entradadocarrinho);


}gerenciacompras()
