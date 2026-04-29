import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hptdgaqczzlataytwaoi.supabase.co'
const supabaseKey = 'sb_publishable_GFkCjSpSh6IHSc0y2-CDsg_0k3sRYqE'

export const supabase = createClient(supabaseUrl, supabaseKey)
