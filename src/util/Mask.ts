export const Mask = (value: string) => {
  let hideChar = [];
  for (let i = 0; i < value.length; i++) {
    if (i < value.length - 4) {
      hideChar.push("#");
    } else {
      hideChar.push(value[i]);
    }
  }

  return hideChar.join("");
};
