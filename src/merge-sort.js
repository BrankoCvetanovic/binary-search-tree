export default function mergeSort(array) {
  const midpoint = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, midpoint);
  const secondHalf = array.slice(midpoint, array.length);
  if (array.length === 1) {
    return [array[0]];
  }
  const a = mergeSort(firstHalf);
  const b = mergeSort(secondHalf);
  const c = [];

  for (let i = 0, j = 0; i < a.length || j < b.length; ) {
    if (j === b.length) {
      c.push(a[i]);
      i += 1;
    } else if (i === a.length) {
      c.push(b[j]);
      j += 1;
    } else if (a[i] === b[j]) {
      i += 1;
    } else if (a[i] < b[j]) {
      c.push(a[i]);
      i += 1;
    } else {
      c.push(b[j]);
      j += 1;
    }
  }
  return c;
}
