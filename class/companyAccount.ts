import { DioAccount } from "./dioAccount";

export class CompanyAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (value: number): void => {
        if (this.validateStatus()) {
            console.log("Você pegou um empréstimo de R$", value);
            this.deposit(value);
        }
    }
}