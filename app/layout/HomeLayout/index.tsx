import { typography } from 'src/vanilla-extract/typography.css';
import styles from './styles.css';
import clsx from 'clsx';
import supabase from 'src/supabase/client';

export default function HomeLayout() {
  const handleKakaoClick = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: `${window.location.origin}/logs`,
      },
    });
  };

  return (
    <main className={styles.homeMain}>
      <div className={styles.logoContainer}>
        <img src="/driply-logo.png" alt="Logo" className={styles.logo} />
        <div className={typography.heading5}>당신의 커피를 기록하세요.</div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonDescription}>카카오 간편 로그인으로 서비스를 이용해보세요.</div>
        <button className={clsx(styles.kakaoButton, typography.heading5)} onClick={handleKakaoClick}>
          <img src="/kakao.png" alt="kakao logo" width={18} />
          <div className={styles.kakaoText}>카카오 간편 로그인</div>
        </button>
      </div>
    </main>
  );
}
