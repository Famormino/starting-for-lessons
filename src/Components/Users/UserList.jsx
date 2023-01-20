import React from "react";
import Card from "../UI/Card";
import UserItem from "./UserItem";

import classes from "./UserList.module.css";

const UserList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <UserItem key={user.id} name={user.name} age={user.age} id={user.id} onDelete={props.onDelete}/>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;
