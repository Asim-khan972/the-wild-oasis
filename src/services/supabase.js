
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://rsbrrfmrkpgaxuuenjrx.supabase.co'
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzYnJyZm1ya3BnYXh1dWVuanJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3NzA2MjMsImV4cCI6MjAxMDM0NjYyM30.0Tw4LYDxoqYB0zwgXK4ZIz4i5e2ujwxec12ZhcIWd7I"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;