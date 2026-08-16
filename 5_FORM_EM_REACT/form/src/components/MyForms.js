import { useState } from 'react'
import './MyForms.css'

const MyForms = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleChange = (e) => {
        setName(e.target.value)
    }

    console.log(name)

  return (
    <div>
        <form>
            <div>
                {/* 1- criação do forms */}
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                name="name" 
                placeholder="Digite o seu nome"
                onChange={handleChange}
                ></input>

                {/* 2- Label envolvendo o input */}
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="E-mail" placeholder="Digite o seu E-mail"></input>
                </label>
            </div>
            <input type="submit" value="Enviar"></input>
        </form>
    </div>
  )
}

export default MyForms