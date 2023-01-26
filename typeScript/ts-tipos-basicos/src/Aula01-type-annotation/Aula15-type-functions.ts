type MapStringsCallback = (item: string) => string;

export function mapStrings(
  array: string[],
  callback: MapStringsCallback,
): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callback(item));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const callback = mapStrings(abc, (item) => item.toUpperCase());
console.log(callback);
