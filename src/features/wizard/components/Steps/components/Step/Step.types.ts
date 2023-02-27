export interface StepProps {
    children?: JSX.Element | JSX.Element[];
    handleBack: () => void;
    handleNext: () => void;
    isCurrentStep: boolean;
    isFirstStep: boolean;
    isLastStep: boolean;
}