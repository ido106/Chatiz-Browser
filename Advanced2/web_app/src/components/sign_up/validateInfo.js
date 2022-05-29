

export default function validateInfo(values) {
  var check = true;
  let errors = {};

  if (!values.terms) {
    errors.terms = "Checkbox is required"
    check = false;
  }

  if (!values.username.trim()) {
    errors.username = "Username required";
    check = false;
  }

  if (!values.usernameN.trim()) {
    errors.usernameN = "User nick name required";
    check = false;
  }
  if (!values.email) {
    errors.email = "Email required";
    check = false;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
    check = false;
  }

  if (!values.password) {
    errors.password = "Password is required";
    check = false;
  }
  else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
    check = false;
  } else if (!/\d/.test(values.password)) {
    errors.password = "Password must contain at least one digit";
    check = false;
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
    check = false;
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
    check = false;
  }
  if (check) {
    var exist = false;
    let func = async () => {
      const res = await fetch("https://localhost:7038/api/Register",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: values.username, nickName: values.usernameN, password: values.password })
        });

      const data = res.status;
      if (data == 400) {
        exist = true;
      }
    };

    func().then(() => {
      if (exist) {
        check = false;
        errors.username = "user name is already exesit"
      }
    });
  }
  return errors;
}