{
  //  Access Modifiers
  //  private property are accessible only inside class as modifiers
  //  protected modifiers can use into child class
  //  naming convention of protected property add underscore (_)

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
    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    public getBalance() {
      return this._balance;
    }
  }

  class studentAccount extends BankAccount {
    test() {
      this._protectedBalance;
    }
  }

  const bankAccount1 = new BankAccount(111, "Mr. Banker", 200, 0);
  bankAccount1.addDeposit(200);
  //
}
