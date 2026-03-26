import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Sécurité : On s'assure que les variables sont bien chargées avant d'initialiser le client
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Les variables d'environnement Supabase (URL ou ANON_KEY) sont manquantes dans le fichier .env");
}

// Création et exportation de l'instance unique
export const supabase = createClient(supabaseUrl, supabaseAnonKey);