import { supabase } from '../supabase';

export async function createSavedAppliedJobs(id: string) {
  const { data, error } = await supabase
    .from('saved-applied-jobs')
    .insert([{ userId: id }])
    .select();

  if (error) throw new Error(error.message);
  return data;
}

// SAVED JOBS API
export async function updateSavedJobs({
  userId,
  saved,
}: {
  userId: string;
  saved: string[];
}) {
  const { data, error } = await supabase
    .from('saved-applied-jobs')
    .update({ savedJobs: saved })
    .eq('userId', userId)
    .select();

  if (error) throw new Error(error.message);
  return data;
}

// APPLIED JOBS API
export async function updateAppliedJobs(id: string, applied: string[]) {
  const { data, error } = await supabase
    .from('saved-applied-jobs')
    .update({ appliedJobs: applied })
    .eq('userId', id)
    .select();

  if (error) throw new Error(error.message);
  return data;
}

// ARCHIVE JOBS API
export async function updateArchiveJobs(id: string, archived: string[]) {
  const { data, error } = await supabase
    .from('saved-applied-jobs')
    .update({ archive: archived })
    .eq('userId', id)
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function getUserStoredJobs() {
  const { data } = await supabase.from('saved-applied-jobs').select('*');
  return data;
}
