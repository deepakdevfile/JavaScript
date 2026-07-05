let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

function groupById(users){
    // let usersById = {};
    // let n = users.length;
    // for(let i = 0; i < n; i++){
    //     let key = users[i].id;
    //     usersById[`${key}`] = users[i];
    // }
    // return usersById;

    return users.reduce((user, value) => {
        user[value.id] = value;
        return user;
    }, {});
}

let usersById = groupById(users);
console.log(usersById);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/