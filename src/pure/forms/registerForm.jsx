import React from 'react'

const registerForm = () => {
    const initialData =[
        {
            user:'',
            name:'',
            password:'',
            email:''
        }
    ];
    const [data, setData] = uCeState(initialData);
 
  return (
    <div><h1>registerForm</h1></div>
  )
}

export default registerForm