import { useState } from 'react';
import { Buttons } from './Buttons/Buttons';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import data from './data.json';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = (good / total) * 100;
    if (percentage > 0 && percentage !== Infinity)
      return Math.round(percentage) + '%';
  };

  const handleButtonClick = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(s => s + 1);
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        break;
      case 'bad':
        setBad(s => s + 1);
        break;
      default:
        return;
    }
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      <Section title={data.heading}>
        <Buttons content={data.btnText} clickHandler={handleButtonClick} />
      </Section>
      <Section title={data.statisticsTitle}>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={data.defaultText} />
        )}
      </Section>
    </div>
  );
}
