{
  // Polymorphism
  // same structure in method but different in their function in child class

  class Person {
    getSleep() {
      console.log(" I am sleeping for 8 hr per day");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(" I am sleeping for 7 hr per day");
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(" I am sleeping for 6 hr per day");
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  //  Parent Class
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  //  Child Class --> same structure method but changes in return method
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  //  Child Class --> same structure method but changes in return method
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(30);
  const shape3 = new Rectangle(10, 20);

  getShapeArea(shape3);
  //
}
