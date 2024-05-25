// import Options from "./Options/Options";
// import Feedback from "./Feedback/Feedback";
// import Description from "./Description/Description";
import ContactForm from './components/ContactForm';
// import { useEffect } from "react";
// import { useState } from "react";
import "./App.css";

function App() {

  const submit = (data) => {
    console.log('data :>> ', data);
  }

  return (
    <>
   <ContactForm submit={submit} />; 
   </>
  )
}

export default App;
