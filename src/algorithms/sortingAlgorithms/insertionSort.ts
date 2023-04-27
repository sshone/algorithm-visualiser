import { Step, Algorithm } from "@/types/algorithm";

const insertionSort: Algorithm = {
    name: "Insertion Sort",
    description: "A simple, in-place sorting algorithm that builds the final sorted array one item at a time.",
    run: (input: number[]): Step[] => {
      const steps: Step[] = [];
      const arr = [...input];
  
      for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
          steps.push({
            array: [...arr],
            activeIndices: [j - 1, j],
            doneIndices: [],
          });
  
          // Swap the elements
          [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
          j--;
        }
        steps.push({
          array: [...arr],
          activeIndices: [],
          doneIndices: Array.from({ length: i + 1 }, (_, idx) => idx),
        });
      }
  
      return steps;
    },
  };
  
  export default insertionSort;