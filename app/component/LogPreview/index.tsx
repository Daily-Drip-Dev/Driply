import { useState } from "react";
import styles from "./styles.css";
import Image from "../Image";
import clsx from "clsx";
import { typography } from "src/vanilla-extract/typography.css";

interface LogPreviewProps {
  place: string;
  title: string;
  imageUrl?: string;
}

export default function LogPreview({ place, title, imageUrl }: LogPreviewProps) {
  const [isLoading, setIsLoading] = useState(!!imageUrl);
  const [isError, setIsError] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <p className={clsx(styles.place, typography.small)}>{place}</p>
        <h3>{title}</h3>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          isLoading={isLoading}
          isError={isError}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsError(true)}
          alt={`${title} 이미지`}
        />
      </div>
    </div>
  );
}
