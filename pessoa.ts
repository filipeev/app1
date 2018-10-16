import Carro from "./Carro"

export default class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome: string, carroPreferido: string, carro: Carro) {
        this.nome = nome
        this.carroPreferido = carroPreferido
        this.carro = carro
    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarror(carro: Carro): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): any {
        return this.carro
    }
}