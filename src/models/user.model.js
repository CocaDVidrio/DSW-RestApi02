const {randomUUID} = require("node:crypto");

let users = [
    {id: randomUUID(), name: "Pedro", email: "pedroMor@gmail.com", age:21, active: true},
    {id: randomUUID(), name: "Cheetos", email: "cheetosGonza@gmail.com", age:44, active: true}
];
const regexName = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:\s[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;    
function findAll(){
    return users;
}
function findByID(id){
    return users.find(item => item.id === id) || null;
}
function addUser(item){

    if(regexName.test(item.name)) return false;
    if(item.age < 0 || typeof item.age == "number") return false;
    if(regexEmail.test(item.email)) return false;
    if(typeof item.active === "boolean")return false;

    const user = {id: randomUUID(), 
        nombre: item.name,
        age: item.age, 
        email: item.email, 
        active: true
    };                                                 
    users.push(user);
    return user;

}
function updateUser(id,data){
    const index = users.find(item => item.id === id);
    if(index === -1) return null;
    if(regexName.test(data.name)) return false;
    if(data.age < 0 || typeof data.age == "number") return false;
    if(regexEmail.test(data.email)) return false;
    if(typeof item.active === "boolean")return false;

    users[index] = {
        ...users[index], //destructor
        name: typeof data.name === undefined ? users[index].name : data.name, //condicion con if primitivo
        email: typeof data.email === undefined ? users[index].email : data.email,
        age: typeof data.age === undefined ? users[index].age : Number(data.age),
        active: typeof data.active === undefined ? users.active : Boolean(data.active)
    };
    return users[index];
}
module.exports = {findAll,updateUser,addUser, findByID};
