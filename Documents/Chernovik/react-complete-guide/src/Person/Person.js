import React from 'react';
import './Person.css';
import Radium from 'radium';

function Person(props) {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>My name is {props.name}, age {props.age}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Radium(Person); 
