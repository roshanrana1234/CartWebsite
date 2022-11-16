import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";
import FormikControl from '../Formik/FormikControl';

const Login = () => {
  const navigate = useNavigate();
  const initialValues ={
      email:"",
      password:""
  }
  const validationSchema =Yup.object({
      email:Yup.string().required("Required"),
      password:Yup.string().required("Required")
  })
  const onSubmit = (values) =>{
      console.log("Form Datas" , values)
      setTimeout(()=>{
          navigate("/mainpage");

      },1000)
  }

  return (
    <>
       <div className='flex flex-col justify-center gap-3 items-center border p-4 rounded-md shadow-2xl border-gray-300' >
        <div className='text-5xl' >
            Login Page
        </div>

    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
     {
        formik => (
            <Form className='flex gap-5 flex-col' >
           
                <FormikControl
                label="Email"
                type="email"
                control="input"
                name="email"
                />
                   <FormikControl
                label="Password"
                type="password"
                control="input"
                name="password"
                />
                <button 
                 disabled={!formik.isValid && formik.isSubmitting}
                 className='disabled:opacity-25 text-white px-4 py-2 rounded-md bg-blue-500 active:bg-blue-300 hover:bg-blue-400'
                type='submit' >LogIn</button>
            </Form>
        )
     }
    </Formik>
        {/* <button
        className='text-white px-4 py-2 rounded-md bg-blue-500 active:bg-blue-300 hover:bg-blue-400'
        onClick={handleClick} >Register</button> */}
    </div>
      </>
  )
}

export default Login