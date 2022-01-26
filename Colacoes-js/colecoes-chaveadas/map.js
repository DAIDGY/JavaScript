function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}
const usuarios= new Map();

usuarios.set('Daidgy', 'Admin');
usuarios.set('Ruth', 'Admin');
usuarios.set('Esther', 'User');
usuarios.set('Ana', 'Admin');

console.log(getAdmins(usuarios));
