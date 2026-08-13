import '../styles/CardPerson.css';

const CardPerson = ({ name, age, type, newPerson }) => {
  return (
    <div className="Container">
        <ul>
            <li>
                <h2>Nome: {name}</h2>
            </li>
            <li>
                <h2>Idade: {age} anos</h2>
            </li>
            <li>
                <h2>Tipo: {type}</h2>
            </li>
        </ul>
        {newPerson && <p>Novo Personagem!</p>}
    </div>
  )
}

export default CardPerson