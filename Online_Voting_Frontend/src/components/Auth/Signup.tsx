import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input';
import { Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Loader2 } from "lucide-react";

interface FormValues {
  email: string;
  national_id: string;
  password: string;
  confirm_password: string;
}

const Signup: React.FC = () => {

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    national_id: Yup.string()
      .required('National ID is required')
      .matches(/^\d{6,10}$/, 'National ID must be between 6 and 10 digits'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const initialValues = {
    email: '',
    national_id: '',
    password: '',
    confirm_password: ''
  }



const handleSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
  console.log(values);
  setSubmitting(false)

};

return (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit} 
  >
    {({ isSubmitting, handleChange, handleBlur, values }) => (
      <Form className='h-full bg-yellow flex items-center justify-center flex-col gap-4 p-4'>
        <div className='flex flex-col gap-3 items-center justify-center'>
          <div className='w-full'>
            <div className='flex w-full gap-2 items-center justify-between'>
              <label htmlFor='email'>Email:</label>
              <Input id='email' className='w-72 rounded-md bg-accent-foreground' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} />
            </div>
            <ErrorMessage name='email' component={'small'} className='text-red-400'/>
          </div>

          <div className='w-full'>
            <div className='flex w-full gap-2 items-center justify-between'>
              <label htmlFor='national_id'>National ID:</label>
              <Input id='national_id' className='w-72 rounded-md bg-accent-foreground' name='national_id' onChange={handleChange} onBlur={handleBlur} value={values.national_id} />
            </div>
            <ErrorMessage name='national_id' component={'small'} className='text-red-400'/>
          </div>

          <div className='w-full'>
            <div className='flex w-full gap-2 items-center justify-between'>
              <label htmlFor='password'>Password:</label>
              <Input id='password' className='w-72 rounded-md bg-accent-foreground' name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} />
            </div>
            <ErrorMessage name='password' component={'small'} className='text-red-400'/>
          </div>

          <div className='w-full'>
            <div className='flex w-full gap-2 items-center justify-between'>
              <label htmlFor='confirm_password'>Confirm Password:</label>
              <Input id='confirm_password' className='w-72 rounded-md bg-accent-foreground' name='confirm_password' onChange={handleChange} onBlur={handleBlur} value={values.confirm_password} />
            </div>
            <ErrorMessage name='confirm_password' component={'small'} className='text-red-400'/>
          </div>

          <Button
            type='submit'
            className='w-[13rem] rounded-lg bg-[var(--Very--dark--cyan)]'
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : <>Sign up</>}
          </Button>
        </div>
      </Form>
    )}
  </Formik>
);
}

export default Signup;
