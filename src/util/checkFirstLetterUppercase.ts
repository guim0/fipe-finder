export function checkFirstLetterUpcase(word: string) {
  return word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90;
}
