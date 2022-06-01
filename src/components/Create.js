import React, { useState } from 'react'
import { SaveStorage } from '../helpers/SaveStorage';

export const Create = ({setList}) => {

    const titleComponent = "Añadir pelicula";
    const [movie, setMovie] = useState({
        title: '',
        description: ''
    });

    const {title,description} = movie;

    const getFormValue = e => {

        e.preventDefault();

        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        //Crear objeto de la pelicula a guardar
        let movie = {
            id: new Date().getTime(),
            title,
            description,
        };

        //Guardar Estado
        setMovie(movie);
        console.log(movie);


        // Actualizar estado del listado principal
        setList(elementos => {
            return [...elementos, movie];
        });
        //Guardar en el Local storage
        SaveStorage("movies", movie);
       

    }

    return (
        <div>
            <div className="add">
                <h3 className="title">{title}</h3>

                <strong>
                     {(title && description) && "Has creado la pelicula" + " " +  movie.title}
                </strong>
               

                <form onSubmit={getFormValue}>

                    <input type="text" id="title" placeholder="Title" />
                    <textarea id="description" placeholder="Descripción"></textarea>
                    <input type="submit" id="save" value="Guardar" />

                </form>
            </div>
        </div>
    )
}
