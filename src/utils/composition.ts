const swimmer = {
  swim() {
    // @ts-ignore
    console.log(`${this.name} is a swimmer`);
  },
};

const runner = {
  run() {
    // @ts-ignore
    console.log(`${this.name} is a runner`);
  },
};

const human1 = {
  //  modal
  name: "Kartik",
  ...swimmer, // login
};

const human2 = {
  name: "Akansha",
  ...runner, // edit pic
};

const human3 = {
  name: "Dhruv",
};

export {};
