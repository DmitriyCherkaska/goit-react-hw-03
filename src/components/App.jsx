// import Options from "./Options/Options";
// import Feedback from "./Feedback/Feedback";
// import Description from "./Description/Description";
import ContactForm from "./ContactForm/ContactForm";
// import { useEffect } from "react";
// import { useState } from "react";
import "./App.css";

const App = () => {

  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
</div>
  );
};

export default App;
