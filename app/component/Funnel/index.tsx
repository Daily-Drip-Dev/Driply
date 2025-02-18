import React from 'react';
import { useFunnel } from './useFunnel';
import { useNavigate } from '@remix-run/react';
import ActionHeader from '../ActionHeader';
import Button from '../Button';
import styles from './styles.css';
import { typography } from 'src/vanilla-extract/typography.css';

interface FunnelProps {
  children: React.ReactNode;
  steps: string[];
  onSubmit: (data: unknown) => void;
  title: string;
}

export function Funnel({ children, steps, onSubmit, title }: FunnelProps) {
  const { currentStep, isFirstStep, isLastStep, moveToPrevStep, moveToNextStep } = useFunnel(steps[0], steps);

  const navigate = useNavigate();
  const moveToPrevPage = () => {
    if (confirm('뒤로 가면 입력한 데이터는 모두 지워집니다. 계속 하시겠습니까?')) {
      navigate(-1);
    }
  };

  return (
    <>
      <ActionHeader onBack={isFirstStep ? moveToPrevPage : moveToPrevStep}>
        <ActionHeader.CenterContent>
          <h1 className={typography.heading3}>{title}</h1>
        </ActionHeader.CenterContent>
      </ActionHeader>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && child.props.name === currentStep ? child : null
      )}
      <div className={styles.buttonContainer}>
        <Button onClick={isLastStep ? onSubmit : moveToNextStep} className={styles.button} disabled={isLastStep}>
          {isLastStep ? '완료' : '다음'}
        </Button>
      </div>
    </>
  );
}

interface StepProps {
  name: string;
  children: React.ReactNode;
}

export function Step({ children }: StepProps) {
  return <section className={styles.stepContainer}>{children}</section>;
}

Funnel.Step = Step;

export default Funnel;
