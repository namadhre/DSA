const swap = require('./swap');

function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let x = arr[i];
        let j = i - 1;
        while (j >= 0 && x > arr[j]) {
            arr[j+1] = arr[j];
            j -= 1
        }
        arr[j+1] = x;
        // for (let j = 0; j < i; j++) {
        //     if (arr[i] < arr[j]) {
        //         swap(i, j, arr);
        //     }
        // }
    }
}

// const arr = [20, 5, 40, 60, 10, 30];
const arr = [1, 2, 3, 4, 5];
insertionSort(arr);
console.log(arr);
