/*
Build the array methods from scratch
*/

//reduce
const reduce = (array, callBackFn, initialValue) => {
  let output = initialValue ?? array[0]
  for (let i = initialValue ? 0 : 1; i < array.length; i++) {
    output = callBackFn(output, array[i])
  }
  return output
}

const callBackFn = (a, b) => a + b

const array = [1,2]

const initialValue = 2

console.log(reduce(array, callBackFn, initialValue))


//filter



//forEach



//map