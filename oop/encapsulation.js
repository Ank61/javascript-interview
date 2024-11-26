//EXAMPLE -1 
//Without Encapsulation
//Here’s an example where the internal state is not protected:

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance; // Anyone can directly access and modify balance
  }
}

// const account = new BankAccount("Alice", 1000);
// console.log(account.balance); // 1000
// account.balance = -500; // No validation!
// console.log(account.balance); // -500 (Invalid state!)
// //Here, anyone can set the balance to an invalid value, breaking the object’s state integrity.

//With Encapsulation
class BankAccount {
  constructor(owner, balance) {
    this._owner = owner; // Private field (convention: underscore prefix)
    this._balance = balance;
  }

  // Public method to get balance
  getBalance() {
    return this._balance;
  }

  // Public method to deposit money with validation
  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      console.log(`${amount} deposited successfully.`);
    } else {
      console.log("Deposit amount must be positive!");
    }
  }

  // Public method to withdraw money with validation
  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`${amount} withdrawn successfully.`);
    } else {
      console.log("Invalid withdrawal amount!");
    }
  }
}

// Usage
const account = new BankAccount("Alice", 1000);

console.log(account.getBalance()); // 1000
account.deposit(500); // 500 deposited successfully.
console.log(account.getBalance()); // 1500
account.withdraw(2000); // Invalid withdrawal amount!
console.log(account.getBalance()); // 1500


//EXAMPLE - 2
// class BankAccount {
//     #balance; // Private field
  
//     constructor(owner, balance) {
//       this.owner = owner;
//       this.#balance = balance;
//     }
  
//     getBalance() {
//       return this.#balance;
//     }
  
//     deposit(amount) {
//       if (amount > 0) {
//         this.#balance += amount;
//         console.log(`${amount} deposited successfully.`);
//       } else {
//         console.log("Deposit amount must be positive!");
//       }
//     }
//   }
  
//   const account = new BankAccount("Alice", 1000);
//   console.log(account.getBalance()); // 1000
//   account.deposit(500); // 500 deposited successfully.
//   console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared
  
// class UserInformation {
//     constructor(name, email) {
//       this.name = name;
//       this.email = email;
//     }
  
//     fetchUserDetail() {
//       // Simulating fetching user details
//       return {
//         user_id: Math.floor(Math.random() * 1000), // Generating a random user ID
//         account_balance: 200000, // Fixed balance for simplicity
//         name: this.name,
//         email: this.email,
//       };
//     }
//   }
  
//   class PaymentPreprocessor extends UserInformation {
//     constructor(name, email) {
//       super(name, email); // Pass name and email to the parent class
//     }
  
//     processPayment() {
//       const userData = this.fetchUserDetail(); // Call parent class method
//       return { ...userData, paymentDetail: 'Completed' }; // Add payment detail
//     }
//   }
  
//   // Instantiate PaymentPreprocessor with valid arguments
//   const payment = new PaymentPreprocessor('John Doe', 'john.doe@example.com');
//   console.log(payment.processPayment());
  