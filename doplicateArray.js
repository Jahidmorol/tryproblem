// count duplicate element in an array

// input 
const fruits = ['c', 'a', 'b', 'c', 'a', 'd', 'a'] 

// output {'a': 3, b: 1, c: 2, d: 1}


const countDuplicates = (data) => {
    const output = {};
    data.map(d => {
        // console.log('---------D',d);
        // console.log('-------Output',output);
        // console.log(output[d]);
        output[d] = (output[d] || 0) + 1;
    })

    return output;
}

console.log(countDuplicates(fruits));