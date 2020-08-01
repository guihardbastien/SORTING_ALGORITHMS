const array: number[] = [0, 4, 6, 8, 5, 2, 3];
const test = insertionSort(array);
console.log(test);

/**
 * Insertion sort
 */
export function insertionSort(arr: number[]) {
    for (let i = 0, len = arr.length; i < len; i += 1) {
        const key = arr[i];
        let j = i - 1;
        while ((j >= 0) && (arr[j] > key)) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

/**
 * Selection sort
 */
export function selectionSort(arr: number[]) {
    return true;
}

/**
 * Merge sort
 */
export function mergeSort(arr: number[]) {
    return true;
}

/**
 * Heapsort
 */
export function heapSort(arr: number[]) {
    return true;
}

/**
 * Shellsort
 */
export function shellSort(arr: number[]) {
    return true;
}

/**
 * Quicksort
 */
export function quickSort(arr: number[]) {
    return true;
}
