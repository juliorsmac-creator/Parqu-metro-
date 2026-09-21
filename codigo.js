class Parquimetro {
    constructor(valorcolocado) {
        this.valorcolocado = valorcolocado;
    }

    calcularTempo() {
        if (this.valorcolocado < 1) {
            return "Valor insuficiente " + "seu troco é de R$" + this.valorcolocado;
        } else if (this.valorcolocado < 1.75) {
            return "Sua permaência é de 30 minutos e seu troco é de R$ " + (this.valorcolocado - 1);
        } else if (this.valorcolocado < 3) {
            return "Sua permaência é de 60 minutos e seu troco é de R$ " + (this.valorcolocado - 1.75);
        } else {
            return "Sua permaência é de 120 minutos e seu troco é de R$ " + (this.valorcolocado - 3);
        }
    }
}

// 2. Pegando os elementos da página
const valorrecebido = document.getElementById("valor");
const botao = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

// 3. O que acontece quando clica no botão
botao.addEventListener("click", function () {
    const valornumerico = Number(valorrecebido.value);
    const meuParquimetro = new Parquimetro(valornumerico);
    resultado.textContent = meuParquimetro.calcularTempo();
});