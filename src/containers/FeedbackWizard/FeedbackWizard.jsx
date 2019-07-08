import React from 'react';
import { inject, observer } from 'mobx-react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import { Question } from './Question';
import styles from './FeedbackWizard.module.scss';

@inject('wizard', 'myFeedback', 'team')
@observer
class FeedbackWizard extends React.Component {
  state = {
    currentQuestionIndex: 0,
  };

  componentDidMount() {
    const { wizard } = this.props;

    wizard.resetProgress();
    wizard.setCurrentUserId(this.currentUserId);
    this.setCurrentQuestionIndex();
  }

  componentDidUpdate(prevProps) {
    const prevLocationSearch = prevProps.location.search;
    const locationSearch = this.props.location.search;

    if (prevLocationSearch !== locationSearch) {
      this.setCurrentQuestionIndex();
    }
  }

  setCurrentQuestionIndex() {
    const DEFAULT = 0;
    const params = new URLSearchParams(this.props.location.search);

    const currentIndex = parseInt(params.get('question'), 10);

    if (!currentIndex || currentIndex < 0) {
      return this.setState(() => ({
        currentQuestionIndex: DEFAULT,
      }));
    }

    this.setState(() => ({
      currentQuestionIndex: currentIndex,
    }));
  }

  get currentUserId() {
    const { userId } = this.props.match.params;

    return parseInt(userId, 10);
  }

  get disablePreviousButton() {
    return this.state.currentQuestionIndex === 0;
  }

  get disableNextButton() {
    const { wizard } = this.props;
    const { currentQuestionIndex } = this.state;

    return !(
      typeof wizard.questions[currentQuestionIndex].value !== 'undefined' &&
      wizard.questions[currentQuestionIndex].value
    );
  }

  get showFinishButton() {
    const { wizard } = this.props;
    const { currentQuestionIndex } = this.state;

    return currentQuestionIndex === wizard.total - 1;
  }

  get previousLink() {
    const { currentQuestionIndex } = this.state;
    const { userId } = this.props.match.params;
    const previousQuestion = currentQuestionIndex - 1;

    if (previousQuestion < 0) {
      return '/share-feedback';
    }

    return `/wizard/${userId}?question=${previousQuestion}`;
  }

  get nextLink() {
    const { wizard } = this.props;
    const { userId } = this.props.match.params;
    const { currentQuestionIndex } = this.state;
    const nextQuestion = currentQuestionIndex + 1;

    if (nextQuestion === wizard.total) {
      return '/share-feedback';
    }

    return `/wizard/${userId}?question=${nextQuestion}`;
  }

  handlePreviousButton = () => {
    if (this.disablePreviousButton) {
      return;
    }

    this.props.history.push(this.previousLink);
  };

  handleNextButton = () => {
    if (this.disableNextButton) {
      return;
    }

    this.props.history.push(this.nextLink);
  };

  handleSkipButton = () => {
    const { history, wizard } = this.props;
    wizard.skipQuestion(this.currentQuestion.id);

    if (!this.showFinishButton) {
      return history.push(this.nextLink);
    }

    return this.handleFinishButton();
  };

  handleFinishButton = () => {
    const { wizard, myFeedback, history } = this.props;

    const userProfile = myFeedback.findUserById(this.currentUserId);

    myFeedback.save({ userProfile, questions: wizard.questions });
    wizard.resetProgress();
    myFeedback.selectUserId(this.currentUserId);
    myFeedback.removeUserById(this.currentUserId);

    history.push('/my-feedback');
  };

  get currentQuestion() {
    const { currentQuestionIndex } = this.state;
    return this.props.wizard.questions[currentQuestionIndex];
  }

  render() {
    const { history, wizard, team } = this.props;
    const { currentQuestionIndex } = this.state;

    const CURRENT_QUESTION = wizard.questions[currentQuestionIndex];

    return (
      <article className={styles.root}>
        <div className={cx('hero', styles.head)}>
          <Link
            className="h-small-text"
            to="#"
            onClick={() => history.goBack()}
          >
            {'<'} Back
          </Link>

          <br />
          <h1 className="title">{CURRENT_QUESTION.question}</h1>
          <h3
            className={cx('h6-small-text', styles.subtitle, styles.smallText)}
          >
            Share your feedback with {team.getUserById(this.currentUserId).name}
          </h3>
        </div>

        <div className={styles.box}>
          <div className={styles.questionContainer}>
            <Question {...CURRENT_QUESTION} setAnswer={wizard.setAnswer} />
          </div>
          <div className={styles.navBar}>
            <button
              className="button"
              disabled={this.disablePreviousButton}
              onClick={this.handlePreviousButton}
            >
              Previous
            </button>
            <button className="button" onClick={this.handleSkipButton}>
              Skip
            </button>
            {!this.showFinishButton && (
              <button
                className="button"
                disabled={this.disableNextButton}
                onClick={this.handleNextButton}
              >
                Next
              </button>
            )}
            {this.showFinishButton && (
              <button
                className="button"
                disabled={this.disableNextButton}
                onClick={this.handleFinishButton}
              >
                Finish
              </button>
            )}
          </div>

          <div className={styles.progressBar}>
            <div
              className={styles.progressBarCompleted}
              style={{ width: `${wizard.progress}%` }}
            />
          </div>

          <div className={styles.footerBar}>
            <div className="left">
              <div className={styles.smallText}>Questions completed</div>
              <div>
                {wizard.completed} / {wizard.total}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default FeedbackWizard;
