export const calculationPromise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    const complexCalc = 2 + 2;
    if (complexCalc == 5) {
      resolve(complexCalc);
    } else {
      reject("calculation failed and the expected result was not received");
    }
  }, 3000);
  console.log(3);
});
