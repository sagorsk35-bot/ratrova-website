-- Run this SQL in Supabase SQL Editor to create the survey_submissions table
-- Go to: Supabase Dashboard → SQL Editor → New Query → Paste this → Run

CREATE TABLE IF NOT EXISTS survey_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  user_id TEXT,
  company_name TEXT NOT NULL,
  industry TEXT NOT NULL,
  current_situation TEXT,
  pain_points JSONB,
  top_pain_points JSONB,
  detailed_description TEXT,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT,
  preferred_contact TEXT,
  timeline TEXT
);

-- Enable Row Level Security
ALTER TABLE survey_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (anyone can submit a survey)
CREATE POLICY "Allow public inserts" ON survey_submissions
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reading own submissions (optional)
CREATE POLICY "Allow reading all" ON survey_submissions
  FOR SELECT USING (true);
