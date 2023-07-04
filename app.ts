import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { SpecialAccount } from "./class/SpecialAccount";


 
const peopleAccount: PeopleAccount = new PeopleAccount(1,'Daniel',10,true);

//console.log(peopleAccount.getBalance())
//peopleAccount.deposit(250)
//console.log(peopleAccount.getBalance())

//peopleAccount.withdraw(260);

//const companyAccount = new CompanyAccount('DIO',10,false);

const special = new SpecialAccount('Conta Especial',1,true);

special.getBalance();
special.specialDeposit(100);
special.getBalance();

special.specialDeposit(100);
special.getBalance();

special.withdraw(100);
special.getBalance();

special.withdraw(121);
