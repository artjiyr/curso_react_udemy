import './MyForms.css'

const MyForms = () => {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome"></input>
            </div>
            <input type="submit" value="Enviar"></input>
        </form>
    </div>
  )
}

export default MyForms