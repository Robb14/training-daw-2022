const assert = require('assert').strict;

function select(array, conditionCallback){
    let result = []

    for (let index = 0; index < array.length; index++){
        const element = array[index];
        if (conditionCallback(element)){
            result.push(element)
        }
        return result
    }
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

let pairs = (values) => values % 2 === 0;

// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])

// // mayores que 15
// assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// // menores de 10
// assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])