import { useState, useEffect } from "react";

const useForm = (callback, validate, userMessage ) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  };

  useEffect(() => {
    if (Object.keys(errors).length == 0 && isSubmitting) {


      var date = new Date();
      let min = date.getMinutes().toString();
      let hours = date.getHours().toString();
      if(date.getHours() < 10) {
          hours = "0" + hours;
      }

      if(date.getMinutes() < 10) {
          min = "0" + min;
      }
      let time = hours + ":" + min;

      userMessage.push({
        user: values.username,
        contacts : [],
        img : values.img,
        lastSeen : time,
      })


      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
