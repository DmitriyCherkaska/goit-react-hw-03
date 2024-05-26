import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deleteContact }) => {
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </ul>
  };
export default ContactList;
