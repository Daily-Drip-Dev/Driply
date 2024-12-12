import { PropsWithChildren } from "react";
import styles from "./styles.css";
import Button from "../Button";
import { typography } from "src/vanilla-extract/typography.css";

interface FallbackProps extends PropsWithChildren {
  onClick: () => void;
  buttonText: string;
}

export default function Fallback({ children, buttonText, onClick }: FallbackProps) {
  return (
    <div className={styles.container}>
      {children}
      <Button onClick={onClick} highlight={true} className={typography.heading5}>
        {buttonText}
      </Button>
    </div>
  );
}
