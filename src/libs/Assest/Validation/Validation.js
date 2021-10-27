

export const _renderValidation = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = "Please Enter Your First Name.";
    }
    if (values.firstName !== /^[A-Za-z]+$/) {
      errors.firstName = "Please Enter Your First Name Correctly.";
    }
    if (!values.lastName) {
      errors.lastName = "Please Enter Your Last Name.";
    }
    if (values.lastName !== /^[A-Za-z]+$/) {
      errors.lastName = "Please Enter Your Last Name Correctly.";
    }
    if (!values.age) {
      errors.age = "Please Enter Your Age.";
    }
    if (!isNaN(values.age)) {
      errors.age = "Please Enter Your Age Correctly.";
    }
    return errors;
  };
