export interface Algorithm {
  name: string;
  description: string;
  run: (input: number[]) => Step[];
}

export type Step = {
  array: number[];
  activeIndices: number[];
  doneIndices: number[];
};
