import { SCALE_TYPE, RADIO_TYPE, TEXT_TYPE } from 'constants/questionTypes';

/**
 * {
 *  id: number
 *  type: 'scale' | 'radio' | 'text'
 *  question: string
 *  maxValue?: number
 *  text?: string
 *  options?: [
 *    {
 *      id: number
 *      text: string
 *    }
 *  ]
 *  value?: string | number
 * }
 */
export const questions = [
  {
    id: 1,
    type: SCALE_TYPE,
    question: 'Is this person an Expert?',
    maxValue: 10,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 2,
    question: 'How well does this person do X?',
    type: TEXT_TYPE,
  },
  {
    id: 3,
    type: RADIO_TYPE,
    question: 'How did this person handled X?',
    options: [
      {
        id: 1,
        text:
          '<strong>Please Improve</strong><br> You may have done one or the following: Maybe you were mostly quiet in meetings and when you had something on your mind, you brought it to the team afterward. Or, you had feedback that would be valuable to go, but you found it too difficult. Or, you had an opportunity to grow by doing something uncomfortable but you didn’t',
      },
      {
        id: 2,
        text:
          '<strong>You Were Good</strong><br> You sometimes participate in meetings but you feel that they don’t always bring up important things when they should.',
      },
      {
        id: 3,
        text:
          '<strong>You Were Great</strong><br> I and others can count on your courage to help the team do what is right.',
      },
    ],
  },
];

/**
 * {
 *  id: number
 *  name: string
 *  avatar: string
 *  submitted?: boolean
 * }
 */

export const users = [
  {
    id: 1,
    name: 'Jane Smith',
    avatar: 'https://placeimg.com/200/200/arch/grayscale',
  },
  {
    id: 2,
    name: 'Nico Perez',
    avatar: 'https://placeimg.com/200/200/people/grayscale',
  },
  {
    id: 3,
    name: 'Nathaniel Moon',
    avatar: 'https://placeimg.com/200/200/people/sepia',
  },
  {
    id: 4,
    name: 'Denis Denison',
    avatar: 'https://placeimg.com/200/200/people',
  },
  {
    id: 5,
    name: 'Paul Carter',
    avatar: 'https://placeimg.com/200/200/nature/sepia',
  },
  {
    id: 6,
    name: 'Chris Johnson',
    avatar: 'https://placeimg.com/200/200/tech/sepia',
  },
];

export const teamFeedback = [
  {
    userProfile: {
      id: 1,
      name: 'Jane Smith',
      avatar: 'https://placeimg.com/200/200/people',
    },
    questions: [
      {
        id: 1,
        type: SCALE_TYPE,
        question: 'Is this person an Expert?',
        value: 8,
        maxValue: 10,
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        id: 2,
        question: 'How well does this person do X?',
        type: RADIO_TYPE,
        value: 2,
        options: [
          {
            id: 1,
            text:
              '<strong>Please Improve</strong><br> You may have done one or the following: Maybe you were mostly quiet in meetings and when you had something on your mind, you brought it to the team afterward. Or, you had feedback that would be valuable to go, but you found it too difficult. Or, you had an opportunity to grow by doing something uncomfortable but you didn’t',
          },
          {
            id: 2,
            text:
              '<strong>You Were Good</strong><br> You sometimes participate in meetings but you feel that they don’t always bring up important things when they should.',
          },
          {
            id: 3,
            text:
              '<strong>You Were Great</strong><br> I and others can count on your courage to help the team do what is right.',
          },
          {
            id: 4,
            text:
              '<strong>You Were Great</strong><br> I and others can count on your courage to help the team do what is right.',
          },
        ],
      },
      {
        id: 3,
        question: 'How well does this person do Y?',
        type: RADIO_TYPE,
        value: 3,
        options: [
          {
            id: 1,
            text:
              '<strong>Please Improve</strong><br> You may have done one or the following: Maybe you were mostly quiet in meetings and when you had something on your mind, you brought it to the team afterward. Or, you had feedback that would be valuable to go, but you found it too difficult. Or, you had an opportunity to grow by doing something uncomfortable but you didn’t',
          },
          {
            id: 2,
            text:
              '<strong>You Were Good</strong><br> You sometimes participate in meetings but you feel that they don’t always bring up important things when they should.',
          },
          {
            id: 3,
            text:
              '<strong>You Were Great</strong><br> I and others can count on your courage to help the team do what is right.',
          },
          {
            id: 4,
            text:
              '<strong>You Were Great</strong><br> I and others can count on your courage to help the team do what is right.',
          },
          {
            id: 5,
            text:
              '<strong>You Were Great</strong><br> I and others can count on your courage to help the team do what is right.',
          },
        ],
      },
      {
        id: 4,
        question: 'How well does this person do UFIF?',
        type: TEXT_TYPE,
        skipped: true,
      },
    ],
  },
];
