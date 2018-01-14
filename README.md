# pratice-promise
It is a practice for understanding how promise work

## Problem
Creating a promise function with `setTimeout(cb, interval)`, and make different magic with promise combination.


## Requirement 

#### 1- create promise function with `setTimeout(cb, interval)` called `sleep(number)`.

Example
```js
// sleep for number mi-second, and resolve value as number+1, 1 is 1second
const sleep = (number) => {
 ....
 setTimeout( ... )
 ...
}

sleep(2).then( //wait for 2second
   (result) => console.log(result) // result is 3
) 
```

#### 2- creating sequential promise, by wait for 1s, 2s and 3s sequentially. And showing result __*for each promise*__  is done.

#### 3- creating parallel promise, by wait for 1s, 2s and 3s sequentially. And showing result when __*all promise*__ is done.
