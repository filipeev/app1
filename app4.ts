import { DAO } from "./DAO"
import Concessionaria from "./concessionaria"
import Pessoa from "./pessoa" 

let concessionaria = new Concessionaria(`rua aimore 109`, [])
let pessoa = new Pessoa(`Filipe`, `camaro`, Object())

let daoC: DAO<Concessionaria> = new DAO<Concessionaria>()
let daoP: DAO<Pessoa> = new DAO<Pessoa>()

daoC.Inserir(concessionaria)

daoP.Inserir(pessoa)
