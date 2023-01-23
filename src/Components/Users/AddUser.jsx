import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredUserAge, setEnteredUserAge] = useState("");
    const [errorModal, setErrorModal] = useState();

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
            enteredUserAge.trim().length === 0
        ) {
            setErrorModal({
                title: "Ocurrió un error",
                message: "Complete el usuario y la edad para enviar",
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setErrorModal({
                title: "Ocurrió un error",
                message: "La edad no puede ser menor a 1",
            });
            return;
        }

        props.onAddUser(enteredUserName, enteredUserAge);
        setEnteredUserName("");
        setEnteredUserAge("");
    };

    const modalHandleChange = () => {
        setErrorModal(null);
    };

    return (
        <>
            {errorModal && (
                <ErrorModal
                    title={errorModal.title}
                    message={errorModal.message}
                    onConfirm={modalHandleChange}
                />
            )}
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
