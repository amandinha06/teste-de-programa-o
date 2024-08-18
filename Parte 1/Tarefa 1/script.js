function transformData (){
  return users 
  .filter(user => user.isActive === true)
  .map(user => ({ id: user.id, name: user.name }))
  .sort((a, b) => a.name.localeCompare(b.name));
}

const users = [
   { id: 1, name: 'Alice', age: 25, isActive: true },
   { id: 2, name: 'Bob', age: 30, isActive: false },
   { id: 3, name: 'Charlie', age: 22, isActive: true }
 ];

console.log(transformData(users));