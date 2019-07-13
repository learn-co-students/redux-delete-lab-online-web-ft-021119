import React from 'react';
import Band from './Band'

  const Bands = (props) => {
    console.log(props)
    const bands = props.bands.map((band) => {
        return <Band key={band.id} band={band} deleteBand={props.deleteBand} />})


  return (
    <div>
      {bands}

    </div>
  )


}

export default Bands


     // Invariant Violation: Objects are not valid as a React child (found: object with keys {id, text}). If you meant to render a collection of children, use an array instead.
 // {homes.map(home => <div>{home.name}</div>)}
 //     id: Math.random()*10000000000000000,
