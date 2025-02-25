import * as Yup from 'yup';

export const ProfileSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  date_of_birth: Yup.date().required('Date of birth is required'),
  gender: Yup.string().required('Gender is required'),
  address: Yup.string().required('Address is required'),
  region: Yup.string().required('Region is required'),
  photo: Yup.string().required('Photo is required'), // Validate as a string
});
