import React from "react";
import {useState} from 'react';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [message, setMessage] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorName, setErrorName] = useState(null);

 function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
   
  const handleChangeEmail = event => {
    if (!isValidEmail(event.target.value)) {
      setErrorEmail('Email is invalid');
    } else {
      setErrorEmail(null);
    }

  };
  
  const handleChangeName = event => {
    if (event.target.value==='' || event.target.value===null  || event.target.value.length<=5) {
      setErrorName('Ingrese su nombre (con longitud mayor a 5)');
    } else {
      setErrorName(null);
    }

  };

  const  handleSubmit = event => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    console.log(name);

    if(errorName=== null && name.length>0 && errorEmail===null &&  email.length>0){
        setMessage( `Gracias  ${name}, te contactaremos cuando antes vía mail`)  ;       
    }else{
      setMessage('Por favor verifique su información nuevamente');
    }
  
  };



  return (
    <div className="content">
      <form  onSubmit={handleSubmit}>
            <input id="name" name="name" onChange={handleChangeName}/>
            <div className="text-danger">{errorName}</div> 
            <input id="email" name="email" onChange={handleChangeEmail}/>
            <div className="text-danger">{errorEmail}</div> 
            <button type="submit" >Enviar</button> 
      </form>
        <h3>{message}</h3>
    </div>
  );
};

export default Form;

/*
<div className="text-danger">{this.state.errors.email}</div>
*/