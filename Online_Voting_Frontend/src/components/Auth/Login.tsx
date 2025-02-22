import { useState }from 'react';
import { Formik, Form, ErrorMessage} from 'formik';
import * as yup from 'yup';
import { Loader2, User as UserIcon  } from "lucide-react";
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';

import {User,Token,LoginValues} from "@/types/interfaces"
import { getUser, login } from '@/service/userAPI';

import useAuthStore from '@/store/authStore';
import { useNavigate } from 'react-router-dom';


const initialValues: LoginValues= {
  national_id: '',
  password: '',
};

const validationSchema = yup.object().shape({
  national_id: yup.string().required("National ID is required"),
  password: yup.string().required("Password is required"),
});

export default function Login  () {
  const navigate=useNavigate()
  const {setToken,setUser}=useAuthStore()
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (
    values: LoginValues, 
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const token:Token = await login(values);
      setToken(token);
      const user:User = await getUser();
      setUser(user);
      navigate('/home')
    } catch (error) {
      console.error(error);
      setErrorMessage(typeof error === "string" ? error : "An error occurred.");
    } finally {
      setSubmitting(false);
    }
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
                    {errorMessage && (
          <div className="text-red-500 mt-2">
            <p className="font-semibold">errors:</p>
            <ul className="list-disc list-inside">
              {errorMessage.split("\n").map((err, index) => (
                <li key={index}>{err}</li>
              ))}
            </ul>
          </div>
        )}
            <div><UserIcon name='user' size={50} color='black' /></div>
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
                  <Input id='password' className='w-34 rounded-md' name='password' type='password' onChange={handleChange} onBlur={handleBlur} value={values.password} />
                </div>
                <ErrorMessage name='password' component={'small'} className='text-red-400' />
              </div>

              <Button
                type='submit'
                className='w-[13rem] rounded-lg '
                variant='destructive'
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

