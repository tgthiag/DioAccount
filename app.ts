import { CompanyAccount } from "./class/companyAccount"
import { PeopleAccount } from "./class/peopleAcoount"

const peopleAccount: PeopleAccount = new PeopleAccount(65796640,"Thiago", 1)//Account("Thiago", 1)
// console.log(peopleAccount.getName())
// peopleAccount.setName("bug bug")
// console.log(peopleAccount.getName())
// const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20)
// console.log(companyAccount)
// peopleAccount.deposit()
// companyAccount.deposit()
console.log(peopleAccount)
peopleAccount.deposit()
console.log(peopleAccount)