import { observable, computed, action } from 'mobx';
import { users } from './data';

// import { SCALE_TYPE, RADIO_TYPE, TEXT_TYPE } from 'constants/questionTypes';

class MyFeedbackStore {
  constructor() {
    this.users = users;
  }

  @observable
  users = [];

  /**
   * [{
   *  userProfile: {},
   *  questions: {}
   * }]
   */
  @observable
  myFeedback = [
    // {
    //   userProfile: {
    //     id: 1,
    //     name: 'Jane Smith',
    //     avatar: 'https://placeimg.com/200/200/people',
    //   },
    //   questions: [
    //     {
    //       id: 1,
    //       type: SCALE_TYPE,
    //       question: 'How well did I display courage? Uh?',
    //       maxValue: 10,
    //       value: 2,
    //       text:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    //     },
    //     {
    //       id: 2,
    //       question: 'Uh?',
    //       value: 'heyu heye',
    //       type: TEXT_TYPE,
    //     },
    //     {
    //       id: 3,
    //       type: RADIO_TYPE,
    //       question: 'Whazzup?',
    //       value: 1,
    //       options: [
    //         {
    //           id: 1,
    //           text:
    //             '<strong>Please Improve</strong><br> You may have done one or the following: Maybe you were mostly quiet in meetings and when you had something on your mind, you brought it to the team afterward. Or, you had feedback that would be valuable to go, but you found it too difficult. Or, you had an opportunity to grow by doing something uncomfortable but you didn’t',
    //         },
    //         {
    //           id: 2,
    //           text:
    //             '<strong>You Were Good</strong><br> You sometimes participate in meetings but you feel that they don’t always bring up important things when they should.',
    //         },
    //         {
    //           id: 3,
    //           text:
    //             '<strong>You Were Great</strong><br> I and others can count on your courage to help the team do what is right.',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];

  @observable
  selectedUserId = null;

  @computed
  get totalUsers() {
    return this.users.length;
  }

  @computed
  get totalUsersWithMyFeedback() {
    return this.myFeedback.length;
  }

  @computed
  get isMyFeedbackExist() {
    return Boolean(this.myFeedback.length);
  }

  @computed
  get selectedUserData() {
    if (!this.isMyFeedbackExist) {
      return null;
    }

    return this.myFeedback.find(
      feedback => feedback.userProfile.id === this.selectedUserId,
    );
  }

  @action
  selectUserId = userId => (this.selectedUserId = userId);

  removeUserById = userId =>
    (this.users = this.users.filter(user => user.id !== userId));

  findUserById = userId => this.users.find(user => user.id === userId);

  save = payload => this.myFeedback.push(payload);
}

export default new MyFeedbackStore();
