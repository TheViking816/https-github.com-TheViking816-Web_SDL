import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './constants';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const submitLead = async (nombre: string, email: string, idea: string) => {
  const { data, error } = await supabase.functions.invoke('contact-email', {
    body: { nombre, email, idea }
  });
  if (error) throw error;
  return data;
};
