import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const BackDrop = (props) => (
    <div className={classes.backdrop} onClick={props.onConfirm} />
);

const Modal = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <main className={classes.content}>
                <div>{props.message}</div>
            </main>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <BackDrop onConfirm={props.onConfirm} />,
                document.getElementById("backdrop")
            )}
            {ReactDOM.createPortal(
                <Modal
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById("modal")
            )}
        </React.Fragment>
    );
};

export default ErrorModal;
