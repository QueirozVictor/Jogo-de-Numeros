
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;

    let tentativasRestantes = 10;

    function verificarPalpite() {

        const palpite = Number(document.getElementById("palpite").value);
        const mensagem = document.getElementById("mensagem");
        const tentativas = document.getElementById("tentativas");

        if (tentativasRestantes > 0) {

        tentativasRestantes--;
        tentativas.textContent = `Tentativas Restantes: ${tentativasRestantes}`;

        }

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