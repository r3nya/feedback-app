export const getClassNameForAnswer = (size, value) => {
  const percentage = value / size;

  if (percentage <= 0.2) {
    return 'omg';
  }

  if (percentage <= 0.4) {
    return 'very-low';
  }

  if (percentage <= 0.6) {
    return 'so-so';
  }

  if (percentage <= 0.8) {
    return 'not-bad';
  }

  return 'awesome';
};

export default getClassNameForAnswer;
