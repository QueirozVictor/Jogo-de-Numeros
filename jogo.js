
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativasRestantes = 10;

//Função Principal:

function verificarPalpite() {

    const palpite = Number(document.getElementById("palpite").value);
    const mensagem = document.getElementById("mensagem");
    const tentativas = document.getElementById("tentativas");

    if (tentativasRestantes > 0) {

        //Reduz as tentativas:
    tentativasRestantes--;
    tentativas.textContent = `Tentativas Restantes: ${tentativasRestantes}`;

    }

    //Verificações:

    if(palpite === numeroSecreto) {
        mensagem.textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto}!`;
    }

    else if (palpite > numeroSecreto) {
        mensagem.textContent = "O Numero é menor!";
    }
    
    else {

        mensagem.textContent = "O Numero é maior!";
    }

    document.getElementById("palpite").value = "";

}




/*
    Ao entrar na Pagina:
    1. Gerar um numero aleatorio
    2. Definir um numero maximo de tentativas
        2.1 Inicializar um contador de tentativas
    3. Obter o numero informado

    Ao clicar no botão "Chutar":
    1. Validar se o palpite é um número válido entre 1 e 100.
    2. Comparar o palpite com o número secreto e exibir uma mensagem:
        2.1 "Você acertou!" (e o jogo termina)
        2.2 "Talvez um pouco mais!" (e o jogo continua)
        2.3 "Talvez um pouco menos!" (e o jogo continua)
    3. Decrementar o numero de tentativas
    4. Exibir o numero de tentativas restantes
    5. Se o jogador atingir o número máximo de tentativas, o jogo termina com a mensagem "Você perdeu! O número secreto era X".
*/