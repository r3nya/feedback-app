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
    question: 'How well did I display courage? Uh?',
    maxValue: 10,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 2,
    question: 'Uh?',
    type: TEXT_TYPE,
  },
  {
    id: 3,
    type: RADIO_TYPE,
    question: 'Whazzup?',
    options: [
      {
        id: 1,
        text:
          '<strong>Please Improve</strong></br> You may have done one or the following: Maybe you were mostly quiet in meetings and when you had something on your mind, you brought it to the team afterward. Or, you had feedback that would be valuable to go, but you found it too difficult. Or, you had an opportunity to grow by doing something uncomfortable but you didn’t',
      },
      {
        id: 2,
        text:
          '<strong>You Were Good</strong></br> You sometimes participate in meetings but you feel that they don’t always bring up important things when they should.',
      },
      {
        id: 3,
        text:
          '<strong>You Were Great</strong></br> I and others can count on your courage to help the team do what is right.',
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
    avatar: 'https://placeimg.com/200/200/people',
  },
  {
    id: 2,
    name: 'Nico Perez',
    avatar: 'https://placeimg.com/200/200/people',
  },
  {
    id: 3,
    name: 'Nathaniel Moon',
    avatar: 'https://placeimg.com/200/200/people',
  },
  {
    id: 4,
    name: 'Denis Denison',
    avatar: 'https://placeimg.com/200/200/people',
  },
  {
    id: 5,
    name: 'Paul Carter',
    avatar: 'https://placeimg.com/200/200/people',
  },
  {
    id: 6,
    name: 'Chris Johnson',
    avatar: 'https://placeimg.com/200/200/people',
  },
];
