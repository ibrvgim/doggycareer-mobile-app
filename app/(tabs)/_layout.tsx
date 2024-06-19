import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name='jobs'
        options={{
          title: 'Search Jobs',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search-outline' size={size - 2} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='recommendations'
        options={{
          title: 'Suggested You',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'paper-plane' : 'paper-plane-outline'}
              size={size - 2}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name='myJobs'
        options={{
          title: 'My Jobs',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'heart' : 'heart-outline'}
              size={size - 1}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size - 2}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
