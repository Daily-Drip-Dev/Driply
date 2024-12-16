import { LoaderFunctionArgs } from "@remix-run/node";
import { GET_COFFEE_LIST_BY_USER_ID, GetCoffeeListResponse } from "src/api/coffee/query";
import apolloClient from "src/apollo/client";
// import supabase from "src/supabase/client";
import LogsLayout from "~/layout/LogsLayout";

export async function loader({ request }: LoaderFunctionArgs) {
  // const jwt = request.headers.get("Authorization")?.split("Bearer ")[1];
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser(jwt);

  //TODO: userId를 설정합니다.
  const userId = 1;

  const {
    data: { coffeeCollection },
  } = await apolloClient.query<GetCoffeeListResponse>({
    query: GET_COFFEE_LIST_BY_USER_ID,
    variables: { userId },
  });

  return { userId, coffeeCollection };
}

export default function Logs() {
  return <LogsLayout />;
}
