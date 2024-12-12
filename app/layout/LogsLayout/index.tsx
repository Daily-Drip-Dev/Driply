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
        {/* TODO: Error Fallback 구현 */}
        {/* 러기: [24.12.11] Coffee List가 없을 때 Error를 던지고, Fallback 구현을 여기서 하면 어떨까요? */}
        <LogsMain />
      </main>
    </div>
  );
}
