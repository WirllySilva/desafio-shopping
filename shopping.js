const prompt = require("prompt-sync")();

// ----------Functions--------------

//Função menu principal.
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
            sair(); // Caso escolha 0, ele chama a função sair.
            break;
        default:
            console.log("Escolha uma opção valida");
            menu();
    }
}

//função comprar, essa é chamada dentro das funções loja.
function comprar() {
    let continuarComprando = true; //Aqui declaro uma variavel boleana pra usar depois no meu laço doWhile

    do { // Inicio do Loop doWhile, O úsuario só vai sair do loop após dizer que não quer continuar comprando.
        let produto = prompt("Digite o nome do produto: ");
        let valor = Number.parseFloat(prompt("Informe o valor do produto: "));

        if (isNaN(valor) || valor <= 0) { // Verifica se o úsuario digitou um valor tipo número.
            console.log("Valor inválido. Digite um valor válido.\n");
            continue;
        }

        totalCompras += valor;
        console.log(`\nVocê acabou de comprar: ${produto} custando ${moedaFormat(valor)}.`); //Repare no uso da nossa função formatadora de moedas, visto em aula.
        console.log(`Seu total em compras é: ${moedaFormat(totalCompras)}`);
        console.log("--------------------------------\n");

        let comprarMais; // declaro aqui uma variavel que no futuro vai receber um valor S ou N.
        do {
            comprarMais = prompt("Deseja adicionar mais produtos? S/N: ").toUpperCase(); // uso do toUpperCase, o valor sempre vai ser maiúsculo.
            if(comprarMais !== "N" && comprarMais !== "S") { // Verifica se  o úsuario digitou S ou N, caso tenha digitado outro valor, ele retorna para solicitar o valor correto.
                console.log("OPÇÃO INVÁLIDA\nDigite S ou N.");
            }
        } while(comprarMais !== "S" && comprarMais !== "N"); // Se o valor for S ou N, ele conclui o Loop e pula pra condição.

        if(comprarMais === "N") {  //verifica se o valor na variável é S ou N. Se o valor for N ele atribui false na variável continuarComprando.
            continuarComprando = false;
        }        
    } while (continuarComprando); //Fim do loop doWhile.

    menu();  //Se o úsuario escolher N, ele retorna ao menu, podendo escolher uma outra loja.
}

//Funções loja, todas tem o mesma função, que é chamar a função comprar.
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


//função par remover itens do carrinho.
function retirarItem() {
    let opcao; // Declaramos aqui uma variável  para receber uma String.
    while(true) { // Loop while(true), faz com que o usuário só saia do loop quando digitar a Letra S.
         opcao = prompt("Digite o item que deseja retirar ou (S) para sair: \n").toUpperCase();

         if (opcao === "S") {
            console.log("\nSaindo...\n");
            sair(); //Chama a função sair;
            break; //Garante que o loop seja encerrado definitivamente caso o usuário deseje sair.
        }

        let valor = Number(prompt("Qual valor do item? "));

           if (isNaN(valor) || valor <= 0) { // Verificador comum pra verificar se o usuário digitou um número.
            console.log("Valor inválido, tente novamente. ");
            continue;
        }
        console.log(`Você retirou o item ${opcao} com valor de ${moedaFormat(valor)}`);
        totalCompras -= valor;
        console.log(`Valor total do carrinho atualizado: ${moedaFormat(totalCompras)}`);
    }
}

