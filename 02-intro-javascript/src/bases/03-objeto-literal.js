const persona = {
    nombre: 'Tony',
    apellidos: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'new york',
        zip: 5553256,
        lat: 14.33232,
        lng: 34.92235514,
    }
};

//console.log( {persona} );

const persona2 = {...persona};
persona2.nombre = 'peter';

console.log( persona );
console.log(persona2);