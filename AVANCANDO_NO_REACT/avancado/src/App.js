import "./App.css";
import meme from "./assets/img2.jpg";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ConditionalRender from "./components/ConditionalRender";
import ShowUsername from "./components/ShowUsername";
import { useState } from "react";
import PersonDetails from "./components/PersonDetails";

function App() {
  const [userName] = useState("Mari Miya");

  const persons = [
    {id: 1, namePersona: "Peter", age: 10, color: "Preto", newPerson: true},
    {id: 2, namePersona: "Spy", age: 7, color: "Preto", newPerson: true},
    {id: 3, namePersona: "Haru", age: "Desconhecida", color: "Roxo", newPerson: false},
    {id: 4, namePersona: "Angel", age: "Desconhecida", color: "Branco", newPerson: false}
  ]

  return (
    <div className="App">
      <h1>Avançando no React</h1>

      <div>
        <img src="/img1.jpg" alt="paisagem-anime" />
      </div>
      <div>
        <h2>Segue aii a piada que é a IA rsrs</h2>
        <img src={meme} alt="meme" />
      </div>
      <div>
        <ManageData />
        
      </div>
      <div>
        <ListRender />
      </div>
      <div>
        <ConditionalRender />
      </div>
      <div> {/* props */}
        <ShowUsername name={userName}/>
      </div>
      <div> {/* destructuring */}
        <PersonDetails namePersona="Hinsuki" age={12} color="Rosa"/>
      </div>
      <div> {/* Reaproveitando */}
        <PersonDetails namePersona="Mari Miya" age={11} color="Rosa" newPerson={false}/>
        <PersonDetails namePersona="Hinsuki Aikyo" age={12} color="Rosa" newPerson={false}/>
        <PersonDetails namePersona="Tadash Aikyo" age={12} color="Azul" newPerson={false}/>
        <PersonDetails namePersona="Harry Ashdwon" age={11} color="Amarelo" newPerson={true}/>
      </div>
      <div> {/*loop em Array em objetos*/}
        {persons.map((person) => (
          <PersonDetails
          namePersona={person.namePersona}
          age={person.age} 
          color={person.color} 
          newPerson={person.newPerson}/>
        ))}
      </div>
    </div>
  );
}

export default App;
