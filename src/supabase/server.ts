import {
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} from '@supabase/ssr';
import { SUPABASE } from './constants';
import { LoaderFunctionArgs } from '@remix-run/node';

const supabaseServer = (request: LoaderFunctionArgs['request']) => {
  const headers = new Headers();

  return createServerClient(SUPABASE.url, SUPABASE.anonKey, {
    cookies: {
      getAll() {
        return parseCookieHeader(request.headers.get('Cookie') ?? '');
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          headers.append(
            'Set-Cookie',
            serializeCookieHeader(name, value, options)
          )
        );
      },
    },
  });
};

export default supabaseServer;
