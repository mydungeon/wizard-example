import React from "react";
import { StepsProps } from "./Steps.types";

export default function Steps({ children }: StepsProps) {
    return (
        <div className="steps">
            { children }
        </div>
    )
}