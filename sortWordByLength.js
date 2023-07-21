// sorting word by length in a sentence by asc order

// input
const str = "Java is a Programming language";

// output = "a is Java language programming"

const sortWords = (data) => {
    const dataAsArray = data.split(" ");

    dataAsArray.sort((a, b) => {
        return a.length - b.length;
    })
    
    return dataAsArray.join(" ");
};

console.log(sortWords(str));
