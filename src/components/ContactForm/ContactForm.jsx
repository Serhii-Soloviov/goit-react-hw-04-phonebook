import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import {
  InputForm,
  InputLabel,
  Input,
  LabelBox,
  FormButton,
  Error,
  InputBox,
} from './ContactForm.styled';

export const ContactForm = ({ addNewContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const SignupSchema = Yup.object({
    number: Yup.string('Enter correct')

      .required('Обов`язкове поле!')
      .max(13, 'Невірний номер телефону!')
      .matches(/((?=.*[+]){1})/, 'Введіть номер в форматі +380*********')
      .matches(/(?=.*\d{12})/, 'Потрібно ввести 12 цифр номеру!'),
    name: Yup.string('hello')
      .min(2, 'Веедіть більше 2-х символів!')
      .max(16, 'Занадто довге ім`я!')
      .required('Обов`язкове поле! '),
  });
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    addNewContact({
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <InputForm>
        <LabelBox>
          <InputLabel htmlFor="name">Name</InputLabel>
          <InputBox>
            <Input type="text" name="name" />
            <Error component="p" name="name" />
          </InputBox>
        </LabelBox>
        <LabelBox>
          <InputLabel htmlFor="namber">Number</InputLabel>
          <InputBox>
            <Input type="tel" name="number" />
            <Error component="p" name="number" />
          </InputBox>
        </LabelBox>
        <FormButton type="submit">Add contact</FormButton>
      </InputForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};
