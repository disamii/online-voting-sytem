import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Loader2 } from "lucide-react";
import {  Input } from '@/components/ui/input';

const Login:React.FC=()=> {
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
        <Form className='flex flex-col gap-3 items-center'>
          <div>
            <span>National ID:</span>
            <Field name='national_id' component={Input} /> {/* Pass the component reference */}
            <ErrorMessage name='national_id' component={'small'} />
          </div>
          <div>
            <span>Password:</span>
            <Field type='password' name='password' component={Input} /> {/* Use your Input component here */}
            <ErrorMessage name='password' component={'small'} />
          </div>
          <button type='submit'>
            {isSubmitting ? <Loader2 className="animate-spin" /> : <>Login</>}
          </button>
        </Form>
      )}
    </Formik>
  );
}
export default Login