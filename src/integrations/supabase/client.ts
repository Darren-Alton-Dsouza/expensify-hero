// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://segsfdchlyehgayxekjc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlZ3NmZGNobHllaGdheXhla2pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MjMzMzcsImV4cCI6MjA1ODI5OTMzN30.jYbYR_UlL88L5_B3Es3mKo5OlEtP15oXUJw0O0qnX-Y";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);