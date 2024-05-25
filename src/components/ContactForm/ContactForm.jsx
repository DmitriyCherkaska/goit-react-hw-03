// import some from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useId } from "react";
// import {nanoid} from 'nanoid';

const ContactFormSchema = Yup.object().shape({
  username: Yup.string().min(2,'Too Short!').max(50, 'Too Long!'). required('Required'),
  number: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/,'Number must be in format 123-45-67').required('Required'),
});

  const initialValues = {
    username: "Name",
    number:'Number'
  };

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

return (
  <Formik 
    initialValues={initialValues} 
    onSubmit={handleSubmit} 
    validateYupSchema={ContactFormSchema}
    >
    <Form>
      <div>
      <label htmlFor="nameFieldId">Name</label>
      <Field type='text' name='username' id={nameFieldId} />
      <ErrorMessage name='username' component='span' />
      </div>

      <div>
      <label htmlFor="numberFieldId">Number</label>
      <Field type='number' name='phone' id={numberFieldId} />
      <ErrorMessage name='phone' component='span' />
      </div>

      <button type='submit'>Add contact</button>
    </Form>
  </Formik>
);
};

export default ContactForm;
