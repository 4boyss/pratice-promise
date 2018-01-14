const sleep = (number) => {
   return new Promise((resolve, reject) => {

     if (!number || number == -1) reject()

     setTimeout(()=>{
       resolve(number+1);
     }, number*1000)
   })
}

sleep(1).then(
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log('You have got an error')
  }
).then(
  sleep(2).then(
    (result) => {
      console.log(result);
    },
    (err) => {
      console.log('You have got an error')
    }
  )
).then(
  sleep(3).then(
    (result) => {
      console.log(result);
    },
    (err) => {
      console.log('You have got an error')
    }
  )
)
