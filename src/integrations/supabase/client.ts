// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vuiyociwoqdcwgaosurh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1aXlvY2l3b3FkY3dnYW9zdXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMDgwOTIsImV4cCI6MjA2MDg4NDA5Mn0.D4sXx5Hb3f-zZHBhn1NssO13QqgruSP-fNrkgMHNQ0U";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);