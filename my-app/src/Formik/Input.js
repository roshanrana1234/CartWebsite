import React from 'react'
import { Field ,ErrorMessage} from 'formik'
import TextError from './TextError'

const Input = (props) => {
    const {name, label,...rest} = props
  return (
    <>
    <div className='flex max-w-sm w-full gap-3 ' >
        <label className='text-gray-700 w-[200px]' htmlFor={name} >{label} </label>
        <Field className='text-gray-700 border shadow-md focus:outline-none rounded-sm'  name={name} {...rest} />
    </div>
        <ErrorMessage name={name} component={TextError} />
    </>
  )
}

export default Input