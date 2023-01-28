
import Forn from "./Forn"
import "./App.css"

const movies = [
  {
    name: "El hombre araña",
    available: 5,
    url:"https://es.web.img2.acsta.net/pictures/21/12/01/12/07/0243323.jpg"
  },
  
  {
    name: "terminator",
    available: 3,
    url:"https://i.pinimg.com/originals/ca/ec/e5/caece59e6169ba7da13c02333f6ffc03.jpg"
  }
];

export default function App() {
  return (
    <div>
      <h2 className="titulo">Peliculas</h2>
      <p className="titulo">Mejores peliculas del año 2023</p>
      {movies.map((movie) => (
        <Forn movie= {movie}/>
        
       
      ))}
    </div>
  );
}
