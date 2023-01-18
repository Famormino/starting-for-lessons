import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";

const AddUser = () => {
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredUserAge, setEnteredUserAge] = useState("");

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    };

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    };
    const addUserHandle = (event) => {
        event.preventDefault();
        console.log(enteredUserName, enteredUserAge);
        setEnteredUserName("");
        setEnteredUserAge("");
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandle}>
                <label htmlFor="userName">User</label>
                <input
                    id="userName"
                    type="text"
                    onChange={userNameChangeHandler}
                    value={enteredUserName}
                />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    onChange={userAgeChangeHandler}
                    value={enteredUserAge}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
