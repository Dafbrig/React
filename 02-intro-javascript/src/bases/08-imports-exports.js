import {heroes} from './data/heroes';

//const getHeroesById = (id) => {
    // eslint-disable-next-line array-callback-return
    //return heroes.find( (heroe) => {
       // if(heroe.id === id){
          //  return true;
        //}else{
      //      return false;
    //    }
  //  });
//}

export const getHeroesById = (id) => {
    // eslint-disable-next-line array-callback-return, no-unused-expressions
    return heroes.find( (heroe) =>  heroe.id === id );
}

//console.log(getHeroesById(2));

//find?, filter 
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroesByOwner('DC'));