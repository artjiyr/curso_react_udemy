import './App.css';

import CardPerson from './components/CardPerson';

const persons = [
  {id: 1, name: "Mari Miya", age: "10", type: "Raposa", newPerson: false},
  {id: 2, name: "Hinsuki Aikyo", age: "12", type: "Demônio", newPerson: false},
  {id: 3, name: "Tadash Aikyo", age: "12", type: "Lobo/Demônio", newPerson: false},
  {id: 4, name: "Arlo", age: "12", type: "Atúleo", newPerson: true},
  {id: 5, name: "Harry", age: "11", type: "Coelho", newPerson: true},
  {id: 6, name: "Kamal", age: "12", type: "Camaleão de Jack", newPerson: true},
]

function App() {
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
    </div>
  );
}

export default App;
