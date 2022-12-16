import { createClient } from "@supabase/supabase-js";

export const supabase = createClient("https://kciucxnwgpaicctaipfv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjaXVjeG53Z3BhaWNjdGFpcGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0MDMxOTQsImV4cCI6MTk4Mzk3OTE5NH0.etINIVTImUPZlxS0RDtp1Y6W4rdlKUgd_38szjrsO6Q")