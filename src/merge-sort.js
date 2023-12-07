export default function mergeSort(array) {
  const midpoint = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, midpoint);
  const secondHalf = array.slice(midpoint, array.length);
  if (array.length === 1) {
    return [array[0]];
  }
  let a = mergeSort(firstHalf);
  let b = mergeSort(secondHalf);
  let c = [];

  for (let i = 0, j = 0; i < a.length || j < b.length; ) {
    if (j == b.length) {
      c.push(a[i]);
      i++;
    } else if (i == a.length) {
      c.push(b[j]);
      j++;
    } else if (a[i] == b[j]) {
      i++;
    } else if (a[i] < b[j]) {
      c.push(a[i]);
      i++;
    } else {
      c.push(b[j]);
      j++;
    }
  }
  return c;
}
