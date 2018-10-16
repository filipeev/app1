import {DAOInterface} from "./DAOInterface"

class ConcessionariaDAO implements DAOInterface {
    
    nameTable: string = `TabelaPrincipal`

    Inserir(object: any): boolean{
        return true
    }
    Atualizar(object: any): boolean {
        return false
    }
    Remover(id: number): any {
        return ``
    }
    Selecionar(id: number): any {
        return ``
    }
    SelecionarTodos(): any[] {
        return []
    }
}