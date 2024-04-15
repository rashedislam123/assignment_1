class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}


const account1 = new BankAccount(1001, "Rashed", 500);
const account2 = new BankAccount(1002, "Sohan", 1000);


console.log("Initial Account Info:");
account1.displayAccountInfo();
account2.displayAccountInfo();

console.log("\nDepositing to account1:");
account1.deposit(200);

console.log("\nWithdrawing from account2:");
account2.withdraw(300);

console.log("\nTrying to withdraw more than available balance from account2:");
account2.withdraw(800);

console.log("\nUpdated Account Info:");
account1.displayAccountInfo();
account2.displayAccountInfo();
