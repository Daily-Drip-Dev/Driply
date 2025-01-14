import { LoaderFunctionArgs, redirect } from '@remix-run/node';
import supabaseServer from 'src/supabase/server';

export async function loader({ request }: LoaderFunctionArgs) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next') || '/logs';
  const headers = new Headers();

  if (code) {
    const supabase = supabaseServer({ request, headers });
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      const searchParams = new URLSearchParams({
        errorMessage: error.message,
      });
      return redirect(`/?${searchParams.toString()}`);
    }
    return redirect(next, { headers });
  }

  const searchParams = new URLSearchParams({
    errorMessage: '인증 과정에 문제가 발생했습니다.',
  });
  return redirect(`/?${searchParams.toString()}`);
}

export default function AuthCallback() {
  return <div>AuthCallback</div>;
}
