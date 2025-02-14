import { Funnel } from '~/component/Funnel';
import styles from './styles.css';

export default function LogCreateLayout() {
  const handleSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <Funnel initialStep="score" steps={['score', 'meta']} onSubmit={handleSubmit} title="새 기록 작성">
        <Funnel.Step name="score">score</Funnel.Step>
        <Funnel.Step name="meta">meta</Funnel.Step>
      </Funnel>
    </div>
  );
}
