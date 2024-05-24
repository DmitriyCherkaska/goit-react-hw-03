import some from './Options.module.css'

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={some.container}>
      <button className={some.btn} onClick={() => updateFeedback("good")}>Good</button>
      <button className={some.btn} onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button className={some.btn} onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button className={some.btn} onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
