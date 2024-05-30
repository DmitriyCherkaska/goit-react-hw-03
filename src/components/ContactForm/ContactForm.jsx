import some from "./ContactForm.module.css";
// import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be in format 123-45-67")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(event);
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    console.log(newContact);
    addContact(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form>
        <div className={some.container}>
          <div className={some.name}>
            <label className={some.username} htmlFor="name">
              Name
            </label>
            <Field type="text" name="name" id="name" />
            <ErrorMessage name="name" component="span" />
          </div>

          <div>
            <label className={some.number} htmlFor="number">
              Number
            </label>
            <Field type="text" name="number" id="number" />
            <ErrorMessage name="number" component="span" />
          </div>

          <button className={some.btn} type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
