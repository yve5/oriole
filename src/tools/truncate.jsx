export const truncate = (text, max = 100) =>
  text && text.length > max ? `${text.substring(0, max - 3)}...` : text;
