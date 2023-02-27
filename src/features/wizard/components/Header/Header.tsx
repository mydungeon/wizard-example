import React from "react";
import { WizardHeaderProps } from "./Header.types";
import BackButton from "./components/Button";
import NextButton from "./components/Button";

function ButtonControls(props: WizardHeaderProps) {
    const { handleBack, handleNext, isFirstStep, isLastStep } = props
    const backButton = <BackButton buttonText="Back" name="backButton" onClick={handleBack} />
    const nextButton = <NextButton buttonText="Next" name="nextButton" onClick={handleNext} />
    if (isFirstStep) {
        return nextButton
    } else if (isLastStep) {
        return backButton
    } else {
        return <>
            {backButton}
            {nextButton}
        </>
    }
}

export default function WizardHeader(props: WizardHeaderProps) {
    return (<div className="wizardHeader">
        <ButtonControls {...props} />
    </div>)
}