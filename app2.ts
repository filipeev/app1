import Carro from "./Carro"
import Pessoa from "./Pessoa"
import Concessionaria from "./Concessionaria"

let car1 = new Carro(`mustang`, 2)
let car2 = new Carro(`camaro`, 2)
let car3 = new Carro(`jeta`, 4)

let listCars: Carro[] = [car1, car2, car3]
let cons1 = new Concessionaria(`Rua J.Kalar`, listCars)

let cliente = new Pessoa('José', 'mustang', car2); 
console.log(`Cliente ` + cliente.dizerNome() + ` possui carro atual: ` + cliente.dizerCarroQueTem().modelo)
console.log(cons1.mostrarListaDeCarros())

cons1.mostrarListaDeCarros().map((carro: Carro) => {
    if (carro[`modelo`] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarror(carro)
    }
})

console.log(`Seu novo carro: ` + cliente.dizerCarroQueTem().modelo)