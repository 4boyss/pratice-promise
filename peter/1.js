const sleep = (time) => {
    return new Promise((resolve, reject)=>{
        if(!time) reject()

        setTimeout(()=>{
            resolve(time +1)
        }, time*1000)
    })
}

sleep(1).then(
    (result) => console.log('result: ', result)
)
