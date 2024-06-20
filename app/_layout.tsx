import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen
        name='(stacks)'
        options={{
          headerTitle: 'Job Details',
          headerBackTitleVisible: false,
        }}
      />
    </Stack>
  );
}
