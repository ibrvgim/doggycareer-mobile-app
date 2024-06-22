import { Tabs, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function TabsLayout() {
  const route = useRouter();

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
              className='px-3 text-cyan-600'
              onPress={() => route.push('/settings')}
            >
              <Ionicons
                name='settings-outline'
                size={22}
                color='rgb(8 145 178)'
              />
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
}
