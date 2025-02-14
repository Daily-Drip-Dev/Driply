import { useState } from 'react';

export function useFunnel(initialStep: string, steps: string[]) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const stepIndex = steps.indexOf(currentStep);

  const moveToPrevStep = () => {
    const prevStep = steps[stepIndex - 1];
    if (prevStep) {
      setCurrentStep(prevStep);
    }
  };

  const moveToNextStep = () => {
    const nextStep = steps[stepIndex + 1];
    if (nextStep) {
      setCurrentStep(nextStep);
    }
  };

  return {
    currentStep,
    isFirstStep: stepIndex === 0,
    isLastStep: stepIndex === steps.length - 1,
    moveToPrevStep,
    moveToNextStep,
  };
}
