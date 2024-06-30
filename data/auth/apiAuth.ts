import { LoginType, SignupType } from '@/types/types';
import { supabase } from '../supabase';

export async function createUserAPI({
  email,
  password,
  firstName,
  lastName,
  phoneNumber,
}: SignupType) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
        phoneNumber,
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function loginUserAPI({ email, password }: LoginType) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return error.message;
  return data;
}

export async function logoutUserAPI() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function getUserAPI() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function updatePersonalInformationAPI({
  firstName,
  lastName,
  phoneNumber,
}: {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}) {
  const { data, error } = await supabase.auth.updateUser({
    data: { firstName, lastName, phoneNumber },
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function updatePasswordAPI(password: string) {
  const { data, error } = await supabase.auth.updateUser({
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}
