import {useState} from "react";

const ManageData = () => {
  let someData = 17;

  const [number, setNumber] = useState(18);

  return (
    <div>
      <div>
          <p>Valor: {someData}</p>
          <button onClick={() => 
          (someData = 18)
          }>Clique aqui!</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(20)}>Mudar o State</button>
      </div>
    </div>
  );
};

export default ManageData