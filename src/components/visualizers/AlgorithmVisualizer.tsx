import React, { useState, useEffect } from "react";
import ArrayVisualizer from "./ArrayVisualizer";
import { Algorithm, Step } from "@/types/algorithm";

interface AlgorithmVisualizerProps {
    algorithm: Algorithm;
    name: string;
    array: number[];
    speed: number;
    isRunning: boolean;
}

const AlgorithmVisualizer: React.FC<AlgorithmVisualizerProps> = ({
    algorithm,
    name,
    array,
    speed,
    isRunning,
}) => {
    const [steps, setSteps] = useState<Step[]>([]);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const algorithmSteps = algorithm.run(array);
        setSteps(algorithmSteps);
        setCurrentStep(0);
    }, [algorithm, array]);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isRunning) {
            intervalId = setInterval(() => {
                setCurrentStep((prevStep) => {
                    const nextStep = prevStep + 1;
                    if (nextStep >= steps.length) {
                        clearInterval(intervalId);
                        return prevStep; // Stop at the last step
                    }
                    return nextStep;
                });
            }, speed);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning, speed, steps.length]);

    const handleStepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const step = parseInt(event.target.value);
        setCurrentStep(step);
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-xl font-medium mb-2">{name}</h2>
            <p className="text-gray-600 mb-2">{algorithm.description}</p>
            <p className="text-gray-600 mb-4">
                Step {currentStep + 1} of {steps.length}
            </p>
            <input
                type="range"
                min={0}
                max={steps.length - 1}
                value={currentStep}
                onChange={handleStepChange}
                className="w-full mb-4"
            />
            <ArrayVisualizer step={steps[currentStep]} />
        </div>
    );
};

export default AlgorithmVisualizer;
