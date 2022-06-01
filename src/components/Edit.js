import React, {useState} from 'react'

export const Edit = ({movie, getMovies, setEdit,setList}) => {
    const title_component = "Edit Movies";
    const SaveEdit = (e, id) => {
       e.preventDefault();
       //Conseguir el target del evento
       let target = e.target;

       //Buscar el indice del objeto de la pelicula a actualizar
       const get_movies = getMovies();
       const indice = get_movies.findIndex(movie => movie.id === id);
       console.log(get_movies,indice);

       //Crear objeto con ese id de ese indice, con titulo y decripcion del formulario
       let movie_refresh = {
           id,
           title: target.title.value,
           description: target.description.value,
       };
       //actualizar el elemetno con el indice
       get_movies[indice] = movie_refresh;

       //guardar el nuevo array del objeto en el localstorage
       localStorage.setItem("movies", JSON.stringify(get_movies));

       //actualizar state
       setList(get_movies);
       setEdit(0);
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{title_component}</h3>
        <form onSubmit={ e => SaveEdit(e,movie.id)}>
            <input 
            type="text" 
            name="title" 
            className='title_edit' 
            defaultValue={movie.title} />

            <textarea 
            name='description' 
            defaultValue={movie.description} 
            className="description_edit" />

            <input 
            type="submit" 
            className= "edit" 
            value ="refresh" />

        </form>
        </div>
  )
}
