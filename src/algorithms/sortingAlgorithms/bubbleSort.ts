import { Algorithm, Step } from "@/types/algorithm";

const bubbleSort: Algorithm = {
  name: "Bubble Sort",
  description:
    "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
  run: (input: number[]): Step[] => {
    const steps: Step[] = [];
    const arr = [...input];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        steps.push({
          array: [...arr],
          activeIndices: [j, j + 1],
          doneIndices: [],
        });

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
      steps.push({
        array: [...arr],
        activeIndices: [],
        doneIndices: Array.from(
          { length: i + 1 },
          (_, idx) => arr.length - idx - 1
        ),
      });
    }

    return steps;
  },
};

export default bubbleSort;
