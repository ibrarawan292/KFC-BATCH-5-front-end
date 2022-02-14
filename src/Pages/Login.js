import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'password Must be 6 characters or greater';
  }

  return errors;
};

const Login =() => {

  const { handleSubmit, handleBlur, handleChange, handleReset, errors, values} = useFormik({
     
      initialValues:{
        email: '',
        password:''
      },
      validate,
      onSubmit: (values) => {
        console.log(values)
      }
  })

  return (
    <form onSubmit={handleSubmit} className="w-25">
      <label htmlFor="email">First Name</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={handleChange}
        value={values.email}
        className= "form-control"
      />
      {errors.email ? <div className='text-danger'>{errors.email}</div> : null}

      <label htmlFor="password">Last Name</label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={handleChange}
        value={values.password}
        className= "form-control"
      />
      {errors.password ? <div className='text-danger'>{errors.password}</div> : null}

      <button type="submit" className='btn btn-primary w-100 mt-2'>Submit</button>
    </form>
  );
};

export default Login
