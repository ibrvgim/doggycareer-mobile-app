import { Stack } from 'expo-router';

function ApplyLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='[applyJobID]' />
    </Stack>
  );
}

export default ApplyLayout;
