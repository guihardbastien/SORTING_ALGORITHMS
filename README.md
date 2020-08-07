# SORTING ALGORITHMS
## Description
Sorting algorithms implementation
## Overview
!(sorting_hat)[https://media.giphy.com/media/N3tNKBmQR3K2k/source.gif]
### Directory structure
```bash
.
├── errors.ts
├── index.ts
├── sorting_algorithms.ts
└── utils
    └── index.ts
```
### How to build the library to be used in production-ready projects?
```bash
npm install <lib_name>
```
### How to use?
__Example:__

```typescript
Import * as Algs from 'sorting-algorithms'

const arr: number[] = [7, 5, 2];
const test = Algs.bubbleSort(arr);
console.log(test);
// output: [2, 5, 7]
```
### Features
TBA

* Insertion sort:
    * Worst case: __O(n²)__
    * Average case: __O(n²)__
* Selection sort:
    * Worst case:__O(n²)__
    * Avergare case:__O(n²)__
* Heap sort:
    * Worst case:__O(n log n)__
    * Avergare case:__O(n log n)__
* Quick sort:
    * Worst case:__O(n²)__
    * Avergare case:__O(n log n)__
* Bubble sort:
    * Worst case:__O(n²)__
    * Avergare case:__O(n²)__
* Merge sort:
    * Worst case:__O(n log n)__
    * Avergare case:__O(n log n)__
## NPM custom commands

- `build`: Build the JavaScript files.
- `build:watch`: Build the JavaScript files in watch mode.
- `test`: Run jest in test mode.
- `test:watch`: Run jest in interactive test mode.
- `docs`: Generate the docs directory.
- `lint`: Runs linter on the whole project.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

*Bastien GUIHARD*
