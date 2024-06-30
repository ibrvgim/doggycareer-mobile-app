import { QuestionnaireType } from '@/types/types';
import { supabase } from '../supabase';

export async function getPersonalData() {
  const { data, error } = await supabase.from('users').select('*');

  if (error) throw new Error(error.message);
  return data;
}

export async function createPersonalData(id: string) {
  const { data, error } = await supabase
    .from('users')
    .insert([{ userId: id }])
    .select();

  if (error) throw new Error(error.message);
  return data;
}

export async function updatePersonalData({
  id,
  updatedData,
}: {
  id: string;
  updatedData: { questionnaire: QuestionnaireType | null };
}) {
  const { data, error } = await supabase
    .from('users')
    .update(updatedData)
    .eq('userId', id)
    .select();

  if (error) throw new Error(error.message);
  return data;
}
