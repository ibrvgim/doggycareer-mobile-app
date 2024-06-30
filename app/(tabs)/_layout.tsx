import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text } from 'react-native';
import { useLogoutUser } from '@/hooks/auth/useAuthUser';
import LoadingScreen from '@/components/general/LoadingScreen';

export default function TabsLayout() {
  const { isPending: isGettingLogout, logoutUser } = useLogoutUser();

  if (isGettingLogout) return <LoadingScreen />;
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: '500',
          color: 'rgb(8 145 178)',
        },
      }}
    >
      <Tabs.Screen
        name='jobs'
        options={{
          title: 'Search Jobs',
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              size={size - 2}
              color='rgb(8 145 178)'
            />
          ),
        }}
      />

      <Tabs.Screen
        name='recommendations'
        options={{
          title: 'Suggested You',
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={focused ? 'paper-plane' : 'paper-plane-outline'}
              size={size - 2}
              color='rgb(8 145 178)'
            />
          ),
        }}
      />

      <Tabs.Screen
        name='myJobs'
        options={{
          title: 'My Jobs',
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={focused ? 'heart' : 'heart-outline'}
              size={size - 1}
              color='rgb(8 145 178)'
            />
          ),
        }}
      />

      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size - 2}
              color='rgb(8 145 178)'
            />
          ),
          headerRight: () => (
            <Pressable
              className='px-4 flex-row'
              onPress={() => {
                logoutUser();
              }}
            >
              <Text className='text-red-500 uppercase text-xs font-bold tracking-wider'>
                Log Out
              </Text>
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
}
