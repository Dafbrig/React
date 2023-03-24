//Desestructuracion
//asignacion desestructurante

const persona = {
    nombre: 'Bruce',
    edad: 50,
    clave: 'hulk',
    //rango : 'batman'
}

//const { nombre, edad, clave } = persona;

//console.log(persona.nombre);
//console.log(nombre, edad, clave);

const use_Context = ({clave, nombre, edad, rango='cientifico'}) => {
    //console.log(nombre,edad, rango);
    return {
        nombreClave: clave,
        años: edad,
        rango,
        latng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {nombreClave, años, latng, rango} = use_Context(persona);

console.log(nombreClave, años, rango);
console.log(latng);