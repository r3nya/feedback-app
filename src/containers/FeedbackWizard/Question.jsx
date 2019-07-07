import React from 'react';
import { SCALE_TYPE, RADIO_TYPE, TEXT_TYPE } from 'constants/questionTypes';
import { Radio } from './inputs/Radio';
import { TextArea } from './inputs/TextArea';
import { Scale } from './inputs/Scale';

const Question = props => {
  switch (props.type) {
    case RADIO_TYPE:
      return (
        <Radio
          id={props.id}
          options={props.options}
          setAnswer={props.setAnswer}
          value={props.value}
        />
      );
    case TEXT_TYPE:
      return (
        <TextArea
          id={props.id}
          value={props.value}
          setAnswer={props.setAnswer}
        />
      );
    case SCALE_TYPE:
      return (
        <Scale
          id={props.id}
          setAnswer={props.setAnswer}
          value={props.value}
          maxValue={props.maxValue}
          text={props.text}
        />
      );
    default:
      return null;
  }
};

export { Question };
