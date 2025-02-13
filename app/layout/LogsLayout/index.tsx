import LogsHeader from '~/component/LogsHeader';
import styles from './styles.css';
import LogsMain from '~/component/LogsMain';
import { useNavigate } from '@remix-run/react';

export default function LogsLayout() {
  const navigate = useNavigate();
  return (
    <div className={styles.logsContainer}>
      <header className={styles.logsHeader}>
        <LogsHeader
          onIconClick={() => {
            navigate('/logs/create');
          }}
        >
          My Logs
        </LogsHeader>
      </header>
      <main className={styles.logsMain}>
        {/* TODO: Error Fallback 구현 */}
        <LogsMain />
      </main>
    </div>
  );
}
