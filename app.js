var arr = [1, 5, 3, 8, 9, 4, 3, 7, 6, 2];
var temp;

for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}

console.log(arr);