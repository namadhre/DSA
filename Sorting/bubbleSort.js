function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++ ) {
            console.log(arr)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr)
}

bubbleSort([10, 8, 20, 5]);