import { useGetUser } from '@/hooks/auth/useGetUser';
import { Redirect, Stack } from 'expo-router';

function ApplyLayout() {
  const { getUser } = useGetUser();
  if (getUser?.role !== 'authenticated') Redirect({ href: '(auth)' });

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='[applyJobID]' />
    </Stack>
  );
}

export default ApplyLayout;
