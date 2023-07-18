// count duplicate element in an array

// input 
const fruite = ['c', 'a', 'b', 'c', 'a', 'd', 'a'] 

// output {'a': 3, b: 1, c: 2, d: 1}




const countDuplicates = (data) => {
    let output = {};
    data.map(d => {
        output[d] = (output[d] || 0) + 1;
    })

    return output;
}

console.log(countDuplicates(fruite));