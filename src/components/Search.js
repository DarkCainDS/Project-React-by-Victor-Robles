import React, { useState } from 'react'

export const Search = ({list,setList}) => {

    const [search, setSearch] = useState('');
    const [notFound ,setNotFound] = useState(false);


    const lookMovie = (e) => {
        //Crear estado y actualizarlo
        setSearch(e.target.value);
        
        //listado completo de peliculas (cargado el list y setList)con el metodo
        //filtrar para buscar coincidencias
        let find_movies = list.filter(movie => {
            return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
        });


        //Comprobar si hay un resultado
        if(search.length <= 1 || find_movies <= 0){
            find_movies =JSON.parse(localStorage.getItem("movies"));
            setNotFound(true);
        }else{
            setNotFound(false);
        }
        console.log(find_movies);
        if(find_movies <= 0){

        }
        //actualizar estado del listado principal con lo que ha logrado filtrar
        setList(find_movies);
    }
    return (
        <div>
            <div className="search">
                <h3 className="title">Buscador: {search}</h3>
                {(notFound === true && search.length > 1) && (
                    <span className='notFound'>Ooppsss file not Found</span>
                )};
                
                <form>
                    <input type="text" 
                            id="search_field"
                            name="Search"
                            autoComplete='off'
                            value={search}
                            onChange={lookMovie} />
                    <button id="search">Buscar</button>
                </form>
            </div>
        </div>
    )
}
