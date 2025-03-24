export default function shuffleTwoArrays(array1, array2) {
  const result = [];
  const n = array1.length;
  const m = array2.length;

  // shuffle arrays altenatively
  for (let i = 0; i < Math.min(n, m); i++) {
    let j = i * 2;
    result[j] = array1[i];
    result[j + 1] = array2[i];
  }

  // Add remaining elements from the longer array
  if (n > m) {
    result.push(...array1.slice(m));
  } else if (m > n) {
    result.push(...array2.slice(n));
  }

  return result;
}
