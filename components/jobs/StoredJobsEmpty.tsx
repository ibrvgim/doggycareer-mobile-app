import { Text, View } from 'react-native';

function StoredJobsEmpty({
  children,
  title,
  description,
}: {
  children: JSX.Element;
  title: string;
  description: string;
}) {
  return (
    <View className='flex-1 justify-center items-center px-8'>
      {children}
      <Text className='text-center text-2xl font-bold text-gray-500 tracking-widest mt-4'>
        {title}
      </Text>
      <Text className='text-center text-sm font-medium text-gray-500 mt-3 tracking-wide'>
        {description}
      </Text>
    </View>
  );
}

export default StoredJobsEmpty;
