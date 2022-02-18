import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login =() => {

  const { handleSubmit, handleBlur, handleChange, errors, values,touched} = useFormik({
     
      initialValues:{
        email: '',
        password:''
      },
      validationSchema: Yup.object({
        email: Yup.string().email('Please enter a valid email address').required('Please enter your email to proceed'),
        password: Yup.string().required('Please enter the password').matches('^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$', 'password must have 2 uppercase, 2 digits 3 lowecase and the length of 8 characters')
      }),

      onSubmit: (values) => {
        console.log(values)
      }
  })

  return (
    <form onSubmit={handleSubmit} className="w-25">
      <label htmlFor="email">First Name</label>
      <input
        id="test"
        name="email"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        className= "form-control"
      />
      {touched.email && errors.email ? <div className='text-danger'>{errors.email}</div> : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        className= "form-control"
      />
      {touched.password && errors.password ? <div className='text-danger'>{errors.password}</div> : null}

      <button type="submit" className='btn btn-primary w-100 mt-2'>Submit</button>
    </form>
  );
};

export default Login
