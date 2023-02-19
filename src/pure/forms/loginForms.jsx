/**
 * Componente que va a contener un formulario para
 * autenticación de usuario.
 */
import React from 'react'

import React from 'react'

const loginForms = () => {
const initialCredentials =[
    {
        user:'',
        password:''
    }
];
const [credentials, setCredentials] = uCeState(initialCredentials);
  return (
    <div><h1>loginForms</h1></div>
  )
}

export default loginForms
