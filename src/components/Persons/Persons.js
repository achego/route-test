import Person from "./Person/Person";
import React from "react";

const Persons = (props) => {
    return (
        props.items.map((person, index) => 
      <Person
        key={person.id}
       name={person.name}
        age={person.age}
        onClick={() => props.onClick(index)}
        onChange={(event) => props.onChange(event, person.id)}
      />)
    );
}

export default Persons