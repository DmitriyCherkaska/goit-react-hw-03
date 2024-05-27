// import some from './ContactForm.module.css'
// import { useId } from "react";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import {nanoid} from 'nanoid';

const ContactForm = ({ addContact }) => {
  const formik = useFormik({
   initialValues : {
    name: '',
    number: '',
   },

  ContactFormSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be in format 123-45-67")
      .required("Required"),
  }),

  handleSubmit: (values, { resetForm }) => {
    addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      });
      resetForm();
    },
});

  return (
    <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input type="text" name="name" id='name' />
          <ErrorMessage name="name" component="span" />
        </div>

        <div>
          <label htmlFor='number'>Number</label>
          <input type="text" name="number" id='number' />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
