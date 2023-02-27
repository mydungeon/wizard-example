import React from "react";
import WizardHeader from "src/features/wizard/components/Header";
import { StepProps } from "./Step.types";

export default function Step({children, handleBack, handleNext, isCurrentStep, isFirstStep, isLastStep}: StepProps) {
    return (isCurrentStep ? <div className="step">
        <WizardHeader handleBack={handleBack} handleNext={handleNext} isFirstStep={isFirstStep} isLastStep={isLastStep} />
        { children }
    </div> : null);
}