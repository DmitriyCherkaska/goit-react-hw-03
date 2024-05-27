import Contact from "../Contact/Contact";
import some from '../ContactList/ContactList.module.css'

const ContactList = ({ contacts, deleteContact }) => {
  console.log(contacts);
    <ul className={some.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </ul>
  };
export default ContactList;
