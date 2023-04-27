import { Step, Algorithm } from "@/types/algorithm";

const selectionSort: Algorithm = {
  name: "Selection Sort",
  description:
    "A sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning.",
  run: (input: number[]): Step[] => {
    const steps: Step[] = [];
    const arr = [...input];

    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
      steps.push({
        array: [...arr],
        activeIndices: [i, minIndex],
        doneIndices: Array.from({ length: i }, (_, idx) => idx),
      });
    }

    steps.push({
      array: [...arr],
      activeIndices: [],
      doneIndices: Array.from({ length: arr.length }, (_, idx) => idx),
    });

    return steps;
  },
};

export default selectionSort;
