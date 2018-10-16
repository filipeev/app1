import {DAOInterface} from "./DAOInterface"

export class DAO<T> implements DAOInterface<T>{
    nameTable: string = `tabelaPessoa`

    Inserir(object: T): boolean{
        console.log(object + ` inserido`)
        return true
    }
    Atualizar(object: T): boolean {
        return false
    }
    Remover(id: number): T {
        return Object()
    }
    Selecionar(id: number): T {
        return Object()
    }
    SelecionarTodos(): [T] {
        return [Object()]
    }
}
