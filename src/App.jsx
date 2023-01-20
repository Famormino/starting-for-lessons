import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
    const [userList, setUserList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUserList((prevUserList) => {
            return [
                ...prevUserList,
                { name: uName, age: uAge, id: Math.random().toString() },
            ];
        });
    };

    const deleteHandler = (id) => {
        setUserList((prevState) => prevState.filter((item) => item.id !== id));
    };
    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            {userList.length !== 0 ? (
                <UserList users={userList} onDelete={deleteHandler} />
            ) : (
               <h1 style={{'color': 'red', textAlign: "center"}}> No hay usuarios cargados</h1>
            )}
        </div>
    );
}

export default App;
