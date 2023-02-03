import { useState } from 'react';
import Wrapper from './Wrapper/Wrapper';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const feedbackOtions = ['good', 'neutral', 'bad'];

  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = option => {
    setFeedbacks(prevState => {
      const value = prevState[option];
      return { ...prevState, [option]: value + 1 };
    });
  };

  const { good, neutral, bad } = feedbacks;
  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (!total) {
      return 0;
    }
    const result = ((good / total) * 100).toFixed(2);
    return Number(result);
  };

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Wrapper title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOtions}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Wrapper>
      {total !== 0 && (
        <Wrapper title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Wrapper>
      )}
      {total === 0 && <Notification message="There is no feedback" />}
    </>
  );
};
