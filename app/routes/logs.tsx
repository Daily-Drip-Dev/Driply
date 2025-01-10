import { GET_COFFEE_LIST_BY_USER_ID, GetCoffeeListResponse } from 'src/api/coffee/query';
import apolloClient from 'src/apollo/client';
import LogsLayout from '~/layout/LogsLayout';
import { LoaderFunctionArgs } from '@remix-run/node';
import supabaseServer from 'src/supabase/server';

export async function loader({ request }: LoaderFunctionArgs) {
  const supabase = supabaseServer({ request });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;

  const {
    data: { coffeeCollection },
  } = await apolloClient.query<GetCoffeeListResponse>({
    query: GET_COFFEE_LIST_BY_USER_ID,
    variables: { userId },
  });

  return { coffeeCollection };
}

export default function Logs() {
  return <LogsLayout />;
}
