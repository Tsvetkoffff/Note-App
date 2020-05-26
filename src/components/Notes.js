import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Notes = ({notes, onRemove}) => {

    console.log(notes)

    if(notes.length === 0) {
        return <div className="alert alert-secondary mt-4" role="alert">
            You have no notes yet. Add notes so you don’t forget anything!
        </div>
    }


    return (
        <TransitionGroup component='ul' className='list-group mt-4'>
            {notes.map(note => {
                console.log(note.date)
                return <CSSTransition key={note.id}
                               timeout={800}
                               classNames="note"
                >
                    <li className='list-group-item note'>
                        <div>
                            <strong> {note.title} </strong>
                            <small> {note.date} </small>
                        </div>
                        <button type="button"
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => onRemove(note.id)}
                        >&times;</button>
                    </li>
                </CSSTransition>})
            }
        </TransitionGroup>
    )
};

export default Notes;