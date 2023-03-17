import React, { Component } from 'react';
import { Buttons } from './Buttons/Buttons';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import data from './data.json';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const values = Object.values(this.state);
    const total = values.reduce((x, y) => x + y);
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const percentage = (this.state.good / total) * 100;
    if (percentage > 0 && percentage !== Infinity)
      return Math.round(percentage) + '%';
  }

  handleButtonClick = e => {
    const feedback = e.target.name;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  render() {
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
          <Buttons
            content={data.btnText}
            clickHandler={this.handleButtonClick}
          />
        </Section>
        <Section title={data.statisticsTitle}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={data.defaultText} />
          )}
        </Section>
      </div>
    );
  }
}
