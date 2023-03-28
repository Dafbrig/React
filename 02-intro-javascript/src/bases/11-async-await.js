//const getImagenPromesa = () => {
//    return new Promise(resolve => resolve(''))
//}
//
//getImagenPromesa().then(console.log);

const getImagen = async() => {
    try{

    const apiKey = 'GRfMzdNbYypIhDVG4Youhr8Ra1radla0';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();

    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);

    console.log(url);

    }catch(error){
        //manejo error
        console.error(error.message);
    }
}

getImagen();
