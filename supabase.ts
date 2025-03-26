import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://axclbbomonorsaozfhbg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y2xiYm9tb25vcnNhb3pmaGJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MjY4NTUsImV4cCI6MjA1ODUwMjg1NX0.JOBVzEHUiYZiGX5sXnYSi7-OfS6M8iMw7bn8kpu-pp4';
const table= 'clientes';
export const supabase = createClient(supabaseUrl, supabaseKey);
