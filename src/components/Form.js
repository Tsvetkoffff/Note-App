import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/firebaseContext";

const Form = () => {

    const [value, setValue] = useState("");
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    const submitHandler = event => {
        event.preventDefault();
        if(value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('Note was created', 'success');
            }).catch(() => {
                alert.show('Something went wrong', 'danger');
            });
            setValue('')
        } else {
            alert.show('Please enter a note text')
        }


    };

    return (
        <form onSubmit={submitHandler}>
            <div className="input-group">
                <input type="text"
                       className="form-control"
                       placeholder="Enter new note"
                       aria-label="Enter new note"
                       value={value}
                       onChange={event => setValue(event.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary"
                            type="button"
                            onClick={submitHandler}
                    >Add note</button>
                </div>
            </div>
        </form>
    );
};

export default Form;

