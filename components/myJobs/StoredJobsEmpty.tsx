import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import PressableCustom from '../general/Pressable';

function StoredJobsEmpty({
  children,
  title,
  description,
}: {
  children: JSX.Element;
  title: string;
  description?: string;
}) {
  const route = useRouter();

  return (
    <View className='flex-1 justify-center items-center px-8'>
      {children}
      <Text className='text-center text-2xl font-bold text-gray-500 tracking-widest mt-4'>
        {title}
      </Text>
      <Text className='text-center text-sm font-medium text-gray-500 mt-3 tracking-wide'>
        {description}
      </Text>

      {description && (
        <PressableCustom
          className='border-[1px] border-cyan-700 py-1 px-6 rounded-full mt-6'
          onPress={() => route.push('jobs')}
        >
          <Text className='text-cyan-700 font-medium'>Search Jobs</Text>
        </PressableCustom>
      )}
    </View>
  );
}

export default StoredJobsEmpty;
