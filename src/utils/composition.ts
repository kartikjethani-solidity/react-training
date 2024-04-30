//drwaback of inheritence: sb children will have to inherit all the prop forcely

const swimmer = {
  swim() {
    console.log(`${this.name} is a swimmer`);
  },
};

const runner = {
  run() {
    console.log(`${this.name} is a runnner`);
  },
};

//below is the exmaple of composition, kamya composed the method of swim and run
const human1 = {
  name: "kamya",
  ...swimmer, //members ko spread kia h
  ...runner,
};

const human2 = {
  name: "shiavnsh",
  ...swimmer, //members ko spread kia h
};
const human3 = {
  name: "kartik",
};

human1.swim();

export {};
