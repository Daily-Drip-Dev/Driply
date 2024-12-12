import { useQuery } from "@apollo/client";
import { GET_COFFEE_LIST_BY_USER_ID, GetCoffeeListResponse } from "src/api/coffee/query";
import LogPreview from "../LogPreview";

export default function LogsMain() {
  // TODO: userId는 useAuth로 불러와야 합니다.
  const userId = 1;
  const { data } = useQuery<GetCoffeeListResponse>(GET_COFFEE_LIST_BY_USER_ID, { variables: { userId } });
  const coffeeList = data?.coffeeCollection.edges.map(({ node }) => node);

  return (
    <>
      {coffeeList?.map(({ id, img_url, title }) => (
        <LogPreview key={id} place={"홈카페"} title={title} imageUrl={img_url ?? undefined} />
      ))}
    </>
  );
}
