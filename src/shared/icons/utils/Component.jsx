import * as AllIcons from '../../../features/icons';

export const getIconComponent = (iconName, skipError = false) => {
  let result = AllIcons.QuestionMark;

  if (iconName && typeof iconName === 'string' && AllIcons[iconName]) {
    result = AllIcons[iconName];
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
