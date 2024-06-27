import { Stack, useRouter } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store';
import Toast from 'react-native-toast-message';
import { Platform, Pressable, Text } from 'react-native';

const queryClient = new QueryClient();

export default function RootLayout() {
  const route = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name='(auth)' options={{ headerShown: false }} />
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen
            name='(apply)'
            options={{
              headerTitle: 'Apply for Job',
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name='(search)'
            options={{
              title: 'Search',
              headerTitleStyle: {
                color: '#0e7490',
              },
              presentation: 'modal',
              headerRight: () => {
                return Platform.OS === 'ios' ? (
                  <Pressable onPress={() => route.back()}>
                    <Text className='text-base font-semibold text-cyan-700'>
                      Close
                    </Text>
                  </Pressable>
                ) : null;
              },
            }}
          />
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
        <Toast />
      </Provider>
    </QueryClientProvider>
  );
}
