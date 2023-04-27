import { Step, Algorithm } from "@/types/algorithm";

const quickSort: Algorithm = {
  name: "Quick Sort",
  description:
    "An efficient sorting algorithm that uses a divide-and-conquer strategy to partition the array into smaller subarrays and recursively sort them.",
  run: (input: number[]): Step[] => {
    const steps: Step[] = [];
    const arr = [...input];

    const partition = (start: number, end: number): number => {
      const pivotValue = arr[end];
      let pivotIndex = start;
      for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
          [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
          steps.push({
            array: [...arr],
            activeIndices: [i, pivotIndex],
            doneIndices: [],
          });
          pivotIndex++;
        }
      }
      [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
      steps.push({
        array: [...arr],
        activeIndices: [],
        doneIndices: Array.from({ length: end - start + 1 }, (_, idx) => start + idx),
      });
      return pivotIndex;
    };

    const quickSortHelper = (start: number, end: number) => {
      if (start < end) {
        const pivotIndex = partition(start, end);
        quickSortHelper(start, pivotIndex - 1);
        quickSortHelper(pivotIndex + 1, end);
      }
    };

    quickSortHelper(0, arr.length - 1);

    return steps;
  },
};

export default quickSort;
