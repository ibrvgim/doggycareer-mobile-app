import { useGetUser } from '@/hooks/auth/useGetUser';
import { Redirect, Stack } from 'expo-router';

function AuthLayout() {
  const { getUser } = useGetUser();
  if (getUser?.role === 'authenticated') Redirect({ href: 'jobs' });

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='signup' />
    </Stack>
  );
}

export default AuthLayout;
