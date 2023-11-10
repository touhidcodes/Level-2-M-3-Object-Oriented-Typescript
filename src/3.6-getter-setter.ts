{
  // Getter and Setter
  class BankAccount {
    readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    //  getter
    get balance() {
      return this._balance;
    }

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  const bankAccount1 = new BankAccount(111, "Mr. Banker", 200);

  const myBalance = bankAccount1.balance; // function use as property by get

  bankAccount1.deposit = 100; // add balance function by a variable by set
  //
}
