import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
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
        if (
            enteredUserName.trim().length === 0 ||
            enteredUserAge.trim().length === 0 ||
            +enteredUserAge < 1
        ) {
            return;
        }
        props.onAddUser(enteredUserName, enteredUserAge);
        setEnteredUserName("");
        setEnteredUserAge("");
    };

    return (
        <>
            <ErrorModal
                title={"An error ocurred!"}
                message="Something went wrong!"
            />
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
        </>
    );
};

export default AddUser;
