function validate() {
  let [username, email, password, confirm, company, companyNumber] =
    document.querySelectorAll("#registerForm input");

  let companyCheckBox = document.querySelector("#company");
  let companyInfo = document.querySelector("#companyInfo");
  let submitBtn = document.querySelector("#submit");
  let validDiv = document.querySelector("#valid");

  companyCheckBox.addEventListener("change", (e) => {
    if (e.target.checked) {
      companyInfo.style.display = "block";
    } else {
      companyInfo.style.display = "none";
    }
  });
  function checkBorder(valid, input) {
    let style = valid ? "border-color: ''" : "border-color: red";
    input.style = style;
  }
  function checkPasswordLength(field, min, max) {
    if (field.length < min || field.length > max) {
      return false;
    }
    return true;
  }
  function checkUsername(user) {
    let userRegex = /^[a-zA-Z0-9]{3,20}$/;
    if (userRegex.test(user.value) == false || user.value == "") {
      user.style.borderColor = "red";
    } else {
      checkBorder(true, user);
      return true;
    }
  }
  function checkPassword(pass) {
    let passRegex = /^[\w]{5,15}$/;
    if (passRegex.test(pass.value) == false || pass.value == "") {
      pass.style.borderColor = "red";
    } else {
      checkBorder(true, pass);
      return true;
    }
  }
  function checkEqualPass(pass, confirmPass) {
    let passRegex = /^[\w]{5,15}$/;
    if (
      pass.value !== confirmPass.value ||
      !passRegex.test(confirmPass.value) 
    ) {
      pass.style.borderColor = "red";
      confirm.style.borderColor = "red";
    } else {
      checkBorder(true, pass);
      checkBorder(true, confirmPass);
      return true;
    }
  }
  function checkValidEmail(email) {
    let mailRegex = /^.*@.*\..*$/;
    if (!mailRegex.test(email.value)) {
      email.style.borderColor = "red";
    } else {
      checkBorder(true, email);
      return true;
    }
  }
  function validateCompany(company, isChecked) {
    if (isChecked) {
      if (company.value < 1000 || company.value > 9999) {
        checkBorder(false, company);
      } else {
        checkBorder(true, company);
        return true;
      }
    } else {
      return true;
    }
  }
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let validUserName = checkUsername(username);
    let validEmail = checkValidEmail(email);
    let validPassword = checkPassword(password);
    let validConfirmPass = checkEqualPass(password, confirm);
    let validCompany = validateCompany(companyNumber, companyCheckBox.checked);

    if (companyCheckBox.checked) {
      if (
        validUserName &&
        validEmail &&
        validPassword &&
        validConfirmPass &&
        validCompany
      ) {
        validDiv.style.display = "block";
      } else {
        validDiv.style.display = "none";
      }
    } else {
      if (validUserName && validEmail && validPassword && validConfirmPass) {
        validDiv.style.display = "block";
      } else {
        validDiv.style.display = "none";
      }
    }
  });
}
