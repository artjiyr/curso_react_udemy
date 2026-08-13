import "./App.css";
import meme from "./assets/img2.jpg";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ConditionalRender from "./components/ConditionalRender";
import ShowUsername from "./components/ShowUsername";
import { useState } from "react";
import PersonDetails from "./components/PersonDetails";
import Fragments from "./components/Fragments";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  const [userName] = useState("Mari Miya");

  const persons = [
    {id: 1, namePersona: "Peter", age: 10, color: "Preto", newPerson: true},
    {id: 2, namePersona: "Spy", age: 7, color: "Amarelo", newPerson: true},
    {id: 3, namePersona: "Haru", age: "Desconhecida", color: "Roxo", newPerson: false},
    {id: 4, namePersona: "Angel", age: "Desconhecida", color: "Branco", newPerson: false}
  ]

  function showMessage() {
    console.log("Mostrando mensagem")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

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
          key={person.id}
          namePersona={person.namePersona}
          age={person.age} 
          color={person.color} 
          newPerson={person.newPerson}/>
        ))}
      </div>
      <div> {/* Fragment */}
        <Fragments propFragment="teste"/>
      </div>
      <div> {/* PropChildren*/}
        <Container >
          <p>Esse é o conteúdo</p>
        </Container>
      </div>
      <div> {/*Executar ação*/}
        <ExecuteFunction myFunction={showMessage} />
      </div>
      <div> {/*State Lift*/}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
      </div>
    </div>
  );
}

export default App;
