import { ChallengeAccount } from "./class/challengeAccount"
import { CompanyAccount } from "./class/companyAccount"
import { PeopleAccount } from "./class/peopleAcoount"

const peopleAccount: PeopleAccount = new PeopleAccount(65796640,"Thiago", 1)//Account("Thiago", 1)
peopleAccount.getInfo()
peopleAccount.deposit(20)
peopleAccount.withdraw(10)
peopleAccount.getInfo()

const companyAccount: CompanyAccount = new CompanyAccount("Dio", 21)
companyAccount.getInfo()
companyAccount.deposit(20)
companyAccount.withdraw(10)
companyAccount.getLoan(5)
companyAccount.getInfo()

const challengeAccount: ChallengeAccount = new ChallengeAccount("Teste", 22)
challengeAccount.getInfo()
challengeAccount.depositWithBonus(20)
challengeAccount.withdraw(35)
challengeAccount.getInfo()