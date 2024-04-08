/*
 * Slowsort is a sorting algorithm that is based on the principle of multiply and surrender.
 * It is both recursive and a comparison sort.
 * @param {Array} arr
 */

function slowsort(arr, start, end) {
  if (start >= end) return;
  let mid = Math.floor((start + end) / 2);
  slowsort(arr, start, mid);
  slowsort(arr, mid + 1, end);
  if (arr[mid] > arr[end]) {
    [arr[mid], arr[end]] = [arr[end], arr[mid]];
  }
  slowsort(arr, start, end - 1);
}
