import styles from './styles.css';
import { Funnel } from '~/component/Funnel';
import CoffeeScore from '~/component/CoffeeScore';

export default function LogCreateLayout() {
  const handleSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
        <Funnel.Step name="score">score</Funnel.Step>
      <Funnel title="새 기록 작성" steps={['score', 'meta']} onSubmit={handleSubmit}>
        <Funnel.Step name="score">
        </Funnel.Step>
        <Funnel.Step name="meta">meta</Funnel.Step>
      </Funnel>
    </div>
  );
}
