import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Loader2,  User } from "lucide-react";
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
const Login: React.FC = () => {
  const initialValues = {
    national_id: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    national_id: yup.string().required("National ID is required"),
    password: yup.string().required("Password is required"),
  });

  async function handleSubmit(values: { national_id: string; password: string }) {
    console.log(values);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className='flex-1 bg-yellow flex items-center justify-center flex-col gap-4 '>
          <div><User name='user' size={50} color='black'/></div>
          <div className='flex flex-col gap-3 items-center justify-center'>

            <div className='w-full'>
              <div className='flex w-full gap-2 items-center justify-between'>
                <label htmlFor='national_id'>National ID:</label>
                <Input id='national_id' className='w-34 rounded-md' name='national_id' />
              </div>
              <ErrorMessage name='national_id' component={'small'} />
            </div>


            <div className='w-full'>
              <div className='flex w-full gap-2 items-center  justify-between'>
                <label htmlFor='password'>Password:</label>
                <Input id='password' className='w-34 rounded-md' name='password' />
              </div>
              <ErrorMessage name='password' component={'small'} />
            </div>
            <Button
              type='submit'
              className='w-[13rem] rounded-lg bg-[var(--Very--dark--cyan)]'
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : <>Login</>}
            </Button>
        
          </div>
        </Form>
      )}
    </Formik>
  );
}
export default Login