import { PropsWithChildren } from "react";
import styles from "./styles.css";
import Button from "../Button";

interface FallbackProps extends PropsWithChildren {
  onClick: () => void;
  buttonText: string;
}

export default function Fallback({ children, buttonText, onClick }: FallbackProps) {
  return (
    <div className={styles.container}>
      {children}
      <Button onClick={onClick} highlight={true}>
        {buttonText}
      </Button>
    </div>
  );
}
