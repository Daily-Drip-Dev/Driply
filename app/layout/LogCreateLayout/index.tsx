import styles from './styles.css';
import { Funnel } from '~/component/Funnel';
import CoffeeScoreStep from '~/component/CoffeeScoreStep';
import CoffeeMetaStep from '~/component/CoffeeMetaStep';

export default function LogCreateLayout() {
  const handleSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <Funnel title="새 기록 작성" steps={['score', 'meta']} onSubmit={handleSubmit}>
        <Funnel.Step name="score">
          <CoffeeScoreStep />
        </Funnel.Step>
        <Funnel.Step name="meta">
          <CoffeeMetaStep />
        </Funnel.Step>
      </Funnel>
    </div>
  );
}
