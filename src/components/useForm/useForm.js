import { useState, useEffect } from "react";

export default function useForm(validateInfo) {


  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    name: "",
    phone: "",
    state:"",
    address:"",
    zip:""
    
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validateInfo(values))
  }
  return { handleChange, values, handleSubmit, errors };
}
