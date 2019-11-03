var ePrimeiroNumero = document.getElementById("primeiroNumero");
var eSegundoNumero = document.getElementById("segundoNumero");
var eOperacao = document.getElementById("operacao");
var eResultado = document.getElementById("resultado");

function calcular() {
    var valorPrimeiroNumero = Number(ePrimeiroNumero.value);
    var valorSegundoNumero = Number(eSegundoNumero.value);
    var operacao = eOperacao.value;

    var resultado;

    switch (operacao) {
        case "soma":
            resultado = valorPrimeiroNumero + valorSegundoNumero;
            break;
        case "subtracao":
            resultado = valorPrimeiroNumero - valorSegundoNumero;
            break;
        case "multiplicacao":
            resultado = valorPrimeiroNumero * valorSegundoNumero;
            break;
        case "divisao":
            resultado = valorPrimeiroNumero / valorSegundoNumero;
            break;
    }

    eResultado.textContent = "Resultado: " + resultado;
}

class Usuario {
    constructor(nome, idade, senha, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.senha = senha;
        this.endereco = endereco;
    }

    logarNoSistema(senha) {
        if (this.senha == senha) {
            console.log("Você está logado");
        }
        else {
            console.log("Falha!");
        }
    }
}

class Endereco {
    constructor(rua, bairro, cidade) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }
}

var usuario1 = new Usuario("patricia", 19, 123456);

var enderecoDoTiago = new Endereco("rua 1", "bairro", "vila velha");

var usuario2 = new Usuario("tiago", 21, 123456, enderecoDoTiago);

console.log(usuario1);
console.log(usuario2.endereco.cidade);