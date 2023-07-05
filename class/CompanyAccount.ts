import { DioAccount } from "./DioAccount";


export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number, status: boolean){
    super(name, accountNumber, status)
    }

    getLoan = (withdrawValue: number):void =>{
        if(this.validateStatus()){
            this.balance += withdrawValue;
            console.log(`Emprestimo no valor de R$ ${withdrawValue}, realizado com sucesso!`)
        }else{
            this.validateStatus();
        }
    }

}

