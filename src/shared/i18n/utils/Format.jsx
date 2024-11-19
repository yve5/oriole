import { format, formatDistance, parseISO } from 'date-fns';
import { enUS, fr } from 'date-fns/locale';

import French from '../dictionaries/fr';

export const formatDate = (value, pattern = 'P', localeCode = 'enUS') => {
  const locale = localeCode === French.LANG ? fr : enUS;
  let result = '-';

  if (value instanceof Date) {
    if (pattern === 'fromNow') {
      result = formatDistance(value, new Date(), { addSuffix: true, locale });
    } else {
      result = format(value, pattern, { locale });
    }
  } else if (typeof value === 'string') {
    const stringDate = parseISO(value, 'y-MM-dd', new Date());

    if (stringDate instanceof Date && !isNaN(stringDate)) {
      if (pattern === 'fromNow') {
        result = formatDistance(stringDate, new Date(), {
          addSuffix: true,
          locale,
        });
      } else {
        result = format(stringDate, pattern, { locale });
      }
    }
  }

  return result;
};
