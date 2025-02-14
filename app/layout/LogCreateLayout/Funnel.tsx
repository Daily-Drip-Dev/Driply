import React from 'react';
import { useFunnel } from '~/component/Funnel/useFunnel';

interface FunnelProps {
  children: React.ReactNode;
  initialStep: string;
  steps: string[];
}

export const Funnel = ({ children, initialStep, steps }: FunnelProps) => {
  const { currentStep, isFirstStep, isLastStep, moveToPrevStep, moveToNextStep } = useFunnel(initialStep, steps);

  return (
    <>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && child.props.name === currentStep ? child : null
      )}
      {React.cloneElement(children as React.ReactElement, {
        funnelProps: { isFirstStep, isLastStep, moveToPrevStep, moveToNextStep },
      })}
    </>
  );
};

interface StepProps {
  name: string;
  children: React.ReactNode;
}

export const Step = ({ children, name }: StepProps) => {
  return (
    <div>
      {name}
      {children}
    </div>
  );
};
