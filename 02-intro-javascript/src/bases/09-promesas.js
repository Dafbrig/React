import { getHeroesById } from "./08-imports-exports";

//const promesa = new  Promise((resolve, reject) => {
//    setTimeout(() =>{ resolve()
//        //Tarea importar el 
//        const p1 = getHeroesById(2);
//        resolve(p1)
//    }, 2000)
//});

//promesa.then((heroe) => {
//    console.log('heroe', heroe)
//}).catch(err => console.warn(err));

const getHeroesByIdAsync = (id) => { return new  Promise((resolve, reject) => {
    setTimeout(() =>{ resolve()
        //Tarea importar el 
        const p1 = getHeroesById(2);
        resolve(p1)
        }, 2000)
    });
}

getHeroesByIdAsync(3).then(console.log).catch(console.warn())