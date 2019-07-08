import React from 'react';
import cx from 'classnames';

import { SCALE_TYPE, RADIO_TYPE, TEXT_TYPE } from 'constants/questionTypes';
import { getClassNameForAnswer } from 'helpers/getClassNameForAnswer';
import styles from './Viewer.module.scss';

const Viewer = props => {
  const { question } = props;

  switch (props.type) {
    case RADIO_TYPE:
      return (
        <div className={cx(styles.root)}>
          <div className="column">{question}</div>
          <div className="column">
            <BlocksRender
              size={props.options.length}
              value={props.value}
              tooltip={props.options.find(item => item.id === props.value).text}
              className={getClassNameForAnswer(
                props.options.length,
                props.value,
              )}
            />
          </div>
        </div>
      );
    case SCALE_TYPE:
      return (
        <div className={cx(styles.root)}>
          <div className="column">{question}</div>
          <div className="column">
            <BlocksRender
              size={props.maxValue}
              value={props.value}
              className={getClassNameForAnswer(props.maxValue, props.value)}
            />
          </div>
        </div>
      );
    case TEXT_TYPE:
      return (
        <div className={styles.root}>
          <div className="column">{props.value}</div>
        </div>
      );
    default:
      return null;
  }
};

const BlocksRender = ({ size, className, value = 0, tooltip }) => {
  const tooltipText =
    tooltip && tooltip.replace(/<br>/gm, ' - ').replace(/<[^>]*>?/gm, '');

  return (
    <div
      className={cx(styles.blocks, { 'tooltip is-tooltip-multiline': tooltip })}
      data-tooltip={tooltipText}
    >
      {[...Array(size)].map((_item, idx) => (
        <div
          key={idx}
          className={cx(styles.block, {
            [styles[className]]: idx + 1 <= value,
          })}
        />
      ))}
    </div>
  );
};

export default Viewer;
