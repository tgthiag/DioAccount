import { DioAccount } from "./dioAccount";

// >> Criar um novo tipo de conta a partir da DioAccount
export class ChallengeAccount extends DioAccount{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    //Esta conta não deve receber novos atributos
    //Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)
    depositWithBonus = (value: number): void => {
        let valorExtra = 10;
        if (this.validateStatus()) {
            console.log("Você depositou R$", value);
            this.deposit(value + valorExtra);
        } else{
            console.log("Sua conta não está ativa")
        }
    };
}