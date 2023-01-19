import React from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
    return (
        <div>
            <AddUser />
            <UserList users={[]}/>
        </div>
    );
}

export default App;
