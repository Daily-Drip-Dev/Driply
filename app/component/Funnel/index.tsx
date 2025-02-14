import React from 'react';
import { useFunnel } from './useFunnel';
import { useNavigate } from '@remix-run/react';
import ActionHeader from '../ActionHeader';
import styles from './styles.css';
import Button from '../Button';

interface FunnelProps {
  children: React.ReactNode;
  initialStep: string;
  steps: string[];
  onSubmit: (data: unknown) => void;
}

export function Funnel({ children, initialStep, steps, onSubmit }: FunnelProps) {
  const { currentStep, isFirstStep, isLastStep, moveToPrevStep, moveToNextStep } = useFunnel(initialStep, steps);

  const navigate = useNavigate();
  const moveToPrevPage = () => {
    if (confirm('뒤로 가면 입력한 데이터는 모두 지워집니다. 계속 하시겠습니까?')) {
      navigate(-1);
    }
  };

  return (
    <div>
      <ActionHeader onBack={isFirstStep ? moveToPrevPage : moveToPrevStep}>
        <ActionHeader.CenterContent>새 기록 작성</ActionHeader.CenterContent>
      </ActionHeader>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && child.props.name === currentStep ? child : null
      )}
      <div className={styles.buttonContainer}>
        <Button onClick={isLastStep ? onSubmit : moveToNextStep} className={styles.button} disabled={isLastStep}>
          {isLastStep ? '완료' : '다음'}
        </Button>
      </div>
    </div>
  );
}

interface StepProps {
  name: string;
  children: React.ReactNode;
}

export function Step({ children }: StepProps) {
  return <div className={styles.stepContainer}>{children}</div>;
}

Funnel.Step = Step;

export default Funnel;
