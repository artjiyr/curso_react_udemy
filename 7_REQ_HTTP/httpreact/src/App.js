import './App.css';

import { useState, useEffect} from "react";

const url = "http://localhost:3000/musics";

function App() {
  const [musics, setMusics] = useState([])

  //1 - resgatando dados
  useEffect(() => {
    // Criamos a função assíncrona aqui dentro
    async function fetchMusics(){
      const res = await fetch(url);

      const data = await res.json();

      setMusics(data);
    };

    // Chamamos a função logo em seguida
    fetchMusics();
  }, []);

  return (
    <div className="App">
      <h1>Lista de músicas</h1>
      <ul className="ContainerMusic">
        {musics.map((music) => (
          <li className="card" key={music.name}><h3>{music.name} - {music.autor}</h3></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
