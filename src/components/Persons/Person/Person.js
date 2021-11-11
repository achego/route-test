import React from 'react'
import classes from './Person.css'

const Person = (props) => {

    return (
        <div className={classes.Person}>
            <p  
            onClick={props.onClick}>
                My name is {props.name} and im {props.age} years old
            </p>
            <p>{props.children}</p>
            <input 
            type='text' 
            defaultValue={props.name}
            onChange = {props.onChange}
            />
            
        </div>
    );
}

export default Person
