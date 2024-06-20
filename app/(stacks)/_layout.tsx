import { Stack } from 'expo-router';

export default function StacksLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='jobs/[id]'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
