import React from "react";
import WizardHeader from "./components/Header";
import { WizardProps } from "./Wizard.types";

export default function Wizard({ children }: WizardProps) {    
    return (
        <div className="wizard">
            { children }
        </div>
    )
}