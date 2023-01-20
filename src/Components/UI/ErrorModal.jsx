import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
    return (
        <div className={classes.backdrop}>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <main className={classes.content}>
                    <div>{props.message}</div>
                </main>
                <footer className={classes.actions}>
                    <Button>Okay</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;
