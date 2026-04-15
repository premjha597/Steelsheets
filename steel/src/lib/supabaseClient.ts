import { createClient } from '@supabase/supabase-js';

// These would normally come from your .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Initialize Supabase client only if credentials exist
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

// LocalStorage Fallback Helper
const STORAGE_KEY = 'dharma_steel_leads';

export const saveSubmission = async (data: any) => {
  const created_at = new Date().toISOString();
  // Map field names to match user preference: productInterest -> product
  const submission = { 
    ...data, 
    product: data.productInterest,
    id: Date.now(), 
    created_at 
  };
  
  // Remove original field if different from mapped
  if (submission.productInterest) delete submission.productInterest;

  if (supabase) {
    console.log("Attempting Supabase Insert:", submission);
    const { data: insertedData, error } = await supabase.from('leads').insert([submission]).select();
    if (!error) {
      console.log("Inserted:", insertedData);
      return { success: true, data: insertedData };
    }
    console.error('Supabase Error:', error);
  }

  // Fallback to LocalStorage
  console.log("Falling back to LocalStorage for persistence");
  const existingRecords = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  existingRecords.push(submission);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existingRecords));
  
  return { success: true, isLocal: true, data: [submission] };
};

export const getSubmissions = async () => {
  if (supabase) {
    const { data, error } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
    if (!error) {
      console.log("Fetched from Supabase:", data);
      return data;
    }
    console.error('Supabase Fetch Error:', error);
  }

  // Fallback to LocalStorage
  const localData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]').reverse();
  console.log("Fetched from LocalStorage:", localData);
  return localData;
};
