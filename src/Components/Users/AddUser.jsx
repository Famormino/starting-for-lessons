import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";

const AddUser = () => {
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredUserAge, setEntederUserAge] = useState("");

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const userAgeChangeHandler = (event) => {
        setEntederUserAge(event.target.value)
    }
    const addUserHandle = (event) => {
        event.preventDefault();
        console.log(enteredUserName, enteredUserAge)
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandle}>
                <label htmlFor="userName">User</label>
                <input
                    id="userName"
                    type="text"
                    onChange={userNameChangeHandler}
                />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" onChange={userAgeChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
