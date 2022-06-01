import { useState } from "react";
import { Create } from "./components/Create";
import { Listado } from "./components/Listado";
import { Search } from "./components/Search";

function App() {

  const [list, setList] = useState([]);


  return (
    <div>
      <div className="layout">
        {/*Cabecera*/}
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>

          <h1>MisPelis</h1>
        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
          <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
          </ul>
        </nav>

        {/*Contenido principal*/}
        <section id="content" className="content">
          {/*aqui van las peliculas*/}
          <Listado list={list} setList={setList}/>
        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
          <Search list={list} setList={setList} />
          <Create setList={setList}/>
        </aside>

        {/*Pie de página*/}
        <footer className="footer">
          &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
        </footer>

      </div>
    </div>
  );
}

export default App;
