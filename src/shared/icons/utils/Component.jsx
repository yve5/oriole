export const getIconComponent = (iconName, icons, skipError = false) => {
  let result = icons.QuestionMark;

  if (iconName && typeof iconName === 'string' && icons[iconName]) {
    result = icons[iconName];
  } else {
    const errorMessage = `Not founded icon: ${iconName}`;

    if (process.env.NODE_ENV !== 'test' || skipError) {
      console.warn(errorMessage);
    } else {
      throw new Error(errorMessage);
    }
  }

  return result;
};
