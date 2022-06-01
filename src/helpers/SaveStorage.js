export const SaveStorage = (clave,elemento ) => {

    //conseguir elementos del local sotrage
    let items = JSON.parse(localStorage.getItem(clave));
    
    
    //COmprobar si es un array
    if(Array.isArray(items)){
        //Guardar dentro del array un elemento nuevo
        items.push(elemento);
    }else{
        //Crear un srray con la nueva elemento
        items = [elemento];
    }
    console.log(items)
    //Guardar en el local storage 
    localStorage.setItem(clave, JSON.stringify(items));
    //Devolver Objeto
    return elemento;
    
}
