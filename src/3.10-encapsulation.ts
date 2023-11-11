{
  //  Encapsulation
  //  encapsulated property is only available for child class
  class BankAccount {
    readonly id: number;
    public name: string;
    private _balance: number;
    protected _protectedBalance: number;
    constructor(
      id: number,
      name: string,
      _balance: number,
      _protectedBalance: number
    ) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
      this._protectedBalance = _protectedBalance;
    }
    protected addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    protected getBalance() {
      return this._balance;
    }
    getProtectedMethod() {
      return this.getBalance();
    }
  }

  class studentAccount extends BankAccount {
    test() {
      this._protectedBalance;
    }
  }
  //
}
