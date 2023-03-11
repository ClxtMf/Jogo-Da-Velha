let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let mensagemContainer = document.querySelector('#mensagem');
let textoMensagem = document.querySelector('#mensagem p');
let jogador2;


// Contador de jogadas
let player1 = 0;
let player2 = 0;

// Percorrendo os botões
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        // Armazenando o id do botão em jogador2
        jogador2 = buttons[i].getAttribute("id");
        // Removendo os botões do display
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }

        // Exibindo o jogo da velha na tela
        setTimeout(function () {
            // Pegando o container
            let container = document.querySelector('#container');
            container.classList.remove('hide');
        }, 500);
    });
}





// Adicionando o evento a caixa
for (let i = 0; i < boxes.length; i++) {

    // Adicionando evento de click
    boxes[i].addEventListener("click", function () {

        let elemento = definirElemento(player1, player2);

        if (boxes[i].childNodes.length == 0) {
            let cloneElemento = elemento.cloneNode(true);
            boxes[i].appendChild(cloneElemento);

            if (player1 == player2) {
                player1++;
                
                // Se o jogador2 for ia-player 
                // a jogada será feita na função 
                if (jogador2 == 'ia-player') {
                    jogadaMaquina();
                    player2++;
                }
            }
            else {
                player2++;
            }

            // Verificando a condição vitória
            condicaoDeVitoria();
        }


    });
}

// Definindo o elemento que será inserido
function definirElemento(player1, player2) {
    if (player1 == player2) {
        return x;
    }
    else {
        return o;
    }
}


function condicaoDeVitoria() {
    // Pegando todas as divs do jogo da velha 
    let b1 = document.querySelector("#block-1");
    let b2 = document.querySelector("#block-2");
    let b3 = document.querySelector("#block-3");
    let b4 = document.querySelector("#block-4");
    let b5 = document.querySelector("#block-5");
    let b6 = document.querySelector("#block-6");
    let b7 = document.querySelector("#block-7");
    let b8 = document.querySelector("#block-8");
    let b9 = document.querySelector("#block-9");

    // Verificando se os blocks 1, 2 e 3 possuem childNodes
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        // Pegando o valor da class dos filhos de b1, b2 e b3
        // Essas variáveis possuem uma string ('x' ou 'o')
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        // Verificando se a linha tem 3 x ou 3 o.
        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            declararVencedor('x');
        }
        else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declararVencedor('o');
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        // Pegando o valor da class dos filhos de b4, b5 e b6
        // Essas variáveis possuem uma string ('x' ou 'o')
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        // Verificando se a linha tem 3 x ou 3 o.
        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declararVencedor('x');
        }
        else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declararVencedor('o');
        }
    }


    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        // Pegando o valor da class dos filhos de b7, b8 e b9
        // Essas variáveis possuem uma string ('x' ou 'o')
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        // Verificando se a linha tem 3 x ou 3 o.
        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declararVencedor('x');
        }
        else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declararVencedor('o');
        }
    }

    // Condições da vertical
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        // Pegando o valor da class dos filhos de b1, b4 e b7
        // Essas variáveis possuem uma string ('x' ou 'o')
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        // Verificando se a linha tem 3 x ou 3 o.
        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declararVencedor('x');
        }
        else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declararVencedor('o');
        }
    }

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        // Pegando o valor da class dos filhos de b2, b5 e b8
        // Essas variáveis possuem uma string ('x' ou 'o')
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        // Verificando se a linha tem 3 x ou 3 o.
        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declararVencedor('x');
        }
        else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declararVencedor('o');
        }
    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        // Pegando o valor da class dos filhos de b3, b6 e b9
        // Essas variáveis possuem uma string ('x' ou 'o')
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        // Verificando se a linha tem 3 x ou 3 o.
        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declararVencedor('x');
        }
        else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declararVencedor('o');
        }
    }

    // Condições da diagonal
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        // Pegando o valor da class dos filhos de b1, b5 e b9
        // Essas variáveis possuem uma string ('x' ou 'o')
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        // Verificando se a linha tem 3 x ou 3 o.
        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declararVencedor('x');
        }
        else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declararVencedor('o');
        }
    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        // Pegando o valor da class dos filhos de b3, b5 e b7
        // Essas variáveis possuem uma string ('x' ou 'o')
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        // Verificando se a linha tem 3 x ou 3 o.
        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            declararVencedor('x');
        }
        else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declararVencedor('o');
        }
    }

    // deu velha
    let contador = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            contador++;
        }
    }

    if (contador == 9) {
        declararVencedor('empate');
    }

} // fim da função


function declararVencedor(vencedor) {
    // Pegando os spans com o placar de x e o
    let scoreBox_x = document.querySelector('#score-1');
    let scoreBox_O = document.querySelector('#score-2');
    let msg = '';

    // Verificando quem é o vencedor
    if (vencedor == 'x') {
        msg = 'O jogador 1 venceu';
        scoreBox_x.innerText = Number(scoreBox_x.innerText) + 1;
    }
    else if (vencedor == 'o') {
        msg = 'O jogador 2 venceu';
        scoreBox_O.innerText = Number(scoreBox_O.innerText) + 1;
    }
    else {
        msg = 'Empatou :(';
    }

    // Adicionando a mensagem no paragrafo
    textoMensagem.innerText = msg;
    // Removendo a class hide do container para o paragrafo ser exibido
    mensagemContainer.classList.remove('hide');

    // adicionando a class hide após um delay
    setTimeout(function () {
        mensagemContainer.classList.add('hide');
    }, 2000);

    // Zerando os contadores
    player1 = 0;
    player2 = 0;

    // Esvaziando o jogo da velha
    // Pegando todas as caixas preenchidas
    let caixasPreenchidas = document.querySelectorAll(".box div");
    // Percorrendo todas as caixas preenchidas 
    for (let i = 0; i < caixasPreenchidas.length; i++) {
        caixasPreenchidas[i].parentNode.removeChild(caixasPreenchidas[i]);
    }
}


function jogadaMaquina() {
    // Clonando o elemento que será inserido
    let clone = o.cloneNode(true);

    let contador = 0;
    let preenchidos = 0;

    for (let i = 0; i < boxes.length; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 5);
        if (boxes[i].childNodes[0] == undefined) {
            if (numeroAleatorio <= 1) {
                boxes[i].appendChild(clone);
                contador++;
                break;
            }
        } 
        else {
            preenchidos++;
        }
    }
    // Chamando a função de novo se as condições acima
    // não tiverem sido satisfeitas 
    if (contador == 0 && preenchidos < 9) {
        jogadaMaquina();
    }
    

}
