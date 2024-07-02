import { Image, Text, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import PressableCustom from '../general/Pressable';

function JobCard({
  jobID,
  title,
  companyName,
  location,
  jobType,
  officeType,
  postedAt,
}: {
  jobID: number;
  image: string;
  title: string;
  companyName: string;
  location: string;
  jobType: string;
  officeType: string;
  postedAt: string;
}) {
  const route = useRouter();

  return (
    <PressableCustom
      className='bg-white p-5 border-b-[1px] border-b-gray-200 flex-row items-center'
      onPress={() => route.push(`${jobID}`)}
    >
      <View className='border-[1px] border-gray-300 rounded-md mr-4'>
        <Image
          source={require('../../assets/images/job.png')}
          className='w-10 h-10 m-2'
        />
      </View>

      <View>
        <View>
          <Text className='text-lg tracking-wide text-cyan-600 mb-1'>
            {title.length > 25 ? title.slice(0, 28) + '...' : title}
          </Text>
          <Text className='tracking-wide text-gray-500 mb-3'>
            {companyName}
          </Text>
        </View>

        <View className='flex-row flex-wrap items-center pr-20'>
          <View className='flex-row items-center mr-5'>
            <Ionicons
              name='location-outline'
              size={16}
              color='rgb(251 113 133)'
            />
            <Text className='text-gray-500 ml-1 text-[13px]'>{location}</Text>
          </View>

          <View className='flex-row items-center mr-5'>
            <Ionicons name='time-outline' size={16} color='rgb(251 113 133)' />
            <Text className='text-gray-500 ml-1 text-[13px]'>{jobType}</Text>
          </View>

          <View className='flex-row items-center mr-5'>
            <FontAwesome name='building-o' size={14} color='rgb(251 113 133)' />
            <Text className='text-gray-500 ml-[6px] text-[13px]'>
              {officeType}
            </Text>
          </View>

          <View className='flex-row items-center mt-4'>
            <Ionicons
              name='calendar-outline'
              size={15}
              color='rgb(251 113 133)'
            />
            <Text className='text-gray-500 text-[13px] ml-1'>{postedAt}</Text>
          </View>
        </View>
      </View>
    </PressableCustom>
  );
}

export default JobCard;
