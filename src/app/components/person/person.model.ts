export interface Person {
    id?: number
    nome: string
    email: string
    idade: number | null
    cpf: string
}

export interface PersonsDto { pessoas:Person[]}