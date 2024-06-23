import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name='(auth)' options={{ headerShown: false }} />
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen
            name='[jobID]'
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
          <Stack.Screen
            name='modal'
            options={{
              title: 'Filters',
              headerTitleStyle: {
                color: '#0e7490',
              },
              presentation: 'modal',
            }}
          />
        </Stack>
      </Provider>
    </QueryClientProvider>
  );
}
