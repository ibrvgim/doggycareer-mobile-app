import { Text, View } from 'react-native';
import FilterTab from '../modal/FilterTab';
import { useDispatch } from 'react-redux';
import { setJobType } from '@/slices/questionnaireSlice';
import { QuestionnaireType } from '@/types/types';

function JobTypeCard({ questionnaire }: { questionnaire: QuestionnaireType }) {
  const dispatch = useDispatch();

  return (
    <View className='border-[1px] border-slate-300 rounded-lg px-4 py-5 mb-6 -z-20'>
      <Text className='text-lg   font-semibold text-cyan-700 opacity-80 mb-6'>
        Do you want to work part or full time?
      </Text>
      <View className='flex-row'>
        <FilterTab
          handleOnPress={() => {
            dispatch(setJobType('full time'));
          }}
          isActive={questionnaire.jobType === 'full time'}
          title='Full time'
        />
        <FilterTab
          handleOnPress={() => {
            dispatch(setJobType('part time'));
          }}
          isActive={questionnaire.jobType === 'part time'}
          title='Part time'
        />
      </View>
    </View>
  );
}

export default JobTypeCard;
