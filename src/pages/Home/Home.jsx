import React from 'react'
import {useNavigte} from 'react-router-dom';
function Home(props) {
    const navigate=useNavigte();
    const handleLogin=()=>{
        props.toggleLoggenIn();
        navigate('/profile');
    }
  return (
    <div><h1>this is the home page
        </h1>
        <button onClick={handleLogin}>Login</button></div>
  )
}

export default Home