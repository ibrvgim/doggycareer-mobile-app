import { Text, View } from 'react-native';

function FilterCard({
  icon,
  title,
  children,
}: {
  icon: JSX.Element;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View className='border-b-[1px] border-b-gray-300 pb-6 mb-8'>
      <View className='flex-row items-center'>
        {icon}
        <Text className='text-base font-semibold text-cyan-700 ml-2 tracking-wider'>
          {title}
        </Text>
      </View>
      <View className='flex-row flex-wrap mt-6'>{children}</View>
    </View>
  );
}

export default FilterCard;
