import React from "react";
import classes from './Cockpit.css'
import { useEffect, useRef } from "react";

const Cockpit = (props) => {

    const btnRef = useRef(null);
    

    useEffect(() => {
        console.log('In useEffect method')
        btnRef.current.click()  
    },
    []);

    console.log('Did this first')
    let p_clases = []
    let btn_classes = [classes.Button]
    
    if (props.state.persons.length < 4) {
      p_clases.push(classes.red)
      if (props.state.persons.length < 3) {
        p_clases.push(classes.bold)
      }
      p_clases = p_clases.join(' ')
    }

    if (props.state.showPersons){
        btn_classes.push(classes.red)
        btn_classes = btn_classes.join(' ')    
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={p_clases}>Wow, its really working !!</p>
            <button 
            ref={btnRef}
            className={btn_classes}
            onClick={() => props.onClick()}>
                {props.state.showPersons?'Hide':'Show'} Persons
            </button>
        </div>

    );
}


export default Cockpit