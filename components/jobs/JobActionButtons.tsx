import { Pressable, Text, View } from 'react-native';

function JobActionButtons() {
  return (
    <View className='mt-8 flex-row'>
      <Pressable className='flex-1 bg-cyan-700 text-center py-2 rounded-full items-center justify-center mr-2'>
        <Text className='text-gray-100 text-[15px] font-medium tracking-wider'>
          Apply Now
        </Text>
      </Pressable>

      <Pressable className='flex-1 border-[1px] border-cyan-700 text-center py-1 rounded-full items-center justify-center'>
        <Text className='text-cyan-700 text-[15px] font-medium tracking-wider'>
          Save
        </Text>
      </Pressable>
    </View>
  );
}

export default JobActionButtons;
