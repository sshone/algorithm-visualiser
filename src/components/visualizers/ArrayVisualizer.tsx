import { Step } from "@/types/algorithm";
import React from "react";

type Props = {
    step: Step | null;
};

const ArrayVisualizer: React.FC<Props> = ({ step }) => {
    if (!step) {
        return null;
    }

    const maxBarHeight = 80; // Maximum height of the bars
    const maxBarValue = Math.max(...step.array);

    return (
        <div className="flex flex-wrap justify-center mt-4">
            {step.array.map((value, index) => {
                const isCurrent = index === step.activeIndices[0];
                const isCompare = step.activeIndices.includes(index);
                const isSwap = step.doneIndices.includes(index);
                const bgColor = isCurrent
                    ? "bg-yellow-500"
                    : isCompare
                        ? "bg-red-500"
                        : isSwap
                            ? "bg-green-500"
                            : "bg-blue-500";

                const barHeight = Math.floor((value / maxBarValue) * maxBarHeight);
                return (
                    <div
                        key={index}
                        className={`w-4 mx-1 my-1 ${bgColor}`}
                        style={{ height: `${barHeight}px` }}
                    ></div>
                );
            })}
        </div>
    );
};

export default ArrayVisualizer;
