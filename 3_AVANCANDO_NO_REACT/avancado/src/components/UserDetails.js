const UserDetails = ({ name, age, profiler}) => {
  return (
    <div>
        <h2>Usuário</h2>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Profissão: {profiler}</li>
        </ul>
        {age >= 18 ? (<p>Pode tirar carteira de motorista</p>):(<p>Não pode tirar carteira de motorista</p>)}
    </div>
  )
}

export default UserDetails