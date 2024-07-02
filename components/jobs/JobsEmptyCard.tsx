import { useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native';
import PressableCustom from '../general/Pressable';

function JobsEmptyCard() {
  const route = useRouter();

  return (
    <View className='flex-1 justify-center items-center px-6 bg-white'>
      <Image
        source={require('../../assets/images/no-match.png')}
        className='w-44 h-44 mb-2'
      />

      <Text className='text-center text-2xl font-bold text-gray-500 tracking-wider mb-2'>
        No Matching Jobs Found
      </Text>
      <Text className='text-center text-base tracking-wide text-gray-500'>
        Try changing your settings to get a wider variety of jobs.
      </Text>

      <PressableCustom
        className='border-[1px] border-cyan-700 px-8 py-1 rounded-md mt-6'
        onPress={() => route.push('modal')}
      >
        <Text className='font-semibold text-base text-cyan-600 tracking-wide'>
          Filters
        </Text>
      </PressableCustom>
    </View>
  );
}

export default JobsEmptyCard;
