import {
  createUserAPI,
  loginUserAPI,
  logoutUserAPI,
  updatePersonalInformationAPI,
} from '@/data/auth/apiAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import { useCreatePersonalData } from '../users/useUpdatePersonalData';
import { useCreateStoredJobs } from '../jobs/useUpdateStoredJobs';

// LOGIN USER
export function useLoginUser() {
  const route = useRouter();

  const { isPending, mutate: loginUser } = useMutation({
    mutationFn: loginUserAPI,

    onSuccess: (data: any) => {
      if (data?.user?.role === 'authenticated') route.replace('jobs');
      else Alert.alert('Something Wrong', data as string);
    },
    onError: (error) => console.log(error.message),
  });

  return { isPending, loginUser };
}

// SIGNUP USER
export function useSignupUser() {
  const route = useRouter();
  const { createData } = useCreatePersonalData();
  const { createStoredJobs } = useCreateStoredJobs();

  const { isPending, mutate: createUser } = useMutation({
    mutationFn: createUserAPI,

    onSuccess: (data) => {
      if (data.session?.access_token) {
        console.log(data?.user?.id);
        createData(data?.user?.id as string);
        createStoredJobs(data?.user?.id as string);
        route.replace('jobs');
      }
    },
    onError: (error) => console.log(error.message),
  });

  return { isPending, createUser };
}

// LOGOUT USER
export function useLogoutUser() {
  const { isPending, mutate: logoutUser } = useMutation({
    mutationFn: logoutUserAPI,
    onError: (error) => console.log(error.message),
  });

  return { isPending, logoutUser };
}

// UPDATE USER
export function useUpdateUserData() {
  const queryClient = useQueryClient();

  const { isPending, mutate: updateUserData } = useMutation({
    mutationFn: updatePersonalInformationAPI,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['user'] }),
    onError: (error) => console.log(error.message),
  });

  return { isPending, updateUserData };
}
