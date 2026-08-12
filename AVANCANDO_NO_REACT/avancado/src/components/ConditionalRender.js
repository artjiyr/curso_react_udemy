import { useState } from "react";

const ConditionalRender = () => {
    const[x] = useState(true)

    const[name, setName] = useState("Mari")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p> Se X for true, sim</p>}
        <h1>If ternário</h1>
        {name === "Arthur" ? (
          <div>
            <p>O nome é Mari</p>
          </div>
        ):(
          <div>
            <p>Nome não encontrado!</p>
          </div>
        )}
        <div>
          <button onClick={() => setName("Arthur")}>Clique para achar o nome</button>
        </div>
    </div>

  )
}

export default ConditionalRender;