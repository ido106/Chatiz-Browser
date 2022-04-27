import users from "../sign_in/users";
export default function validateInfo(values) {
  var check = true;
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
    check = false;
  }

  if (!values.email) {
    errors.email = "Email required";
    check = false;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
    check = false;
  }

  errors.password = "";
  if (!values.password) {
    errors.password = "Password is required";
    check = false;
  } else if (values.password.length < 6) {
    if(/[w+]/.exec(values.password) == null) {
      errors.password = "Password needs to be 6 characters or morePassword needs to include letters";
      

    } else{
    errors.password = "Password needs to be 6 characters or more";
    check = false;
    }
  }


  if (!values.password2) {
    errors.password2 = "Password is required";
    check = false;
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
    check = false;
  }
  if (check) {
    users.push({ UserName: values.username, Password: values.password });
  }
  return errors;
}
