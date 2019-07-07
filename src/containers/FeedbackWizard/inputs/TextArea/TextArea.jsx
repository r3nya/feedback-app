import React from 'react';

const TextArea = ({ id, value, setAnswer }) => {
  const handleChange = ({ currentTarget }) => {
    setAnswer({ questionId: id, value: currentTarget.value });
  };

  return (
    <textarea
      className="textarea"
      placeholder="Don't worry"
      rows={6}
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextArea;
