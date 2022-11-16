import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
    const initialValues ={
        email:"",
        userName:"",
        password:""
    }
    const validationSchema =Yup.object({
        email:Yup.string().required("Required")
    })
    const onSubmit = (values) =>{
        console.log("Form Datas" , values)
    }
  return (
    <>
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
       { 
       (formik) => (

         <Form className='flex gap-5 ' >
            <FormikControl 
            control="input"
            type="text"
            label="Email"
            />
             <FormikControl 
            control="input"
            type="password"
            label="Password"
            />
          <button type="submit" >Submit</button>
         </Form>
        )
        }
    </Formik>
    </>
  )
}

export default FormikContainer