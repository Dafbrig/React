
//Fuciones en JS

//const saludar = function saludar(nombre){
//    return `hola, ${nombre}`;
//}

const saludar2 = (nombre) => {
    return `hola, ${nombre}`;
}

const saludar3 = (nombre) => `hola, ${nombre}`;

const saludar4 = () => `hola mundo`;

//saludar = 30; 
//console.log(saludar('David'));

//console.log(saludar);
console.log(saludar2 ('Gente'));
console.log(saludar3 ('Cosa'));
console.log(saludar4 ());

//const getUser = () =>{
//    return {
//        id: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//        username: 'Dango_de_dangos'
//    }
// }

const getUser = () => ({ id: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', username: 'Dango_de_dangos' })
const user = getUser();

console.log(user);


function getUserActivo(nombre){
    return {
        uid: '1234567890',
        username: nombre
    }
};

const userActivo = getUserActivo('Dante');
console.log(userActivo);


//Tarea
//1. Trasformar a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. pruebas

const flecha = (nombre) => ({ uid: '123567890', username: nombre});
const flechaData = flecha('Daniel');

console.log (flechaData);




