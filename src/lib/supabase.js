import { createClient } from '@supabase/supabase-js'

// Use as variáveis do seu servidor Supabase
const supabaseUrl = 'https://n8n-fernanda-db.hvlihi.easypanel.host'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey AgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE'

// Inicializa o cliente (será executado apenas no navegador)
const supabaseClient = () => {
  // Garantir que o código só é executado no navegador, não durante o build estático
  if (typeof window !== 'undefined') {
    return createClient(supabaseUrl, supabaseAnonKey)
  }
  return null
}

export const supabase = supabaseClient() 