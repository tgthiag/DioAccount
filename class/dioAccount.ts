export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = (value : number): void => {
        if (this.validateStatus()) {
            this.balance += value
            console.log("R$",value, " foram creditados na sua conta.")
        } else{
            console.log("Sua conta não está ativa")
        }
    }
    withdraw = (value: number): void => {
        if(this.validateStatus() && this.balance >= value){
            this.balance -= value
            console.log("Você sacou R$", value)
        }else if(this.balance < value){
            console.log("Você não possui saldo suficiente para o saque de R$", value)
        } else{
            console.log("Sua conta não está ativa")
        }
    } 
    getBalance = (): void => {
        console.log("Seu saldo bancário é de R$", this.balance)
    }

    getBalanceValue = (): number => {
        return this.balance
    }

    getName = ():string => {
        return this.name
    }

    getAccountNumber = ():number => {
        return this.accountNumber
    }

    protected validateStatus = () =>{
        if (this.status){
            return this.status
        }
        throw new Error('Conta inválida')
    }

    getInfo = (): void =>{
        console.log(`\nName ${this.getName()}, accountNumber: ${this.getAccountNumber()}, balance: ${this.getBalanceValue()}, status: ${this.validateStatus()}`);
    }
}