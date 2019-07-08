import { action, observable, computed } from 'mobx';
import { teamFeedback } from './data';

class TeamFeedbackStore {
  constructor() {
    this.items = teamFeedback;
  }

  @observable
  items = [];

  @observable
  selectedUserId = null;

  @computed
  get isFeedbackExist() {
    return Boolean(this.items.length);
  }

  @computed
  get selectedUserData() {
    if (!this.isFeedbackExist) {
      return null;
    }

    return this.items.find(
      feedback => feedback.userProfile.id === this.selectedUserId,
    );
  }

  @action
  selectUserId = userId => (this.selectedUserId = userId);
}

export default new TeamFeedbackStore();
