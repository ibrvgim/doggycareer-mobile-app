import { supabase } from '../supabase';

export async function getJobs() {
  const { data, error } = await supabase.from('jobs').select('*');

  if (error) throw new Error(error.message);
  return data;
}

export async function getSingleJob(id: string) {
  const { data: job, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error.message);
  }

  return job;
}
