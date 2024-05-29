import some from './Contact.module.css'

const Contact = ({ contact, deleteContact }) => {
  return(
  <li className={some.item}>
    <div className={some.container}>

    <div className={some.contacts}>
    <span className={some.username}>{contact.name} 
    </span>
    <span className={some.number}>{contact.number} 
    </span>
    </div>

    <div className={some.wrapper}>
     <button className={some.btn} onClick={() => deleteContact(contact.id)}>Delete
     </button> 
    </div>
  </div>
  </li>

  );
}

export default Contact;