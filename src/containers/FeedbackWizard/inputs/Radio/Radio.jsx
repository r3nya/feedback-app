import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './Radio.module.scss';

const Radio = ({ options, setAnswer, value, id }) => {
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  if (!options) {
    return null;
  }

  const handleSetAnswer = option => {
    setSelected(option.id);
    setAnswer({ questionId: id, value: option.id });
  };

  return (
    <div className={styles.root}>
      {options.map(item => (
        <div
          key={item.id}
          onClick={() => handleSetAnswer(item)}
          className={cx(styles.item, {
            [styles.selected]: item.id === selected,
          })}
          dangerouslySetInnerHTML={{
            __html: item.text,
          }}
        />
      ))}
    </div>
  );
};

export default Radio;
