const SortingLibrary = (function () {
    function bubbleSort(array, order) {
        let comparisons = 0;
        let swaps = 0;
        const n = array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (array[j] === undefined || array[j + 1] === undefined) {
                    continue; 
                }
                comparisons++;
                if ((order === 'asc' && array[j] > array[j + 1]) || (order === 'desc' && array[j] < array[j + 1])) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    swaps++;
                }
            }
        }
        console.log(`Bubble Sort: comparisons - ${comparisons}, swaps - ${swaps}`);
        return array;
    }

    function selectionSort(array, order) {
        let comparisons = 0;
        let swaps = 0;
        const n = array.length;
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (array[j] === undefined || array[minIndex] === undefined) {
                    continue; 
                }
                comparisons++;
                if ((order === 'asc' && array[j] < array[minIndex]) || (order === 'desc' && array[j] > array[minIndex])) {
                    minIndex = j;
                }
            }
            if (minIndex !== i && array[i] !== undefined && array[minIndex] !== undefined) {
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
                swaps++;
            }
        }
        console.log(`Selection Sort: comparisons - ${comparisons}, swaps - ${swaps}`);
        return array;
    }

    function insertionSort(array, order) {
        let comparisons = 0;
        let swaps = 0;
        const n = array.length;
        for (let i = 1; i < n; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && ((order === 'asc' && array[j] > key) || (order === 'desc' && array[j] < key))) {
                if (array[j] === undefined) {
                    break; 
                }
                comparisons++;
                array[j + 1] = array[j];
                j = j - 1;
                swaps++;
            }
            array[j + 1] = key;
        }
        console.log(`Insertion Sort: comparisons - ${comparisons}, swaps - ${swaps}`);
        return array;
    }

    function shellSort(array, order) {
        let comparisons = 0;
        let swaps = 0;
        const n = array.length;
        let gap = Math.floor(n / 2);
        while (gap > 0) {
            for (let i = gap; i < n; i++) {
                let temp = array[i];
                let j = i;
                while (j >= gap && ((order === 'asc' && array[j - gap] > temp) || (order === 'desc' && array[j - gap] < temp))) {
                    if (array[j - gap] === undefined) {
                        break; 
                    }
                    comparisons++;
                    array[j] = array[j - gap];
                    j -= gap;
                    swaps++;
                }
                array[j] = temp;
            }
            gap = Math.floor(gap / 2);
        }
        console.log(`Shell Sort: comparisons - ${comparisons}, swaps - ${swaps}`);
        return array;
    }

    function quickSort(array, order) {
        function partition(array, low, high) {
            let pivot = array[high];
            let i = low - 1;
            for (let j = low; j < high; j++) {
                if (array[j] === undefined || pivot === undefined) {
                    continue; 
                }
                if ((order === 'asc' && array[j] < pivot) || (order === 'desc' && array[j] > pivot)) {
                    i++;
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
            [array[i + 1], array[high]] = [array[high], array[i + 1]];
            return i + 1;
        }

        function quickSortUtil(array, low, high) {
            if (low < high) {
                let pi = partition(array, low, high);
                quickSortUtil(array, low, pi - 1);
                quickSortUtil(array, pi + 1, high);
            }
        }

        let comparisons = 0;
        let swaps = 0;
        quickSortUtil(array, 0, array.length - 1);
        console.log(`Quick Sort: comparisons - ${comparisons}, swaps - ${swaps}`);
        return array;
    }

    return {
        bubbleSort,
        selectionSort,
        insertionSort,
        shellSort,
        quickSort
    };
})();

const array = generateRandomArray(100);
console.log('Початковий масив:');
console.log(array);

const bubbleSortedAscending = SortingLibrary.bubbleSort(array.slice(), 'asc');
console.log('Bubble Sort (за зростанням):');
console.log(bubbleSortedAscending);

const selectionSortedAscending = SortingLibrary.selectionSort(array.slice(), 'asc');
console.log('Selection Sort (за зростанням):');
console.log(selectionSortedAscending);

const insertionSortedAscending = SortingLibrary.insertionSort(array.slice(), 'asc');
console.log('Insertion Sort (за зростанням):');
console.log(insertionSortedAscending);

const shellSortedAscending = SortingLibrary.shellSort(array.slice(), 'asc');
console.log('Shell Sort (за зростанням):');
console.log(shellSortedAscending);

const quickSortedAscending = SortingLibrary.quickSort(array.slice(), 'asc');
console.log('Quick Sort (за зростанням):');
console.log(quickSortedAscending);

function generateRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 300) + 1);
    }
    return array;
}
