import React from 'react';
import Card from '../UI/Card';

import classes from "./AddUser.module.css";

const AddUser = () => {

    const addUserHandle = (event) => {
        event.preventDefault()
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandle}>
                <label htmlFor="userName">User</label>
                <input id="userName" type="text" />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" />
                <button type='submit'>Add User</button>
            </form>
        </Card>
    )
}

export default AddUser;