import { Text, View } from 'react-native';
import FilterTab from '../modal/FilterTab';
import { useDispatch } from 'react-redux';
import { QuestionnaireType } from '@/types/types';
import { setOfficeType } from '@/slices/questionnaireSlice';

function OfficeTypeCard({
  questionnaire,
}: {
  questionnaire: QuestionnaireType;
}) {
  const dispatch = useDispatch();

  return (
    <View className='border-[1px] border-slate-300 rounded-lg px-4 py-5 mb-6 -z-20'>
      <Text className='text-lg   font-semibold text-cyan-700 opacity-80 mb-6'>
        What environment do you want to work in?
      </Text>
      <View className='flex-row flex-wrap'>
        <FilterTab
          handleOnPress={() => {
            dispatch(setOfficeType('onSite'));
          }}
          isActive={questionnaire.officeType === 'onSite'}
          title='On Site'
        />

        <FilterTab
          handleOnPress={() => {
            dispatch(setOfficeType('remote'));
          }}
          isActive={questionnaire.officeType === 'remote'}
          title='Remote'
        />

        <FilterTab
          handleOnPress={() => {
            dispatch(setOfficeType('hybrid'));
          }}
          isActive={questionnaire.officeType === 'hybrid'}
          title='Hybrid'
        />
      </View>
    </View>
  );
}

export default OfficeTypeCard;
