function optimizedBubbleSort(arr) {
    arrLength = arr.length;
    for (let i = 0; i < arrLength-1; i++) {
        let swapped = false;
        for (let j = 0; j < arrLength-i-1; j++) {
            console.log(count, arr);
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
                swapped = true;
            }
        }
        if (!swapped) {
            return arr;
        }
    }
    return arr;
}

console.log('Optimized bubble sort', optimizedBubbleSort([1, 10, 3, 5, 8, 9, 10, 20]))