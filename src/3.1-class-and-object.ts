{
  // OPP Class

  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard", "dog", "Ghew Ghew");

  const cat = new Animal("Catesis", "cat", "Mew Mew");

  cat.makeSound();

  //  Parameter properties in typescript classes
  //  public modifier can set implicitly type and also initialize constructor in typescript
  class Animal2 {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
  }

  const dog2 = new Animal2("Germal Shepard", "dog", "Ghew Ghew");
  //
}
