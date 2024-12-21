import { createBrowserClient } from '@supabase/ssr';
import { SUPABASE } from './constants';

const { url, anonKey } = SUPABASE;

export function createClient() {
  return createBrowserClient(url, anonKey);
}

const supabase = createClient();

export default supabase;
