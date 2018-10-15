class Carro {
    private velocidade : number
    private modelo : string
    private portas : number

    constructor(velocidade: number, modelo:string, portas:number) {
        this.velocidade = velocidade
        this.modelo = modelo
        this.portas = portas
    }

    public Acelerar(): void {
        this.velocidade += 10
    }

    public Frear(): void {
        this.velocidade -= 10
    }

    public Velocidade(): number {
        return this.velocidade
    }
}

class Concessionaria {
    private endereco : string
    private listaDeCarros : any

    constructor(endereco : string, listaDeCarros : any) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public forneceEndereco(): string {
        return this.endereco
    }

    public montarListaDeCarros(carro: Array<Carro>): any{
        let lista = this.listaDeCarros
        carro.forEach(function(value) {
            console.log(value)
            lista.push(value)
        })
        
        return lista
    }

}

class Pessoa {
    private nome: string
    private carroPreferido: Carro
    private carro: Carro

    constructor(nome:string, carroPreferido: Carro, carro: Carro) {
        this.nome = nome
        this.carroPreferido = carroPreferido
        this.carro = carro
    }

    public dizerNome(nome:string): string {
        this.nome = nome
        return `olá ` + this.nome
    }

    public dizerCarroPreferido(carro:Carro): void{
        this.carroPreferido = carro
    }

    public comprarCarro(carro:string): string{
        
        return `carro: ` + carro + ` comprado`
    }
}

let car1 = new Carro(0, `Veloster`, 2)
let car2 = new Carro(0, `Vectra`, 4)
let car3 = new Carro(0, `Civic`, 4)
let pessoa1 = new Pessoa(`Filipe`, car1, car2)
console.log(car1)
console.log(pessoa1.dizerNome(`Filipe Vargas`))
pessoa1.dizerCarroPreferido(car3)
console.log(`pessoa: ` + pessoa1)
// car1.Acelerar();
// console.log(car1);
// car1.Acelerar();
// car1.Acelerar();
// console.log(car1);
// console.log(car1.Velocidade());

let concess = new Concessionaria(`rua dos montes`, [`Vectra`,`Veloster`,`Civic`])
let listCar : Array<Carro> = new Array<Carro>()
listCar.push(car1)
// console.log(listCar)
console.log(concess.montarListaDeCarros(listCar));