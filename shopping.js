const prompt = require("prompt-sync")();

// ----------Functions--------------

function comprar() {
    let continuarComprando = true;
    do {
        let produto = prompt("Digite o nome do produto: ").toUpperCase();
        let valor = Number(prompt("Informe o valor do produto: "));
        total += valor;
        console.log(`\nVocê acabou de comprar: ${produto}\n\nSeu total em compras é: ${total}`);
        console.log("--------------------------------\n")
        let comprarMais = prompt("Deseja adicionar mais produtos? S/N: ").toUpperCase();
        if(comprarMais === "N"){
            continuarComprando = false;
        }
        
    } while (continuarComprando === true);
    menu();
}

function lojaRoupas() {
    console.log("------------LOJA DE ROUPAS------------"); 
    comprar();
}

function lojaPerfumes() {
    console.log("------------LOJA DE PERFUMES-------------");      
    
}

function lojaCalcados() {
    console.log("------------LOJA DE CALÇADOS------------");      
    
}

function voltar(){
    menu();
}


// ----------Main-------------
console.log("\n\n--------------------------------");
console.log("|           SHOPPING            |");
console.log("--------------------------------\n");

let total = 0.0;

function menu() {
    console.log("          Menu        ");
    console.log("1 - LOJA DE ROUPAS");
    console.log("2 - LOJA DE PERFUMES");
    console.log("3 - LOJA DE CALÇADOS");
    console.log("0 - SAIR");  
    console.log("--------------------------------\n"); 
    let opcaoMenu = Number(prompt("Digite um número para escolher uma opção: "));
    switch(opcaoMenu) {
        case 1:
            lojaRoupas();
            break;
        case 2:
            lojaPerfumes();
            break;
        case 3:
            lojaCalcados();
            break;
        case 0:
            console.log("Saindo...");
            break;
        default:
            console.log("Escolha uma opção valida");
            menu();
    }
}

menu();
console.log(total);
