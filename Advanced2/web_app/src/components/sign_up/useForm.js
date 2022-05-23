import { useState, useEffect } from "react";
import time from "../chats/DataBase/Time";

const useForm = (callback, validate, userMessage) => {
  const [values, setValues] = useState({
      username: "",
      usernameN: "",
    email: "",
    password: "",
    password2: "",
    terms: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  var pasted = false

  const handleChange = e => {
    if (pasted) {
      pasted = false
      return
    }

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCheckBox = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: !values.terms,
    });
  }

  const deletePaste = e => {
    pasted = true
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  };

  useEffect(() => {
    if (Object.keys(errors).length == 0 && isSubmitting) {

      if(values.img == null) {
        let num = Math.floor(Math.random() * 8) + 1;
        values.img = "/avatars/avatar" + num + ".png"
      }

      userMessage.push({
          user: values.username,
        nickName : values.usernameN,
        contacts: [],
        img: values.img,
        lastSeen: time(),
      })


      callback();
    }
  }, [errors]);

  return {handleCheckBox, deletePaste, handleChange, handleSubmit, values, errors };
};

export default useForm;
