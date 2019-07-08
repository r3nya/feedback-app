import { action, computed, observable } from 'mobx';

import { questions } from './data';

class WizardStore {
  constructor() {
    this.questions = questions;
  }
  /**
   * @types {[]}
   */
  @observable
  questions;

  /**
   * @types {number}
   */
  @observable
  currentUserId;

  @observable
  currentUserProfile;

  @computed
  get total() {
    return this.questions.length;
  }

  @computed
  get completed() {
    return this.questions.filter(
      question =>
        typeof question.value !== 'undefined' ||
        typeof question.skipped !== 'undefined',
    ).length;
  }

  @computed
  get progress() {
    const DEFAULT = 0;

    if (this.completed === 0) {
      return DEFAULT;
    }

    return ((this.completed / this.total) * 100).toFixed(2);
  }

  @action
  setCurrentUserId = id => (this.currentUserId = id);

  @action
  setAnswer = ({ value, questionId }) => {
    const questionIndex = this.questions.findIndex(
      question => questionId === question.id,
    );
    this.questions[questionIndex] = {
      ...this.questions[questionIndex],
      value,
      skipped: undefined,
    };
  };

  @action
  skipQuestion = questionId => {
    const questionIndex = this.questions.findIndex(
      question => questionId === question.id,
    );
    this.questions[questionIndex] = {
      ...this.questions[questionIndex],
      skipped: true,
      value: undefined,
    };
  };

  @action
  resetProgress = () => {
    this.questions = questions;
  };
}

export default new WizardStore();
