export interface DAOInterface<T>{
    nameTable: string

    Inserir(object: T): boolean
    Atualizar(object: T): boolean
    Remover(id: number): T
    Selecionar(id: number): T
    SelecionarTodos(): [T]
}   