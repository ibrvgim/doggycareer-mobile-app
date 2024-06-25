import { setIndustry } from '@/slices/questionnaireSlice';
import { QuestionnaireType } from '@/types/types';
import { Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import IndustryInput from './IndustryInput';

function WhichJobCard({ questionnaire }: { questionnaire: QuestionnaireType }) {
  const dispatch = useDispatch();

  function handleDelete(industry: string) {
    dispatch(setIndustry(industry));
  }

  return (
    <View className='border-[1px] border-slate-300 rounded-lg px-4 pt-5 pb-6 mb-6 -z-10'>
      <Text className='text-lg font-semibold text-cyan-700 opacity-80 mb-5'>
        Which job(s) are you looking for?
      </Text>
      <View className='flex-row flex-wrap mb-3 ml-1 gap-x-1 gap-y-2'>
        {questionnaire?.industry.map((industry) => (
          <Pressable
            key={industry}
            className='bg-cyan-50 border-[1px] border-cyan-700 rounded-full px-6 py-1'
            onPress={() => handleDelete(industry)}
          >
            <Text className='font-medium text-cyan-700 tracking-wide'>
              {industry}
            </Text>
          </Pressable>
        ))}
      </View>
      <IndustryInput />
      <Text className='text-gray-500 opacity-80 mt-2 mr-2 self-end -z-10'>
        max. 3 titles
      </Text>
    </View>
  );
}

export default WhichJobCard;
