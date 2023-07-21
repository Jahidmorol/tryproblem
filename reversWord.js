// reverse word in a string

// input 
const str = "I Love Bangladesh"

// output = "I evoLe hsedalgnaB"



const reverseWord = (data) => {

    const dataAsArray = data.split(" ")
    const result = dataAsArray.map(d => {
       return d.split("").reverse().join("")
    })

    return result.join(" "); 
}

console.log(reverseWord(str));