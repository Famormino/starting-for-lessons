import React from 'react'
import Card from '../UI/Card'

const AddUser = () => {

    const addUserHandle = (event) => {
        event.preventDefault()
    }

    return (
        <Card>
            <form onSubmit={addUserHandle}>
                <label htmlFor="userName">User</label>
                <input id="userName" type="text" />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" />
                <button type='submit'>Add</button>
            </form>
        </Card>
    )
}

export default AddUser;