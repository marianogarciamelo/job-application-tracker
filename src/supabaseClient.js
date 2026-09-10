require('dotenv').config();
const { createClient } = require('@supabase/supabase-js'); //unpack the createClient function from the supabase-js package

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

//factory function: take ones request and return a supabase client instance
function createSupabaseClient(token) {
    return createClient(supabaseUrl, supabaseAnonKey, {
        global: {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        },
    });
}

module.exports = { createSupabaseClient };
