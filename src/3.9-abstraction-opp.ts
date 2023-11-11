{
  // Abstraction
  //  abstract class gives an idea and real implementation works in child class
  // 1. interface
  // 2. abstract class

  //  abstraction by interface
  //  idea
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //  real implementation
  class Car implements Vehicle {
    startEngine(): void {
      console.log("Starting");
    }
    stopEngine(): void {
      console.log("Stopping");
    }
    move(): void {
      console.log("moving");
    }
    test() {
      console.log("testing");
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();

  //  abstraction by abstract class
  //  abstract class cannot create instance
  //  Leader Class (abstract)
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("testing");
    }
  }

  //  child class
  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("starting");
    }
    stopEngine(): void {
      console.log("stopping");
    }
    move(): void {
      console.log("moving");
    }
  }

  //
}
