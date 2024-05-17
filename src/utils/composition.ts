const swimmer={
    swim(){
        console.log(`{this.name} is a runner`);
    }
}

const runner={
    run(){
        console.log(`{this.name} is a runner`);
    }
}

const human1={
    name:"uday",
    ...runner,
    ...swimmer
}

human1.run();
human1.swim();
human1.name;

export {};