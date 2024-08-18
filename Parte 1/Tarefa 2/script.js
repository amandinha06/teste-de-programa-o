async function fetchUserData(){

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await response.json();

    const filtroUsers = users.filter(user => user.username.startsWith('C'));

    return filtroUsers;
}

fetchUserData().then(filtroUsers => { console.log( filtroUsers)});