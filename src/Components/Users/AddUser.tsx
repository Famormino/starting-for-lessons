import React from 'react'

const AddUser = (props) => {

    const addUserHandle = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={addUserHandle}>
            <label htmlFor="userName">User</label>
            <input id="userName" type="text" />
            <label htmlFor="age">Age</label>
            <input id="age" type="number" />
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddUser;