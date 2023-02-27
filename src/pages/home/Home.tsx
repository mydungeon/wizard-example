import React, { useState } from 'react'
import Wizard from 'src/features/wizard'
import Steps from 'src/features/wizard/components/Steps'
import Step from 'src/features/wizard/components/Steps/components/Step'
import { wizardData } from 'src/features/wizard/Wizard.data'

export default function HomePage() {
    const [wizardStep, setWizardStep] = useState(0)
    const handleBack = () => setWizardStep(wizardStep-1)
    const handleNext = () => setWizardStep(wizardStep+1)

    return (<div className="home">
        <h1>Wizard Example</h1>
        <Wizard>
            <Steps>
                {wizardData.map(({name}, index, array) => {
                    return <Step key={index} handleBack={handleBack} handleNext={handleNext} isCurrentStep={wizardStep === index} isFirstStep={wizardStep === 0} isLastStep={wizardStep === array.length - 1}>
                        <div>{name}</div>
                    </Step>
                })
            }
            </Steps>
        </Wizard>
    </div>)
}