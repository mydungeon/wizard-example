export interface WizardHeaderProps {
    handleBack: () => void;
    handleNext: () => void;
    isFirstStep: boolean;
    isLastStep: boolean;
}