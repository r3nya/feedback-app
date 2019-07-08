import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './Scale.module.scss';

const Scale = ({ maxValue = 10, setAnswer, id, value, text }) => {
  const [hoveredItem, setHoveredItem] = useState(-1);
  const [selectedItem, setSelectedItem] = useState(-1);

  useEffect(() => {
    if (value) {
      setSelectedItem(value - 1);
    }
  }, [value]);

  const handleHoverItem = idx => {
    setHoveredItem(idx);
  };

  const handleUnhoverItem = () => {
    setHoveredItem(-1);
  };

  const handleClick = idx => {
    setSelectedItem(idx);
    setAnswer({ value: idx + 1, questionId: id });
  };

  return (
    <div className={styles.root}>
      {text && <p className="is-size-5">{text}</p>}

      <br />

      <div className={styles.scaleContainer}>
        {[...Array(maxValue)].map((_item, idx) => (
          <span
            key={idx}
            className={cx(styles.scaleItem, {
              [styles.selected]: idx <= selectedItem && hoveredItem === -1,
              [styles.hovered]: idx <= hoveredItem,
            })}
            onMouseEnter={() => handleHoverItem(idx)}
            onMouseLeave={handleUnhoverItem}
            onClick={() => handleClick(idx)}
          />
        ))}
      </div>
      <span className={styles.score}>
        {hoveredItem !== -1 ? hoveredItem + 1 : selectedItem + 1} / {maxValue}
      </span>
    </div>
  );
};

export default Scale;
