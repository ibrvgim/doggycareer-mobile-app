import { QuestionnaireType } from '@/types/types';
import { supabase } from '../supabase';

interface PersonalDataType {
  linkedin?: string;
  github?: string;
  questionnaire?: QuestionnaireType | null;
}

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

export async function updatePersonalData(
  id: string,
  updatedData: PersonalDataType | string
) {
  const { data, error } = await supabase
    .from('users')
    .update(updatedData)
    .eq('userId', id)
    .select();

  if (error) throw new Error(error.message);
  return data;
}
