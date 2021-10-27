import * as Yup from 'yup';

export const _renderValidation = Yup.object().shape({

  firstName: Yup.string()
    .required('Required'),

  lastName: Yup.string()
    .required('Required'),

    gender: Yup.string()
    .required('Required'),

    phone: Yup.string()
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),

});



  // export const _renderValidation = (values) => {
  //   let errors = {};
  //   if (!values.firstName) {
  //     errors.firstName = "Please Enter Your First Name.";
  //   }
    
  //   if (!values.lastName) {
  //     errors.lastName = "Please Enter Your Last Name.";
  //   }
  
  //   if (!values.age && !isNaN(values.age)) {
  //     errors.age = "Please Enter Your Age.";
  //   }

  //   if (!values.birthday) {
  //     errors.birthday = "Please Enter Your BirthDay.";
  //   }

  //   if (!values.gender) {
  //     errors.gender = "Please Select Your Gender.";
  //   }

  //   if (!values.country) {
  //     errors.country = "Please Select Your Country.";
  //   }

  //   if (!values.city) {
  //     errors.city = "Please Select Your City.";
  //   }

  //   if (!values.jobTitle) {
  //     errors.jobTitle = "Please Select Job Title.";
  //   }
  //   if (!values.phone) {
  //     errors.phone = "Please Enter Your Phone Number.";
  //   }
  //   if (!values.description) {
  //     errors.description = "Please Enter Your description.";
  //   }
    

    
  //   return errors;
  // };