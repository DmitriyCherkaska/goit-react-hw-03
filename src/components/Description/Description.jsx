import some from './Description'

const Description = ({ title, text }) => {
  return (
    <div>
      <h1 className={some.title}>Sip Happens Café: {title}</h1>
      <p className={some.text}>
        Please leave your feedback about our service by selecting one of the
        options below.: {text}
      </p>
    </div>
  );
};

export default Description;
