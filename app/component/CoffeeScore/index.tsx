import { COFFEE_SCORE_TITLE } from 'src/constants';
import CoffeeScoreSlider from '../CoffeeScoreSlider';
import { styles } from './style.css';

type ScoreTitle = keyof typeof COFFEE_SCORE_TITLE;

function isScoreTitle(key: string): key is ScoreTitle {
  return key in COFFEE_SCORE_TITLE;
}

export default function CoffeeScore() {
  return (
    <div className={styles.container}>
      {Object.keys(COFFEE_SCORE_TITLE).map((title) => {
        if (isScoreTitle(title)) {
          return <CoffeeScoreSlider key={title} title={title} />;
        }
      })}
    </div>
  );
}
