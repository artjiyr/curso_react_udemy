import './App.css';

import { useState, useEffect} from "react";

const url = "http://localhost:3000/musics";

function App() {
  const [name, setName] = useState("");
  const [autor, setAutor] = useState("");

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

  // 2 - add musics

  const handleSubmit = async (e) => {
    e.preventDefault()

    const music = {
      name,
      autor,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(music)
    });

    // 3 - Carregamento dinâmico
    const addedMusic = await res.json();

    setMusics((prevMusics) => [...prevMusics, addedMusic]);

    setName("");
    setAutor("");
  } 

  return (
    <div className="App">
      <h1>Lista de músicas</h1>
      <ul className="ContainerMusic">
        {musics.map((music) => (
          <li className="card" key={music.id}><h3>{music.name} - {music.autor}</h3></li>
        ))}
      </ul>

      <div className="Add-Music">
        <form onSubmit={handleSubmit}>
          <label>
          Música: 
          <input type="text" 
          value={name} 
          name="name"
          required
          onChange={(e) => 
          setName(e.target.value)}></input>  
          </label>
          <label>
          Autor:  
          <input type="text" 
          value={autor} 
          name="autor"
          required 
          onChange={(e) => 
          setAutor(e.target.value)}></input>  
          </label>
          <input type="submit" value="Adicionar" className="button-add"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
