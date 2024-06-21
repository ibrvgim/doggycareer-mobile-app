import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

function JobInfoBadges({
  companyName,
  location,
  jobType,
  postedAt,
}: {
  companyName: string;
  location: string;
  jobType: string;
  postedAt: string;
}) {
  return (
    <View className='gap-4'>
      <View className='flex-row items-center'>
        <Ionicons name='briefcase-outline' size={18} color='rgb(251 113 133)' />
        <Text className='text-gray-500 text-[15px] ml-1'>{companyName}</Text>
      </View>

      <View className='flex-row items-center'>
        <Ionicons name='location-outline' size={20} color='rgb(251 113 133)' />
        <Text className='text-gray-500 text-[15px] ml-1'>{location}</Text>
      </View>

      <View className='flex-row items-center'>
        <Ionicons name='time-outline' size={20} color='rgb(251 113 133)' />
        <Text className='text-gray-500 text-[15px] ml-1'>{jobType}</Text>
      </View>

      <View className='flex-row items-center'>
        <Ionicons name='calendar-outline' size={18} color='rgb(251 113 133)' />
        <Text className='text-gray-500 text-[15px] ml-1'>
          Published {postedAt}
        </Text>
      </View>
    </View>
  );
}

export default JobInfoBadges;
