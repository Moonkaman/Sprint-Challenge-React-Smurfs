import React from 'react'

const SmurfPage = props => {
  const smurfData = props.smurfs.find(smurf => String(smurf.id) === props.match.params.sId);
  if(smurfData === undefined) return <h1>Smurf not Found!</h1>
  return (
    <div>
      <div className="smurf-header">
        <h1>{smurfData.name}</h1>
      </div>
      <div className="smurf-info">
        <h3>Info about {smurfData.name}</h3>
        <p>Age: {smurfData.age} smurf years old</p>
        <p>Height: {smurfData.height}</p>
      </div>
    </div>
  )
}

export default SmurfPage
