import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {

    constructor(name: string, accountNumber: number, status: boolean){
        super(name, accountNumber, status)
    }

    specialDeposit = (depositValue: number):void =>{
        if(this.validateStatus()){
            this.balance += (depositValue + 10);
            console.log(`Você depositou R$ ${depositValue}, e ganhou mais R$ 10 de bonus`);
        }else{
            this.validateStatus();
        }
    }
}