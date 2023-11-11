{
  // Static

  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  //  first memory allocation
  console.log(Counter.increment());

  //  different memory allocation
  console.log(Counter.increment());
  //
}
