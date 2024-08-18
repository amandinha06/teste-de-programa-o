function countOccurrences (array){
    const counter = {};

    for (let i = 0; i < array.length; i++){
        const element = array[i];

        if (counter[element]) {
            counter[element] ++;
        } 
        else {
            counter[element] = 1;
        }
    }
    return counter;
}
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
console.log(countOccurrences(fruits));