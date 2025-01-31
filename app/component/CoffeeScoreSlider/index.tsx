import { useState } from 'react';
import * as styles from './style.css';
import clsx from 'clsx';

export default function CoffeeScoreSlider() {
  const [score, setScore] = useState(5);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setScore(value);
  };

  return (
    <section className={styles.scoreDialContainer} aria-label="점수 선택기">
      <div className={styles.tuningScale}>
        {[...Array(11)].map((_, i) => {
          const size = i % 5 === 0 ? 'large' : 'small';
          return (
            <div key={i} className={styles.markContainer}>
              {i === score && <div className={styles.pointer} />}
              <div className={clsx(styles.mark[size], i === score && styles.selectedMark)} />
              <div className={clsx(styles.number, i === score && styles.selectedNumber)}>{i}</div>
            </div>
          );
        })}
      </div>

      <input
        type="range"
        min="0"
        max="10"
        step="1"
        value={score}
        onChange={handleChange}
        className={styles.rangeInput}
        aria-valuemin={0}
        aria-valuemax={10}
        aria-valuenow={score}
      />
    </section>
  );
}
