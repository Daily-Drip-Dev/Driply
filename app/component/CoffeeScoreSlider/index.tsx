import clsx from 'clsx';
import { COFFEE_SCORE_TITLE } from 'src/constants';
import { useCoffeeLogForm } from 'src/store/useCoffeeLogForm';
import { typography } from 'src/vanilla-extract/typography.css';
import { useShallow } from 'zustand/shallow';
import { styles } from './style.css';

interface CoffeeScoreSliderProps {
  title: keyof typeof COFFEE_SCORE_TITLE;
}

export default function CoffeeScoreSlider({ title }: CoffeeScoreSliderProps) {
  const { setScore, score } = useCoffeeLogForm(
    useShallow((state) => ({ setScore: state.setScore, score: state.getScore(title) }))
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setScore(title, value);
  };

  return (
    <section className={styles.scoreDialContainer} aria-label="점수 선택기">
      <div className={styles.labelContainer}>
        <label htmlFor={title} className={typography.heading2}>
          {COFFEE_SCORE_TITLE[title]}
        </label>
        <span className={clsx(styles.labelDescription, typography.small)}>
          {title[0].toUpperCase() + title.slice(1)}
        </span>
      </div>

      <div style={{ width: '100%', position: 'relative' }}>
        <div className={styles.tuningScale}>
          {[...Array(11)].map((_, i) => {
            const size = i % 5 === 0 ? 'large' : 'small';
            return (
              <div key={i} className={styles.markContainer}>
                {i === score && <div className={styles.pointer} />}
                <div className={clsx(styles.mark[size], i <= score && styles.selectedMark)} />
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
          id={title}
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
