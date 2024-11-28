import { useQuery } from "@apollo/client";
import { GET_COFFEE_LIST, GetCoffeeListResponse } from "src/api/coffee/query";
import TestLayout from "~/layout/TestLayout";

export default function Logs() {
  const { data } = useQuery<GetCoffeeListResponse>(GET_COFFEE_LIST);

  return (
    <TestLayout>
      {data?.coffeeCollection?.edges.map(({ node }) => {
        return <div key={node.id}>{node.name}</div>;
      })}
    </TestLayout>
  );
}
