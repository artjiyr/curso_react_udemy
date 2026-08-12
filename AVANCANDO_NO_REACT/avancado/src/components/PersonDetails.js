const PersonDetails = ({ namePersona, age, color, newPerson }) => {
  return (
    <div className="cardPersonagem">
        <h2>Personagem YamitoHikari</h2>
        <ul>
            <li>Nome: {namePersona}</li>
            <li>Idade: {age}</li>
            <li>Cor favorita: {color}</li>
        </ul>
        {newPerson && <p><strong>Personagem novo!</strong></p>}
    </div>
  )
}

export default PersonDetails