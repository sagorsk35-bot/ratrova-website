'use server'

import { supabase, isSupabaseConfigured } from './supabase'

export async function saveUserProfile(data) {
    try {
        if (!isSupabaseConfigured || !supabase) {
            console.warn('⚠️ Supabase not configured. Profile not saved.')
            return { success: true, warning: 'Database not configured' }
        }

        const { data: result, error } = await supabase
            .from('user_profiles')
            .upsert({
                user_id: data.userId,
                username: data.username,
                profession: data.profession,
                business_details: data.businessDetails || null,
                updated_at: new Date().toISOString()
            }, {
                onConflict: 'user_id'
            })
            .select()

        if (error) {
            console.error('❌ Profile save error:', error)
            return { success: false, error: error.message }
        }

        return { success: true, data: result }
    } catch (error) {
        console.error('Profile save failed:', error)
        return { success: false, error: 'An unexpected error occurred.' }
    }
}

export async function getUserProfile(userId) {
    try {
        if (!isSupabaseConfigured || !supabase) {
            return { success: false, error: 'Database not configured' }
        }

        const { data, error } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('user_id', userId)
            .single()

        if (error && error.code !== 'PGRST116') {
            return { success: false, error: error.message }
        }

        return { success: true, data: data || null }
    } catch (error) {
        return { success: false, error: 'An unexpected error occurred.' }
    }
}

export async function markLessonComplete(userId, lessonId) {
    try {
        if (!isSupabaseConfigured || !supabase) {
            return { success: true, warning: 'Database not configured' }
        }

        // Get current profile
        const { data: profile } = await supabase
            .from('user_profiles')
            .select('lessons_completed')
            .eq('user_id', userId)
            .single()

        if (!profile) {
            return { success: false, error: 'Profile not found' }
        }

        const completedLessons = profile.lessons_completed || []
        if (!completedLessons.includes(lessonId)) {
            completedLessons.push(lessonId)
        }

        const { error } = await supabase
            .from('user_profiles')
            .update({
                lessons_completed: completedLessons,
                updated_at: new Date().toISOString()
            })
            .eq('user_id', userId)

        if (error) {
            return { success: false, error: error.message }
        }

        return { success: true }
    } catch (error) {
        return { success: false, error: 'An unexpected error occurred.' }
    }
}
