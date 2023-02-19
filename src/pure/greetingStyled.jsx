import React, { useState } from 'react'

const greetingStyled = (props) => {

    const loggedStyle = {
        color:'te',
    };

    const unLoggedStyle = {
        color:'bg-red-600',
    }

    const geetingUser =()=> (<p>Hola, {props.name}</p>);
    const pleaseLogin =()=> (<p> please login</p>);
     // generamos un estado pra el componente
    // y asi controlar si el usuario esta o no logueado
    const [logged, setLogged] = useState(false);

  return ( 
    <div className={ logged ? 'text-blue-600' : 'text-red-600' } >
        {
            logged ? geetingUser()
            :pleaseLogin()          
        }
<div>
        
        <button onClick={()=>{
            console.log('pulsado')
            setLogged(!logged);
        }}>
            {logged? 'Logou': 'login'} 
        </button>    </div>

    </div>

  )
}

export default greetingStyled