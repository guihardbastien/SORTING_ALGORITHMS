import * as Utils from './utils/index';

const array: number[] = [0, 12, 4, 6, 8, 5, 2, 3];
const test = mergeSort(array);
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
    for (let i = 0, len = arr.length; i < len; i += 1) {
        let minimumIndex = i;
        for (let j = i + 1, len = arr.length; j < len; j += 1) {
            if (arr[j] < arr[minimumIndex]) {
                minimumIndex = j;
            }
        }
        // swap
        const temp = arr[minimumIndex];
        arr[minimumIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

/**
 * Merge sort
 */
export function mergeSort(arr: number[]): any {
    if (arr.length <= 1) {
        return arr;
    }
    const { left, right } = Utils.divideInTwo(arr);
    return Utils.merge(mergeSort(left), mergeSort(right));
}

/**
 * Heapsort
 */
export function heapSort(arr: number[]) {
    return arr;
}

/**
 * Shellsort
 */
export function shellSort(arr: number[]) {
    return arr;
}

/**
 * Quicksort
 */
export function quickSort(arr: number[]) {
    return arr;
}
/**
 * Bubble sort
 */
export function bubbleSort(arr: number[]) {
    return arr;
}
