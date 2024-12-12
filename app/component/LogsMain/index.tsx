import { useQuery } from "@apollo/client";
import { GET_COFFEE_LIST_BY_USER_ID, GetCoffeeListResponse } from "src/api/coffee/query";
import LogPreview from "../LogPreview";
import Fallback from "../Fallback";
import styles from "./styles.css";
import clsx from "clsx";
import { typography } from "src/vanilla-extract/typography.css";

export default function LogsMain() {
  const { data } = useQuery<GetCoffeeListResponse>(GET_COFFEE_LIST_BY_USER_ID, { variables: { userId: 1 } });
  const coffeeList = data?.coffeeCollection.edges.map(({ node }) => node);

  return (
    <>
      {coffeeList?.length === 0 ? (
        <div className={styles["fallback_container"]}>
          <Fallback
            buttonText="+새 기록 작성하기"
            onClick={() => {
              //TODO: create 페이지로 이동합니다.
            }}
          >
            <div className={clsx(styles["fallback_content"], typography.heading4)}>
              아직 기록이 없어요.
              <br />
              첫번째 기록을 남겨보세요.
            </div>
          </Fallback>
        </div>
      ) : (
        coffeeList?.map(({ id, img_url, title }) => (
          // TODO: place 리팩토링
          <LogPreview key={id} place={"홈카페"} title={title} imageUrl={img_url ?? undefined} />
        ))
      )}
    </>
  );
}
