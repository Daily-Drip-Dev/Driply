import clsx from 'clsx';
import { typography } from 'src/vanilla-extract/typography.css';
import Fallback from '../Fallback';
import LogPreview from '../LogPreview';
import styles from './styles.css';

import { useLoaderData, redirect } from '@remix-run/react';
import { loader } from '~/routes/logs._index';

export default function LogsMain() {
  const { coffeeCollection } = useLoaderData<typeof loader>();
  const coffeeList = coffeeCollection.edges.map(({ node }) => node);

  return (
    <>
      {coffeeList?.length === 0 ? (
        <div className={styles.fallback_container}>
          <Fallback
            buttonText="+새 기록 작성하기"
            onClick={() => {
              redirect('/logs/create');
            }}
          >
            <div className={clsx(styles.fallback_content, typography.heading4)}>
              아직 기록이 없어요.
              <br />
              첫번째 기록을 남겨보세요.
            </div>
          </Fallback>
        </div>
      ) : (
        coffeeList?.map(({ id, img_url, title }) => (
          // TODO: place 리팩토링
          <LogPreview key={id} place={'홈카페'} title={title} imageUrl={img_url ?? undefined} />
        ))
      )}
    </>
  );
}
