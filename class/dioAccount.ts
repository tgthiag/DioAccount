export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    public setName = (name: string): void =>{
        this.name = name
        console.log("Nome alterado com sucesso")
    }

    deposit = (): void => {
        if (this.validateStatus()) {
            console.log("Você depositou")
        }
    }
    withdraw = (): void => {
        console.log("Você sacou")
    }
    getBalance = (): void => {
        console.log(this.balance)
    }

    getName = ():string => {
        return this.name
    }

    private validateStatus = () =>{
        if (this.status){
            return this.status
        }
        throw new Error('Conta inválida')
    }
}