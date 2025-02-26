import { Button } from '../ui/button'
import { Input } from '../ui/input';
import { Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Loader2 } from "lucide-react";
import { getUser, signup } from '@/service/userAPI';
import useAuthStore from '@/store/authStore';
import {User,Token,SignupUser} from "@/types/interfaces"
import { useNavigate } from 'react-router-dom';
import { setToken } from '@/utils/Token';
import { toast } from 'react-toastify';


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


export default function Signup ()  {
  const {setUser}=useAuthStore()
  const navigate=useNavigate()


  const handleSubmit = async (
    values: SignupUser, 
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {


    try {
      const token:Token = await signup(values);
      setToken(token);
      const user:User = await getUser();
      setUser(user);
      navigate('/home')
      

    } catch (error) {
      console.log(error);
      toast.error(typeof error === "string" ? error : "An error occurred.",{
        position: "top-left",
      })
    } finally {
      setSubmitting(false);
    }
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
              <Input id='email' className='w-72 rounded' name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} />
            </div>
            <ErrorMessage name='email' component={'small'} className='text-red-400'/>
          </div>

          <div className='w-full'>
            <div className='flex w-full gap-2 items-center justify-between'>
              <label htmlFor='national_id'>National ID:</label>
              <Input id='national_id' className='w-72 rounded-md ' type='number' minLength={6} min={100000}  
  max={9999999999}  name='national_id' onChange={handleChange} onBlur={handleBlur} value={values.national_id} />
            </div>
            <ErrorMessage name='national_id' component={'small'} className='text-red-400'/>
          </div>

          <div className='w-full'>
            <div className='flex w-full gap-2 items-center justify-between'>
              <label htmlFor='password'>Password:</label>
              <Input id='password' className='w-72 rounded-md 'type='password' name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} />
            </div>
            <ErrorMessage name='password' component={'small'} className='text-red-400'/>
          </div>

          <div className='w-full'>
            <div className='flex w-full gap-2 items-center justify-between'>
              <label htmlFor='confirm_password'>Confirm Password:</label>
              <Input id='confirm_password' className='w-72 rounded-md' name='confirm_password' type='password' onChange={handleChange} onBlur={handleBlur} value={values.confirm_password} />
            </div>
            <ErrorMessage name='confirm_password' component={'small'} className='text-red-400'/>
          </div>

          <Button
            type='submit'
            className='w-[13rem] rounded-lg'
            variant='destructive'
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

