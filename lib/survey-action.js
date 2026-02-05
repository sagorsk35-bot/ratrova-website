'use server'

import { supabase, isSupabaseConfigured } from './supabase'

/**
 * Survey submission schema and server action
 * Saves survey data to Supabase with validation
 */

export async function submitSurvey(formData) {
    // Validate required fields
    if (!formData.companyName || !formData.email || !formData.name) {
        return {
            success: false,
            error: 'Missing required fields: company name, email, and name are required'
        }
    }

    // Check if Supabase is configured
    if (!isSupabaseConfigured || !supabase) {
        console.log('📝 Survey submission (Supabase not configured):', formData)
        return {
            success: true,
            message: 'Survey received (database not configured - data logged only)',
            data: formData
        }
    }

    try {
        const surveyData = {
            user_id: formData.userId || null,
            company_name: formData.companyName,
            industry: formData.industry,
            current_situation: formData.currentSituation,
            pain_points: formData.painPoints,
            top_pain_points: formData.topPainPoints,
            detailed_description: formData.detailedDescription,
            contact_name: formData.name,
            contact_email: formData.email,
            contact_phone: formData.phone,
            preferred_contact: formData.preferredContact,
            timeline: formData.timeline
        }

        const { data, error } = await supabase
            .from('survey_submissions')
            .insert([surveyData])
            .select()

        if (error) {
            console.error('Supabase insert error:', error)
            return {
                success: false,
                error: error.message || 'Failed to save survey'
            }
        }

        console.log('✅ Survey saved to Supabase:', data)
        return {
            success: true,
            message: 'Survey submitted successfully!',
            data: data[0]
        }

    } catch (error) {
        console.error('Survey submission error:', error)
        return {
            success: false,
            error: 'An unexpected error occurred'
        }
    }
}
