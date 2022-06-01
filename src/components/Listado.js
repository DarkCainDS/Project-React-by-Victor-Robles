import React, { useEffect, useState } from 'react'
import { Edit} from './Edit';

export const Listado = ({list, setList}) => {

    // const [list, setList] = useState([]);

    const [edit,setEdit] = useState(0);

    useEffect(() => {
        console.log("Componentes del lstado de peliculas cargado");
        getMovies();
    }, []);



    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem("movies"));

        setList(movies);
        console.log(movies);
        return movies;
    }

    const borrarPeli = (id) => {
        //conseguir peliculas almacenada
        let pelis_almacenadas = getMovies();
        //filtrar esas peliculas para que elimine del arrayla que no quiero
        let nuevo_array_pelis = pelis_almacenadas.filter(movies => movies.id !== parseInt(id));
        console.log(pelis_almacenadas,nuevo_array_pelis);
        //acutalizar estado del listado
        setList(nuevo_array_pelis);
        //actualizar los datos en el localstorage
        localStorage.setItem('movies', JSON.stringify(nuevo_array_pelis));
    }

    return (
        <div>
            <section id="content" className="content">

                {/*aqui van las peliculas*/}
                {list != null ? 
                list.map(movies => {
                    return (<article key={movies.id} className="peli-item">
                        <h3 className="title">{movies.title}</h3>
                        <p className="description">{movies.description}</p>

                        <button className="edit" onClick={() => {setEdit(movies.id)}}>Editar</button>
                        <button className="delete" onClick={() => borrarPeli(movies.id)}>Borrar</button>

                        {/*aparece formulario de editar*/}
                        {edit === movies.id && (
                            <Edit movie={movies}
                            getMovies = {getMovies}
                            setEdit = {setEdit}
                            setList = {setList}
                            />
                        )}
                    </article>)
                })
                : <h2>Nohay peliculas para mostrar</h2>
            };

                {
                /*<article className="peli-item">
                    <h3 className="title">Desarrollo web</h3>
                    <p className="description">victorroblesweb.es</p>

                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </article>

                <article className="peli-item">
                    <h3 className="title">Desarrollo web</h3>
                    <p className="description">victorroblesweb.es</p>

                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </article>

                <article className="peli-item">
                    <h3 className="title">Desarrollo web</h3>
                    <p className="description">victorroblesweb.es</p>

                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </article>*/}

            </section>
        </div>
    )
}
