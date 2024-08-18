function countOccurrences(array) {
    const times = {};

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        
       
        if (times[item]) {
            times[item]++;
        } 
        else {
            times[item] = 1;
        }
    }

    return times;
}

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

console.log(countOccurrences(fruits));