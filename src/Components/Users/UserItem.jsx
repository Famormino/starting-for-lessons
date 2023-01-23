import React from "react";

const UserItem = (props) => {
    
    const deleteHandler = () => {
        props.onDelete(props.id);
    };
    return (
        <li onClick={deleteHandler}>
            El usuario <b>{props.name}</b> tiene {props.age} Años
        </li>
    );
};

export default UserItem;
