import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

type Payload = {
  nombre: string;
  email: string;
  idea: string;
};

const resendApiKey = Deno.env.get('RESEND_API_KEY');
const toEmail = Deno.env.get('CONTACT_TO_EMAIL');
const supabaseUrl = Deno.env.get('SUPABASE_URL');
const serviceRoleKey = Deno.env.get('SERVICE_ROLE_KEY');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (!resendApiKey || !toEmail || !supabaseUrl || !serviceRoleKey) {
    return new Response(JSON.stringify({ error: 'Missing server configuration.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  let payload: Payload;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body.' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  const { nombre, email, idea } = payload;
  if (!nombre || !email || !idea) {
    return new Response(JSON.stringify({ error: 'Missing required fields.' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);
  const { error: insertError } = await supabase
    .from('leads')
    .insert([{ nombre, email, idea }]);

  if (insertError) {
    return new Response(JSON.stringify({ error: 'Failed to save lead.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  const emailBody = `
Nuevo contacto desde la web:

Nombre: ${nombre}
Email: ${email}

Idea:
${idea}
`.trim();

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Soluciones Digitales Lujan <onboarding@resend.dev>',
      to: [toEmail],
      subject: 'Nuevo mensaje desde la web',
      text: emailBody
    })
  });

  if (!resendResponse.ok) {
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
});
