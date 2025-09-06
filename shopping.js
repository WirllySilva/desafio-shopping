const prompt = require("prompt-sync")();

// ----------Functions--------------

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

function comprar() {
    let continuarComprando = true;
    do {
        let produto = prompt("Digite o nome do produto: ");
        let valor = Number(prompt("Informe o valor do produto: "));
        totalCompras += valor;
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
    comprar();
}

function lojaCalcados() {
    console.log("------------LOJA DE CALÇADOS------------");      
    comprar();
}

function retirarItem() {
    let opcao;
    while(true) {
         let opcao = prompt("Digite o item que deseja retirar ou (S) para sair:").toUpperCase();

         if (opcao === "S") {
            console.log("Saindo...");
            sair();
        }

        let valor = Number(prompt("Qual valor do item? "));

           if (isNaN(valor) || valor <= 0) {
            console.log("Valor inválido, tente novamente.");
            continue;
        }
        console.log(`Você retirou o item ${opcao} com valor de ${valor}`);
        totalCompras -= valor;
        console.log(`Valor total do carrinho atualizado: ${totalCompras}`);
}

function sair() {
    if(totalCompras < 850) {
        console.log("COMPRA APROVADA!\nMas ainda dava pra acrescentar mais um mimo.");
    }else if(totalCompras > 850 && totalCompras < 1000) { 
        console.log("Compra acima do valor combinado (R$ 850).\nRetire alguns itens ou acrescente até chegar (R$ 1.000)");

        let opcao;
        do {
            console.log("Escolha uma opção para continuar\n1 - ACRESCENTAR\n2 - RETIRAR");
            opcao = Number(prompt("DIGITE 1 OU 2: "))

            if(opcao === 1) {
                console.log("Continuar comprando...")
                menu();
            } else if(opcao === 2) {
                console.log("Retirar um produto...");
                retirarItem();
            } else {
                console.log("Erro, digite um valor valido (1 ou 2).")
            }
        } while(opcao !== 1 && opcao !== 2);       
    } else if(totalCompras > 1000) {
        console.log("COMPRA RECUSADA\n MOTIVO: Valor acima do limite R$ 1.000\n Retire algum item.");
        retirarItem();
    }
}

// ----------Main-------------
console.log("\n\n--------------------------------");
console.log("|           SHOPPING            |");
console.log("--------------------------------\n");

let totalCompras = 0.0;



menu();
console.log(total);
