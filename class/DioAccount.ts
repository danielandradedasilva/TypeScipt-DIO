export abstract class DioAccount {

    private readonly name: string
    private readonly accountNumber: number
    protected balance: number = 0
    private status: boolean

    constructor(name: string, accountNumber: number, status: boolean){
        this.name = name
        this.accountNumber = accountNumber
        this.status = status
    }

    getName = ():string =>{
        return this.name;
    }

    deposit = (depositValue: number):void =>{
        if(this.validateStatus()){
            this.balance += depositValue;
            console.log(`Você depositou R$ ${depositValue}`);
        }
    }

    withdraw = (withdrawValue: number):void =>{
        if(withdrawValue < this.balance && this.validateStatus()){
            this.balance -= withdrawValue;
            console.log(`Voce sacou R$ ${withdrawValue}`);
        }else{
            console.log(`saque indisponivel de R$ ${withdrawValue}, seu saldo é: R$ ${this.balance}`);
        }
    }

    getBalance = ():void =>{
        if(!this.validateStatus()){
             this.validateStatus();
        }else{
            console.log(`Seu saldo atual é de R$ ${this.balance}`);
        }
    }

    protected validateStatus = ():boolean =>{
        if(this.status){
            return this.status;
        }
        throw new Error('Conta Inválida');
    }
}