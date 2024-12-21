import {
  LoaderFunctionArgs,
  redirect,
  type MetaFunction,
} from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { User } from '@supabase/supabase-js';
import supabase from 'src/supabase/client';
import supabaseServer from 'src/supabase/server';

export const meta: MetaFunction = () => {
  return [
    { title: 'Daily Drip' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const supabaseServerClient = supabaseServer(request);
  const {
    data: { session },
  } = await supabaseServerClient.auth.getSession();

  console.log(session);

  if (!session) {
    // 비로그인 상태
    return redirect('/login');
  }

  return { user: session.user };
}

export default function Index() {
  const { user } = useLoaderData<{ user: User }>();

  return (
    <div>
      Home
      <button
        onClick={() => {
          supabase.auth.signOut();
        }}
      >
        {`${user.user_metadata}님 로그아웃`}
      </button>
    </div>
  );
}
