import { Redirect, Stack } from 'expo-router';

function AuthLayout() {
  // if (true) Redirect({ href: 'jobs' });

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='signup' />
    </Stack>
  );
}

export default AuthLayout;
