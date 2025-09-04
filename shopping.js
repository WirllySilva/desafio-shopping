const prompt = require("prompt-sync")();

// ----------Functions--------------

function comprar() {
    let continuarComprando = true;
    do {
        let produto = prompt("Digite o nome do produto: ");
        let valor = Number.parseFloat(prompt("Informe o valor do produto: "));
        total += valor;
        let comprarMais = prompt("Deseja adicionar mais produtos? S/N: ").toUpperCase();
        if(comprarMais === "N"){
            continuarComprando = false;
        }
        
    } while (continuarComprando === true);

}

function lojaRoupas() {
    console.log("----------LOJA DE ROUPAS--------------"); 
    
    let produto = prompt("Digite o nome do produto: ");
    let valor = Number.parseFloat(prompt("Informe o valor do produto: "));
    let comprarMais = prompt("Deseja adicionar mais produtos? S/N: ").toUpperCase();
    if(comprarMais === "S") {

    }
    
}

function lojaPerfumes() {
    console.log("----------LOJA DE PERFUMES------------");      
    
}

function lojaCalcados() {
    console.log("----------LOJA DE CALÇADOS----------");      
    
}

function voltar(){
    menu();
}


// ----------Main-------------
console.log("----------------------------");
console.log("           SHOPPING");

let total;

function menu() {
    console.log("-----------Menu----------");
    console.log("1 - LOJA DE ROUPAS");
    console.log("2 - LOJA DE PERFUMES");
    console.log("3 - LOJA DE CALÇADOS");
    console.log("0 - SAIR");  
    console.log("----------------------------"); 
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
