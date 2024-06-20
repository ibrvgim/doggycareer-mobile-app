import { Image, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

function JobCard() {
  const route = useRouter();

  return (
    <Pressable
      className='bg-white p-5 border-b-[1px] border-b-gray-200 flex-row items-center'
      onPress={() => route.push('(stacks)/jobs/2')}
    >
      <View className='border-[1px] border-gray-300 rounded-md mr-4'>
        <Image
          source={require('../../assets/images/trivago.png')}
          className='w-10 h-10 m-2'
        />
      </View>

      <View>
        <View>
          <Text className='text-lg tracking-wide text-cyan-600 mb-1'>
            Junior Frontend Developer
          </Text>
          <Text className='tracking-wide text-gray-500 mb-3'>Trivago GmbH</Text>
        </View>

        <View className='flex-row items-center '>
          <View className='flex-row items-center mr-5'>
            <Ionicons
              name='location-outline'
              size={16}
              color='rgb(251 113 133)'
            />
            <Text className='text-gray-500 ml-1 text-[13px]'>Berlin</Text>
          </View>

          <View className='flex-row items-center mr-5'>
            <Ionicons name='time-outline' size={16} color='rgb(251 113 133)' />
            <Text className='text-gray-500 ml-1 text-[13px]'>Full time</Text>
          </View>

          <View className='flex-row items-center'>
            <Ionicons
              name='calendar-outline'
              size={15}
              color='rgb(251 113 133)'
            />
            <Text className='text-gray-500 text-[13px] ml-1'>2 days ago</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default JobCard;
