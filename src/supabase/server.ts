import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr';
import { SUPABASE } from './constants';

export interface SupabaseServerArgs {
  request: Request;
  headers?: Headers;
}

const supabaseServer = (args: SupabaseServerArgs) => {
  const headers = args.headers ?? new Headers();

  return createServerClient(SUPABASE.url, SUPABASE.anonKey, {
    cookies: {
      getAll() {
        return parseCookieHeader(args.request.headers.get('Cookie') ?? '');
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          headers.append('Set-Cookie', serializeCookieHeader(name, value, options))
        );
      },
    },
  });
};

export default supabaseServer;
