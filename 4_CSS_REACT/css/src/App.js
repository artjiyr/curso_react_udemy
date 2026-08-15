import { useState }  from 'react';
import './App.css';

import CardPerson from './components/CardPerson';

function App() {

  const persons = [
    {id: 1, name: "Mari Miya", age: "10", type: "Raposa", newPerson: false},
    {id: 2, name: "Hinsuki Aikyo", age: "12", type: "Demônio", newPerson: false},
    {id: 3, name: "Tadash Aikyo", age: "12", type: "Lobo/Demônio", newPerson: false},
    {id: 4, name: "Arlo", age: "12", type: "Atúleo", newPerson: true},
    {id: 5, name: "Harry", age: "11", type: "Coelho", newPerson: true},
    {id: 6, name: "Kamal", age: "12", type: "Camaleão de Jack", newPerson: true},
  ]

  const n = 11;
  const [name] = useState("Mari");

  const pinkTitle = true

  return (
    <div className="App">
      <h1>Personagens de YamitoHikari</h1>
      <div className="cards">
        {persons.map((persona) => (
          <CardPerson
          key={persona.id}
          name={persona.name}
          age={persona.age}
          type={persona.type}
          newPerson={persona.newPerson}
          />
        ))}
      </div>
      <div>
        <h1>Continuando a Aula...</h1>
        <h1>CSS INLINE DINÂMICO!</h1>
        <p style={n < 10 ? 
          ({color:"green", textAlign: "center", background: "white"}) : ({color: "red", textAlign: "center", background: "white"})}>O número tem que ser menor que 10</p>
        <p style={n > 10 ? 
          ({color:"green", textAlign: "center", background: "white"}) : ({color: "red", textAlign: "center", background: "white"})}>O número tem que ser maior que 10</p>

          <p style={name === "Arthur" ? 
          ({color:"green", textAlign: "center", background: "white"}) : ({color: "red", textAlign: "center", background: "white"})}>Verificação de nome</p>
          <p style={name === "Mari" ? 
          ({color:"green", textAlign: "center", background: "white"}) : ({color: "red", textAlign: "center", background: "white"})}>Verificação de nome</p>
      </div>

      <div>
        <h2 className={pinkTitle ? "pink-title" : "normal-title"}>Este Título vai ter Classe dinâmica</h2>
      </div>
    </div>
  );
}

export default App;
