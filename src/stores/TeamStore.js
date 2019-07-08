import { observable } from 'mobx';

import { users } from './data';

class TeamStore {
  constructor() {
    this.users = users;
  }

  @observable
  users = [];
}

export default new TeamStore();
