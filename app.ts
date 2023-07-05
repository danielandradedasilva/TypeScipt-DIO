import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { SpecialAccount } from "./class/SpecialAccount";


 // Criando instâncias para testes com contas ATIVAS
 
const peopleAccount: PeopleAccount = new PeopleAccount(1,'Daniel',1, true);

const inactivePeopleAccount: PeopleAccount = new PeopleAccount(2, 'Gustavo', 13, false);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 1, true);

const inactiveCompanyAccount: CompanyAccount = new CompanyAccount('OID', 83, false);

const specialAccount = new SpecialAccount('Conta Especial',1,true);

const inactivespecialAccount: SpecialAccount = new SpecialAccount('Conta Especial II', 40, false);

// Depósito

peopleAccount.deposit(300);
peopleAccount.getBalance();

console.log('-------------------------');

companyAccount.deposit(150.20);
companyAccount.getBalance();

console.log('-------------------------');

specialAccount.specialDeposit(102);
specialAccount.getBalance();

console.log('-------------------------');
// Saque

peopleAccount.withdraw(100);
peopleAccount.getBalance();

console.log('-------------------------');

companyAccount.withdraw(50)
peopleAccount.getBalance();

console.log('-------------------------');

specialAccount.withdraw(10);
specialAccount.getBalance();

console.log('-------------------------');
// Saque com resposta de falha

peopleAccount.withdraw(300);

console.log('-------------------------');
// Empréstimo

companyAccount.getLoan(550);
companyAccount.getBalance();

console.log('-------------------------');

// Conta inativas

inactivePeopleAccount.deposit(100);
inactiveCompanyAccount.deposit(50);
inactivespecialAccount.deposit(20);
