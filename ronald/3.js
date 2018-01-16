const sleep = number => {
  return new Promise((resolve, reject) => {
    if (!number || number == -1) reject();

    setTimeout(() => {
      resolve(number + 1);
    }, number * 1000);
  });
};

const p1 = sleep(1);
const p2 = sleep(2);
const p3 = sleep(3);

Promise.all([p1, p2, p3]).then((values) => {
  for (let i = 0; i < values.length; i++){
    console.log(values[i]);
  }
})
