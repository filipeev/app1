"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var car1 = new Carro_1.default("mustang", 2);
var car2 = new Carro_1.default("camaro", 2);
var car3 = new Carro_1.default("jeta", 4);
var listCars = [car1, car2, car3];
var cons1 = new Concessionaria_1.default("Rua J.Kalar", listCars);
var cliente = new Pessoa_1.default('José', 'mustang', car2);
console.log("Cliente " + cliente.dizerNome() + " possui carro atual: " + cliente.dizerCarroQueTem().modelo);
console.log(cons1.mostrarListaDeCarros());
cons1.mostrarListaDeCarros().map(function (carro) {
    if (carro["modelo"] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarror(carro);
    }
});
console.log("Seu novo carro: " + cliente.dizerCarroQueTem().modelo);
//# sourceMappingURL=app2.js.map