
let lenguajes =  ['Node', 'React', 'Java', 'Python', 'Ruby on Rails'];

// sin callback
function mostrarLenguajes() {
    setTimeout(() => {
        lenguajes.map( item => console.log(item));        
    }, 5000);
}

//mostrarLenguajes();


// con callback
function agregarLenguaje(lenguaje, callback){ 

    setTimeout(() => {
        lenguajes.push(lenguaje);
        callback();
        
    }, 2000);
}

//agregarLenguaje('Angular', mostrarLenguajes);


//Ejercicio callback

const array = [];

function probandoCallback() {
    for (let i = 0; i < 5; i++) {       
        pushArray(i, iterarArray);
    }    
}

function pushArray(elem, callback) {
    array.push(elem);  
    console.log('Longitud: ', array.length);
    callback();    
}

function iterarArray() {
    array.map(elem => console.log(elem));    
}

probandoCallback();
