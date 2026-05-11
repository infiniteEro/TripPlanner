import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://lpuiwcvobxsfrzokmqbc.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwdWl3Y3ZvYnhzZnJ6b2ttcWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0NjcxNTUsImV4cCI6MjA5NDA0MzE1NX0.jfMj2IgEEEk_A0AB4IEUgsExHkTovHRycnFZIKW5774'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
