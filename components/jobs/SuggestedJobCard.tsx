import { Image, Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

function SuggestedJobCard({
  id,
  image,
  title,
  companyName,
  location,
  jobType,
  postedAt,
}: {
  id: number;
  image: string;
  title: string;
  companyName: string;
  location: string;
  jobType: string;
  postedAt: string;
}) {
  const route = useRouter();

  console.log(postedAt);

  return (
    <Pressable
      className='bg-white px-5 py-4 border-[1px] border-gray-300 rounded-xl mb-3'
      onPress={() => route.push(`(stacks)/jobs/${id}`)}
    >
      <View className='flex-row items-center pr-14'>
        <View className='border-[1px] border-gray-300 rounded-md mr-4'>
          <Image
            source={require('../../assets/images/trivago.png')}
            className='w-10 h-10 m-2'
          />
        </View>

        <View>
          <View>
            <Text className='text-lg tracking-wide text-cyan-600 mb-2 pr-10'>
              {title}
            </Text>
            <Text className='tracking-wide text-gray-500 mb-3'>
              {companyName}
            </Text>
          </View>

          <View className='flex-row items-center '>
            <View className='flex-row items-center mr-5'>
              <Ionicons
                name='location-outline'
                size={16}
                color='rgb(251 113 133)'
              />
              <Text className='text-gray-500 ml-1 text-[13px]'>{location}</Text>
            </View>

            <View className='flex-row items-center mr-5'>
              <Ionicons
                name='time-outline'
                size={16}
                color='rgb(251 113 133)'
              />
              <Text className='text-gray-500 ml-1 text-[13px]'>{jobType}</Text>
            </View>
          </View>
        </View>
      </View>

      <View className='mt-4 items-end'>
        <Text className='text-gray-400 text-[13px]'>{postedAt}</Text>
      </View>
    </Pressable>
  );
}

export default SuggestedJobCard;
