import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />

        <Stack.Screen
          name='(stacks)'
          options={{
            headerTitle: 'Job Details',
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name='settings'
          options={{
            headerTitle: 'Settings',
            headerBackTitleVisible: false,
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
