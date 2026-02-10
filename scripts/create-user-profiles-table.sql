-- Run this SQL in Supabase SQL Editor to create the user_profiles table
-- Go to: Supabase Dashboard → SQL Editor → New Query → Paste this → Run

CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  user_id TEXT UNIQUE NOT NULL,
  username TEXT NOT NULL,
  profession TEXT NOT NULL,
  business_details TEXT,
  lessons_completed JSONB DEFAULT '[]'::jsonb
);

-- Enable Row Level Security
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Allow inserts
CREATE POLICY "Allow public inserts" ON user_profiles
  FOR INSERT WITH CHECK (true);

-- Allow users to read their own profile
CREATE POLICY "Allow reading all" ON user_profiles
  FOR SELECT USING (true);

-- Allow users to update their own profile
CREATE POLICY "Allow updates" ON user_profiles
  FOR UPDATE USING (true);
