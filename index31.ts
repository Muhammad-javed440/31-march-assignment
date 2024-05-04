function swapElements(array, index1, index2) {
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        // If indices are out of bounds, return the original array
        return array;
    }

    // Swapping elements
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
console.log(swapElements(myArray, 1, 3)); // Output: [1, 4, 3, 2, 5]
