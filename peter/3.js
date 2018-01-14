const sleep = number => {
  return new Promise((resolve, reject) => {
    if (!number || number == -1) reject();

    setTimeout(() => {
      resolve(number + 1);
    }, number * 1000);
  });
};

sleep(1).then(
  result => {
    sleep(result).then((result) => {
      sleep(result).then((result) => {
        console.log(result);
      });
    });
  },
  err => {
    console.log('You have got an error');
  }
);
