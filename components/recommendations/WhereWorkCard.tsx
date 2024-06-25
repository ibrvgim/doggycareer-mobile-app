import { setLocation } from '@/slices/questionnaireSlice';
import { QuestionnaireType } from '@/types/types';
import { Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import RegionInput from './RegionInput';

function WhereWorkCard({
  questionnaire,
}: {
  questionnaire: QuestionnaireType;
}) {
  const dispatch = useDispatch();

  function handleDelete(city: string) {
    dispatch(setLocation(city));
  }

  return (
    <View className='border-[1px] border-slate-300 rounded-lg px-4 pt-5 pb-6 mb-6'>
      <Text className='text-lg font-semibold text-cyan-700 opacity-80 mb-5'>
        Where would you like to work?
      </Text>
      <View className='flex-row flex-wrap mb-3 ml-1 gap-x-1 gap-y-2'>
        {questionnaire?.location.map((city) => (
          <Pressable
            key={city}
            className='bg-cyan-50 border-[1px] border-cyan-700 rounded-full px-6 py-1'
            onPress={() => handleDelete(city)}
          >
            <Text className='font-medium text-cyan-700 tracking-wide'>
              {city}
            </Text>
          </Pressable>
        ))}
      </View>
      <RegionInput />
      <Text className='text-gray-500 opacity-80 mt-2 mr-2 self-end -z-10'>
        max. 5 cities
      </Text>
    </View>
  );
}

export default WhereWorkCard;
