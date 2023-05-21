const isForPhone = (text: string): boolean => {
  return /^[\d]+$/.test(text);
}

export const isCorrectPhone = (text: string): boolean => {
  return isForPhone(text) && text.length > 11 && text?.[0] !== '7';
}