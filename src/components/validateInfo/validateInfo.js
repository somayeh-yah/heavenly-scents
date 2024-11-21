export default function validateInfo(values) {
  let errors = {};
  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.email) {
    errors.email = "Email required";
  }
  else if (!/\S+@\S+\.\S+/.test(values.email)){
    errors.email = "Email address is invalid"
  }

  if(!values.password){
    errors.password = "Password is required"
  }
  else if(values.password.length < 6){
    errors.password = "Password needs to be 6 charachters or more"
  }

  if(!values.password2){
    errors.password2 = "Password is required"
  }
  else if(values.password2 !== values.password){
    errors.password = "Passwords do not match"
  }

  
  if(!values.phone){
    errors.phone= "Phone number is required"
  } 
  else if(!/^\d{10}$/.test(values.phone)) {
    errors.phone = "Phone number needs to be 10 digits.";
  }

  if(!values.zip){
    errors.zip = "Zip code is required";
  }
  else if(!/^\d{5}$/.test(values.zip)) {
    errors.zip = "Zip code needs to be 5 digits";
  }

  return errors;
}
