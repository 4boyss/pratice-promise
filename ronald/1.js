const sleep = number => {
  return new Promise((resolve, reject) => {
    if (!number || number == -1) reject();

    setTimeout(() => {
      resolve(number + 1);
    }, number * 1000);
  });
};

sleep(2).then(result => {
  console.log(result);
});
