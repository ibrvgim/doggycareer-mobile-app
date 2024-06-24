import { createUserAPI, loginUserAPI } from '@/data/auth/apiAuth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

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

  const { isPending, mutate: createUser } = useMutation({
    mutationFn: createUserAPI,

    onSuccess: () => route.replace('jobs'),
    onError: (error) => console.log(error.message),
  });

  return { isPending, createUser };
}
