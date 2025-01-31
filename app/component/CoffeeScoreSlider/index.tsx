import { useState } from 'react';
import * as styles from './style.css';
import clsx from 'clsx';
import { typography } from 'src/vanilla-extract/typography.css';

interface CoffeeScoreSliderProps {
  sid: 'flavor' | 'sweetness' | 'acidity' | 'balance' | 'overall';
}

const TITLE = {
  flavor: '향미',
  sweetness: '단맛',
  acidity: '산미',
  balance: '밸런스',
  overall: '종합',
};

export default function CoffeeScoreSlider({ sid }: CoffeeScoreSliderProps) {
  const [score, setScore] = useState(5);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setScore(value);
  };

  return (
    <section className={styles.scoreDialContainer} aria-label="점수 선택기">
      <div className={styles.labelContainer}>
        <label htmlFor={sid} className={typography.heading2}>
          {TITLE[sid]}
        </label>
        <span className={clsx(styles.labelDescription, typography.small)}>{sid[0].toUpperCase() + sid.slice(1)}</span>
      </div>

      <div style={{ width: '100%', position: 'relative' }}>
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
          id={sid}
          value={score}
          onChange={handleChange}
          className={styles.rangeInput}
          aria-valuemin={0}
          aria-valuemax={10}
          aria-valuetext={`${score}점`}
        />
      </div>
    </section>
  );
}
