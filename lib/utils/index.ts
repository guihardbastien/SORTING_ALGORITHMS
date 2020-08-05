import { LENGTH_ERROR } from '../errors';

/**
 * Check length
 */
export function checkArrayLength(arr: number[]) {
    if ((arr.length === 0) || (arr.length === 1)) {
        LENGTH_ERROR;
    }
    return;
}

/**
 * divide an array in two
 */
export function divideInTwo(arr:number[]) {
    const middle = Math.floor(arr.length / 2);

    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return { left, right };
}

/**
 * Check and merge for merge sort
 */
export function merge(left: number[], right: number[]) {
    const resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    // Merge the two arrays: left and right
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex += 1;
        } else {
            resultArray.push(right[rightIndex]);
		          rightIndex += 1;
        }
    }
    return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

/**
 * Build max heap
 */
export function buildMaxHeap(array: number[]): number[] {
    const bufferArr = array;
    let i = array.length / 2 - 1;
    i = Math.floor(i);

    while (i >= 0) {
        heapify(bufferArr, i, array.length);
        i -= 1;
    }
    return bufferArr;
}

/**
 * Heapify
 */
export function heapify(arr:number[], i: number, max: number):number[] {
    let heap = arr;
    let index = i;
    while (index < max) {
        const leftChild = 2 * index + 1;
        const rightChild = leftChild + 1;
        let currentIndex = index;
        if (leftChild < max && heap[leftChild] > heap[currentIndex]) {
            currentIndex = leftChild;
        }
        if (rightChild < max && heap[rightChild] > heap[currentIndex]) {
            currentIndex = rightChild;
        }
        if (currentIndex === index) {
            return heap;
        }
        heap = swap(heap, index, currentIndex);
        index = currentIndex;
    }
    return heap;
}

/**
 * swaps firstIndex with secondIndex
 */
export function swap(arr: number[], firstIndex: number, secondIndex: number) {
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
    return arr;
}

/**
 * partition for quicksort
 */
export function partition(arr: number[], low:number, high:number): number {
    let q = low;
    let i;
    for (i = low; i < high; i += 1) {
        if (arr[i] < arr[high]) {
            swap(arr, i, q);
            q += 1;
        }
    }
    swap(arr, i, q);
    return q;
}
