import React, { useState } from "react";
import AlgorithmVisualizer from "./visualizers/AlgorithmVisualizer";
import bubbleSort from "../algorithms/sortingAlgorithms/bubbleSort";
import insertionSort from "../algorithms/sortingAlgorithms/insertionSort";
import selectionSort from "../algorithms/sortingAlgorithms/selectionSort";
import quickSort from "@/algorithms/sortingAlgorithms/quickSort";

const SortingAlgorithms = () => {
    const [arraySize, setArraySize] = useState(50);
    const [array, setArray] = useState<number[]>(() =>
        generateRandomArray(arraySize)
    );
    const [speed, setSpeed] = useState(500);
    const [isRunning, setIsRunning] = useState(false);

    function generateRandomArray(size: number): number[] {
        return Array.from({ length: size }, () =>
            Math.floor(Math.random() * 100) + 1
        );
    }

    function handleArraySizeChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newSize = parseInt(event.target.value);
        setArraySize(newSize);
        setArray(generateRandomArray(newSize));
    }

    function handleSpeedChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSpeed(parseInt(event.target.value));
    }

    function handleRunClick() {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    }

    function handleGenerateNewValues() {
        setArray(generateRandomArray(arraySize));
    }

    return (
        <div>
            <div className="flex flex-col">
                <AlgorithmVisualizer
                    algorithm={bubbleSort}
                    name={bubbleSort.name}
                    array={array}
                    speed={speed}
                    isRunning={isRunning}
                />
                <br />
                <AlgorithmVisualizer
                    algorithm={insertionSort}
                    name={insertionSort.name}
                    array={array}
                    speed={speed}
                    isRunning={isRunning}
                />
                <br />
                <AlgorithmVisualizer
                    algorithm={selectionSort}
                    name={selectionSort.name}
                    array={array}
                    speed={speed}
                    isRunning={isRunning}
                />
                <AlgorithmVisualizer
                    algorithm={quickSort}
                    name={quickSort.name}
                    array={array}
                    speed={speed}
                    isRunning={isRunning}
                />
                <br />
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
                <div className="flex items-center justify-center space-x-2">
                    <label htmlFor="inputSize">Input Size:</label>
                    <input
                        type="range"
                        id="inputSize"
                        min="10"
                        max="100"
                        step="10"
                        value={arraySize}
                        onChange={handleArraySizeChange}
                        className="w-40"
                    />
                </div>
                <div className="flex items-center justify-center space-x-2 mt-2">
                    <label htmlFor="speed">Speed:</label>
                    <input
                        type="range"
                        id="speed"
                        min="10"
                        max="1000"
                        step="10"
                        value={speed}
                        onChange={handleSpeedChange}
                        className="w-40"
                    />
                </div>
                <div className="flex items-center justify-center mt-4 space-x-4">
                    <button
                        onClick={handleRunClick}
                        className="px-4 py-2 text-white bg-blue-500 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
                    >
                        {isRunning ? "Pause" : "Play"}
                    </button>
                    <button
                        onClick={handleGenerateNewValues}
                        className="px-4 py-2 text-white bg-blue-500 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
                    >
                        Generate New Values
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SortingAlgorithms;