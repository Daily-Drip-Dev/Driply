import { PropsWithChildren } from "react";
import { MdAdd } from "react-icons/md";
import styles from "./styles.css";

interface LogsHeaderProps extends PropsWithChildren {
  onIconClick: () => void;
}

export default function LogsHeader({ children, onIconClick }: LogsHeaderProps) {
  return (
    <div className={styles.container}>
      <h1>{children}</h1>
      <div className={styles.iconWrapper}>
        <button className={styles.rightButton} onClick={onIconClick}>
          <MdAdd size={48} />
        </button>
      </div>
    </div>
  );
}
