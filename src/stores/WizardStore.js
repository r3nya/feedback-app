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

  @computed
  get total() {
    return this.questions.length;
  }

  @computed
  get completed() {
    return this.questions.filter(
      question => typeof question.value !== 'undefined',
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
    this.questions[questionIndex] = { ...this.questions[questionIndex], value };
  };
}

export default new WizardStore();
