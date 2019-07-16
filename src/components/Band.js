import React from 'react';

const Band = props => {

    return(
      <div>
        <li key={props.band.id}><span>{props.band.bandName}</span><button onClick={() => props.delete(props.band.id)}>delete</button></li>
      </div>
    );
  
};

export default Band;
