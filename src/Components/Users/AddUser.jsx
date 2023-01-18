import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";

const AddUser = () => {
    const addUserHandle = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandle}>
                <label htmlFor="userName">User</label>
                <input id="userName" type="text" />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
