import { observable } from 'mobx';

import { users } from './data';

class TeamStore {
  constructor() {
    this.users = users;
  }

  @observable
  users = [];

  getUserById = userId => this.users.find(user => user.id === userId);
}

export default new TeamStore();
