{
  // OPP Inheritance

  //  parent class
  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep ${numOfHours}`);
    }
  }

  //  child class 1
  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Mr. Student", 24, "Uganda");

  //  child class 2
  class Teacher extends Parent {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass} class`);
    }
  }

  const teacher1 = new Teacher("Mr. Student", 40, "Uganda", "Professor");
  //
}
