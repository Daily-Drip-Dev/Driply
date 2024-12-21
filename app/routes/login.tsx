import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from 'src/supabase/client';

export default function Login() {
  return (
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          style: { container: { width: '300px' } },
        }}
        providers={['kakao']}
        localization={{}}
        // redirectTo={`${SUPABASE.url}/auth/v1/callback`}
        redirectTo={`${window.location.origin}/logs`}
      />
    </div>
  );
}
