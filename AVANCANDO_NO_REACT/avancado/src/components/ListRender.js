import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Mari", "Arthur", "Pedro"]);

    const[users, setUsers] = useState([
        {id: 1, name: "Mari Miya", age: 11},
        {id: 2, name: "Hinsuki", age: 12},
        {id: 3, name: "Tadash", age: 12},
    ])

    const DeleteRandom = () => {
        const RandomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => RandomNumber !== user.id)
        })
    }

    return(
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}
                    </li>
                ))}
            </ul>
            <button onClick={DeleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender;