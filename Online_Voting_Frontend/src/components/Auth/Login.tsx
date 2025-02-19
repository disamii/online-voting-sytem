import React from 'react';
import { Formik, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as yup from 'yup';
import { Loader2, User } from "lucide-react";
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';

interface FormValues {
  national_id: string;
  password: string;
}

const initialValues: FormValues = {
  national_id: '',
  password: '',
};

const validationSchema = yup.object().shape({
  national_id: yup.string().required("National ID is required"),
  password: yup.string().required("Password is required"),
});

const Login: React.FC = () => {
  const handleSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, handleChange, values, handleBlur }) => (
          <Form className='flex h-full items-center justify-center flex-col gap-4'>
            <div><User name='user' size={50} color='black' /></div>
            <div className='flex flex-col gap-3 items-center justify-center'>

              <div className='w-full'>
                <div className='flex w-full gap-2 items-center justify-between'>
                  <label htmlFor='national_id'>National ID:</label>
                  <Input id='national_id' className='w-34 rounded-md' name='national_id' onChange={handleChange} onBlur={handleBlur} value={values.national_id} />
                </div>
                <ErrorMessage name='national_id' component={'small'} className='text-red-400' />
              </div>

              <div className='w-full'>
                <div className='flex w-full gap-2 items-center  justify-between'>
                  <label htmlFor='password'>Password:</label>
                  <Input id='password' className='w-34 rounded-md' name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} />
                </div>
                <ErrorMessage name='password' component={'small'} className='text-red-400' />
              </div>

              <Button
                type='submit'
                className='w-[13rem] rounded-lg bg-[var(--Very--dark--cyan)]'
                disabled={isSubmitting}
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : <>Login</>}
              </Button>

            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Login;
