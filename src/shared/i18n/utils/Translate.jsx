import { formatDate } from './Format';

export const tsl = (dictionary, text, args = {}, skipError = false) => {
  let result;

  if (typeof text === 'string') {
    const translated = dictionary[text];
    let isJustVariableToReplace = false;

    if (typeof args === 'object' && args !== null) {
      Object.keys(args).forEach((key) => {
        if (text === key) {
          isJustVariableToReplace = true;
        }
      });
    }

    if (isJustVariableToReplace) {
      result = text;
    } else if (translated) {
      result = translated;
    } else {
      const errorMessage = `Not translated input: ${text}`;
      result = text;

      if (process.env.NODE_ENV !== 'test' || skipError) {
        console.warn(errorMessage);
      } else {
        throw new Error(errorMessage);
      }
    }

    if (typeof args === 'object' && args !== null) {
      Object.keys(args).forEach((key) => {
        const property = args[key];

        if (
          typeof property === 'object' &&
          property !== null &&
          'date' in property
        ) {
          const { date, format: formatCopy } = property;
          result = result
            .split(key)
            .join(formatDate(date, formatCopy, dictionary.LOCALE));
        } else {
          result = result.split(key).join(property);
        }
      });
    }
  }

  return result;
};
