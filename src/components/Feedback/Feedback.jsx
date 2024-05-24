import some from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <p className={some.item}>Good: {feedback.good}</p>
      <p className={some.item}>Neutral: {feedback.neutral}</p>
      <p className={some.item}>Bad: {feedback.bad}</p>
      <p className={some.item}>Total Feedback: {totalFeedback}</p>
      <p className={some.item}>Positive Feedback: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
