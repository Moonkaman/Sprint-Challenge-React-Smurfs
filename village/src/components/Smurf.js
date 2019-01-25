import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {
  return (
    
      <div className="Smurf">
        <p className="delete-smurf" onClick={_ => props.removeSmurf(props.id)}>Delete</p>
        <Link className='card-link' to={`/smurfs/${props.id}`} >
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
        </Link>
      </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

