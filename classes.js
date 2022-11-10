class Pet {
  // Properties and information about the object
  constructor(name, type, breed, tricks) {
    this.name = name;
    this.type = type;
    this.breed = breed;
    this.tricks = tricks;
  }

  // Behaviour and actions about the object (methods)
  showFirstTrick () {
    return `My first trick is ${this.tricks[0]}!!!!`;
  }
}

const dog = new Pet('Helper', 'Dog', 'pug', ['salute', 'sit']);

// console.log(dog.showFirstTrick());

class Cat extends Pet {
  constructor(name, type, breed, tricks, food){
    super(name, type, breed, tricks);
    this.food = food;
  }

  showFirstTrick() {
    return 'whatever i want!!!!';
  }
}

const cat = new Cat(
  'Tabby', 'Cat', 'Egyptian', ['knocking down things off the table!'], 'Treats'
);

console.log(cat.showFirstTrick());