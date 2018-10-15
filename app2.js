var Carro = /** @class */ (function () {
    function Carro(velocidade, modelo, portas) {
        this.velocidade = velocidade;
        this.modelo = modelo;
        this.portas = portas;
    }
    Carro.prototype.Acelerar = function () {
        this.velocidade += 10;
    };
    Carro.prototype.Frear = function () {
        this.velocidade -= 10;
    };
    Carro.prototype.Velocidade = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.forneceEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.montarListaDeCarros = function (carro) {
        var lista = this.listaDeCarros;
        carro.forEach(function (value) {
            console.log(value);
            lista.push(value);
        });
        return lista;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido, carro) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
        this.carro = carro;
    }
    Pessoa.prototype.dizerNome = function (nome) {
        this.nome = nome;
        return "ol\u00E1 " + this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function (carro) {
        this.carroPreferido = carro;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        return "carro: " + carro + " comprado";
    };
    return Pessoa;
}());
var car1 = new Carro(0, "Veloster", 2);
var car2 = new Carro(0, "Vectra", 4);
var car3 = new Carro(0, "Civic", 4);
var pessoa1 = new Pessoa("Filipe", car1, car2);
console.log(car1);
console.log(pessoa1.dizerNome("Filipe Vargas"));
pessoa1.dizerCarroPreferido(car3);
console.log("pessoa: " + pessoa1);
// car1.Acelerar();
// console.log(car1);
// car1.Acelerar();
// car1.Acelerar();
// console.log(car1);
// console.log(car1.Velocidade());
var concess = new Concessionaria("rua dos montes", ["Vectra", "Veloster", "Civic"]);
var listCar = new Array();
listCar.push(car1);
// console.log(listCar)
console.log(concess.montarListaDeCarros(listCar));
