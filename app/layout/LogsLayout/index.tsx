import LogsHeader from "~/component/LogsHeader";
import styles from "./styles.css";
import LogsMain from "~/component/LogsMain";

export default function LogsLayout() {
  return (
    <div className={styles.logsContainer}>
      <header className={styles.logsHeader}>
        <LogsHeader
          onIconClick={() => {
            /*TODO: 헤더 오른쪽 아이콘 클릭 이벤트 작성 */
          }}
        >
          My Logs
        </LogsHeader>
      </header>
      <main className={styles.logsMain}>
        <LogsMain />
      </main>
    </div>
  );
}
