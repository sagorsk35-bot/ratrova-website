import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if Supabase is properly configured
export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey &&
    !supabaseUrl.includes('placeholder') && supabaseUrl.startsWith('https://'))

if (!isSupabaseConfigured) {
    console.warn('⚠️ Supabase not configured. Survey data will not be saved to database.')
}

export const supabase = isSupabaseConfigured
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null
