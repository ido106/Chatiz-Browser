import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';


const Form = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className='form-container center place-center'>
      
      <div className='form-content-left'>
        <img className='form-img' src='img/img-2.svg' alt='spaceship' />
      </div>
      {!isSubmitted ? (

        <FormSignup submitForm={submitForm} userMessage={props.userMessage} />
      ) : (
        <FormSuccess />
      )}
    </div>
    
  );
};

export default Form;