//Função sair, que faz tota lógica pra calcular e dar o desconto caso o valor seja mil reais.
function sair() {
    if(totalCompras < 850) {
        console.log("COMPRA APROVADA!\nMas ainda dava pra acrescentar mais um mimo.\n");
    }else if(totalCompras > 850 && totalCompras < 1000) { 
        console.log("Compra acima do valor combinado (R$ 850).\nRetire alguns itens ou acrescente até chegar (R$ 1.000) ");

        let opcao; // variável para receber o valor 1 ou 2 referente as opções acrescentar e retirar itens.
        do { //laço doWhile para obrigar o usuário a digitar 1 ou 2.
            console.log("Escolha uma opção para continuar\n1 - ACRESCENTAR\n2 - RETIRAR ");
            opcao = Number(prompt("DIGITE 1 OU 2: "))

            if(opcao === 1) {
                console.log("Continuar comprando...") // Se o usuário digar 1 ele chama a função menu para fazer outras compras em outras lojas.
                menu();
            } else if(opcao === 2) { // Se for 2, ele chama a função retirarItens.
                console.log("Retirar um produto...");
                retirarItem();
            } else {
                console.log("Erro, digite um valor valido (1 ou 2). ") // Aqui, caso o usuário não digite 1 ou 2, 
            }                                                          //ele mostra a mensagem e obriga o usúario a digitar novamente

        } while(opcao !== 1 && opcao !== 2); 
    
    // Condição para finalizarmos nossa compra.
    } else if(totalCompras > 1000) { // recusa a compra caso seja maior que mil, e obriga o usuário a retirar itens.
        console.log("COMPRA RECUSADA\n MOTIVO: Valor acima do limite R$ 1.000\n Retire algum item.");
        retirarItem();
    } else if(totalCompras === 1000) { //Igual mil, ganha o desconto de 15%
        console.log("PARABÉNS\nVocê ganhou 15% de desconto");
        console.log(`Calculando seu desconto...`);
        let desconto = totalCompras * 0.15;
        console.log(`Seu desconto foi de R$ ${desconto.toFixed(2)}`);
        let totalComDesconto = totalCompras - desconto;
        console.log(`COMPRA APROVADA\nVocê pagou R$ ${totalComDesconto.toFixed(2)}\nVOLTE SEMPRE.\n`)
    }

    //Se der tudo certo na condição de cima, aqui vamos lanchar no Mequi. 
    console.log("Vamos de MÉQUI? ")
            let mequi = prompt("Escolha uma opção S/N: ").toUpperCase();
            if(mequi === "S") {
                console.log("-------------------------------");
                lojaMequi(); // função LojaMequi :) 
            } else {
                console.log("Quem sabe na prosima vez!"); // caso eles não queiram ir pro Méqui, dei a opção de escolha.
            }
}



function lojaMequi() {
    console.log("Bem vindo ao\n  MEQUI")
    
        let continuarComprando = true;

        do {
            let meuMequi = prompt("Digite o nome do produto Mequi: ");
            let valor = Number.parseFloat(prompt("Informe o valor do produto: "));

            if (isNaN(valor) || valor <= 0) {
                console.log("Valor inválido. Digite um valor válido.\n");
                continue;
            }

            totalMequi += valor;
            console.log(`\nVocê acabou de comprar: ${meuMequi}`);
            console.log(`Seu total em compras é: ${moedaFormat(totalMequi)}`);
            console.log("--------------------------------\n");

            let comprarMaisMequi;
            do {
                comprarMaisMequi = prompt("Deseja Comprar mais? S/N: ").toUpperCase();
                if(comprarMaisMequi !== "N" && comprarMaisMequi !== "S") {
                    console.log("OPÇÃO INVÁLIDA\nDigite S ou N.");
                }
            } while(comprarMaisMequi !== "S" && comprarMaisMequi !== "N");

            if(comprarMaisMequi === "N") {
                continuarComprando = false;
            }
        
        } while (continuarComprando);

        console.log(`\nTotal do pedido Méqui: ${moedaFormat(totalMequi)}`);
    
    
        if(totalMequi > orcamentoMequi) {
            console.log(`Valor ultrapassou o orçamento\n`);
            console.log("Tente novamente.\n Reiniciando compra...");

        } else {
            console.log("COMPRA FINALIZADA!")
            console.log(`Seu total é de ${moedaFormat(totalMequi)}`);
            console.log("----------------------------\n\nVOLTE SEMPRE.\n")
        
        }
    }

// Essa função formata os valores em moedas do tipo real, igual vimos em aula.
function moedaFormat(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}


// ----------Main-------------

console.log("\n\n--------------------------------");
console.log("|           SHOPPING            |");
console.log("--------------------------------\n");

let totalCompras = 0.0;

const orcamentoMequi = 34 + 25 + 15 + 50; // A soma do orçamento dos amigos.
let totalMequi = 0.0;



menu();
