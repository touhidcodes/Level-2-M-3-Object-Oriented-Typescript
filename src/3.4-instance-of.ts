{
  //  instanceof guard operator

  //  parent animal class
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      (this.name = name), (this.species = species);
    }
    makeSound() {
      console.log("I am making sound");
    }
  }

  //  child 1 class
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }

  //  child 2 class
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMew() {
      console.log("I am mewing");
    }
  }

  //  instanceof Dog class
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  //  instanceof Cat class
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Dog;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      // when isDog is true
      animal.makeBark();
    } else if (isCat(animal)) {
      // when isCat is true
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Doggu Vai", "German Shepard");
  const cat = new Cat("Cattu Vai", "persian");

  getAnimal(dog);
  //
}
