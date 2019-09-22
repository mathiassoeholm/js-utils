// Copied from https://github.com/sindresorhus/array-move
export const arrayMove = (array: any[], from: number, to: number) => {
  array = array.slice();
  array.splice(to, 0, array.splice(from, 1)[0]);
  return array;
};
