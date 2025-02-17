import { COFFEE_SCORE_TITLE } from 'src/constants';
import CoffeeScoreSlider from '../CoffeeScoreSlider';
import { styles } from './style.css';

type ScoreTitle = keyof typeof COFFEE_SCORE_TITLE;

export default function CoffeeScore() {
  return (
    <div className={styles.container}>
      {Object.keys(COFFEE_SCORE_TITLE).map((title) => {
        if (title in COFFEE_SCORE_TITLE) {
          return <CoffeeScoreSlider key={title} title={title as ScoreTitle} />;
        }
      })}
    </div>
  );
}
