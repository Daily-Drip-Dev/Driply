import { useNavigate } from '@remix-run/react';
import { useState } from 'react';
import ActionHeader from '~/component/ActionHeader';
import Button from '~/component/Button';
import styles from './styles.css';

const STEPS = ['score', 'meta'] as const;

export default function LogCreateLayout() {
  const [currentStep, setCurrentStep] = useState<(typeof STEPS)[number]>('score');
  const stepIndex = STEPS.indexOf(currentStep);
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === STEPS.length - 1;

  const navigate = useNavigate();

  const cancelAndMoveToLogs = () => {
    if (confirm('뒤로 가면 작성한 기록이 사라집니다. 뒤로 가시겠습니까?')) {
      navigate('/logs');
    }
  };

  const moveToPrevStep = () => {
    const prevStep = STEPS[stepIndex - 1];
    if (prevStep) {
      setCurrentStep(prevStep);
    }
  };

  const moveToNextStep = () => {
    const nextStep = STEPS[stepIndex + 1];
    if (nextStep) {
      setCurrentStep(nextStep);
    }
  };

  const handleSubmit = () => {
    // TODO: 제출
    alert('제출되었습니다.');
  };

  return (
    <div className={styles.container}>
      <ActionHeader onBack={isFirstStep ? cancelAndMoveToLogs : moveToPrevStep}>
        <ActionHeader.CenterContent>새 기록 작성</ActionHeader.CenterContent>
      </ActionHeader>
      {/* TODO: 퍼널 */}
      <div className={styles.buttonContainer}>
        <Button onClick={isLastStep ? handleSubmit : moveToNextStep} className={styles.button}>
          {isLastStep ? '완료' : '다음'}
        </Button>
      </div>
    </div>
  );
}
