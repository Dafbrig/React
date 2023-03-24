//Desestructuracion de arreglos

const personajes = ['CJ', 'Bob', 'Naruto'];

//console.log(personajes[0]);

const [ ,p2, ] =  personajes;

console.log(p2);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. El primer valor del arr se llamara nombre
//2. se llamara setNombre
const use_State = (valor) => {
    return [valor, () => {console.log('hola mundo')}];
}

const [nombre, setNombre] = use_State('CJ');

console.log(nombre);
setNombre();