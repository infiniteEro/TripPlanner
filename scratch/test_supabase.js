const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://zibslyxkfixiqyuczrfp.supabase.co';
const SUPABASE_KEY = 'sb_publishable_nd9sX-EYwAqKmF5CjxTmIQ_wWjSYtgC';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function testConnection() {
    console.log('Testing Supabase connection...');
    const { data, error } = await supabase.from('trips').select('*').limit(1);
    
    if (error) {
        console.error('Connection failed:', error);
    } else {
        console.log('Connection successful! Data:', data);
    }
}

testConnection();
