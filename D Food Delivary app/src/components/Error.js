import React from 'react'
import { useRouteError } from 'react-router-dom';


const Error = () => {
    const err = useRouteError(); 
    console.log(err);
  return (
        <div className='error-page'>
            <img className='error-image' src={new URL("../../images/error.jpg", import.meta.url)} alt="Error Image" style={{width: "400px"}}/>
        
        <div className='error-content'>
        <h1>Oops!!!</h1>
        <h2>Something went wrong</h2>
        <h3>{err.status} : {err.statusText}</h3>
        </div>
    </div>
  )
};

export default Error;