function mergeArrays(array1, array2) {
    const mergedObjects = {};

    for (const item of array1) {
        mergedObjects[item.id] = { ...item };
    }

    for (const item of array2) {
        if (mergedObjects[item.id]) {
            
            mergedObjects[item.id] = { ...mergedObjects[item.id], ...item };
        } else {
            
            mergedObjects[item.id] = { ...item };
        }
    }

    
    return Object.values(mergedObjects);
}
const array1 = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 }
];

const array2 = [
  { id: 1, age: 26, email: 'alice@example.com' },
  { id: 3, name: 'Charlie', age: 22 }
];

console.log(array1, array2);