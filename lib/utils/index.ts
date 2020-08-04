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
