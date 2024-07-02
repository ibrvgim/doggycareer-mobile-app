import useUpdatePersonalData from '@/hooks/users/useUpdatePersonalData';
import { setClearAll } from '@/slices/questionnaireSlice';
import { QuestionnaireType } from '@/types/types';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import PressableCustom from '../general/Pressable';

function JobPreferencesCard({
  currentUserData,
  userId,
}: {
  currentUserData: { questionnaire: QuestionnaireType };
  userId: string | undefined;
}) {
  const dispacth = useDispatch();
  const { updateData } = useUpdatePersonalData();

  function deleteQuestionnaire() {
    if (userId)
      updateData({ id: userId, updatedData: { questionnaire: null } });
    dispacth(setClearAll());
  }

  return (
    <View className='border-[1px] border-cyan-600 px-5 pt-4 pb-2 mb-3 rounded-lg relative'>
      <PressableCustom
        className='absolute top-3 -right-3 px-6 rounded-full'
        onPress={deleteQuestionnaire}
      >
        <Ionicons name='close' size={25} color='rgb(8 145 178)' />
      </PressableCustom>

      {currentUserData?.questionnaire.jobType && (
        <Text className='font-medium tracking-widest text-cyan-600 mb-2 mr-6'>
          Job Type:{' '}
          <Text className='font-medium tracking-widest text-gray-500 capitalize'>
            {currentUserData?.questionnaire.jobType}
          </Text>
        </Text>
      )}

      {currentUserData?.questionnaire.location.length > 0 && (
        <Text className='font-medium tracking-widest text-cyan-600 mb-2 mr-6'>
          Job Regions:{' '}
          <Text className='font-medium tracking-widest text-gray-500 capitalize'>
            {currentUserData?.questionnaire.location.join(' | ')}
          </Text>
        </Text>
      )}

      {currentUserData?.questionnaire.industry.length > 0 && (
        <Text className='font-medium tracking-widest text-cyan-600 mb-2 mr-6'>
          Job Industries:{' '}
          <Text className='font-medium tracking-widest text-gray-500 capitalize'>
            {currentUserData?.questionnaire.industry.join(' | ')}
          </Text>
        </Text>
      )}

      {currentUserData?.questionnaire.officeType && (
        <Text className='font-medium tracking-widest text-cyan-600 mb-2 mr-6'>
          Office Type:{' '}
          <Text className='font-medium tracking-widest text-gray-500 capitalize'>
            {currentUserData?.questionnaire.officeType}
          </Text>
        </Text>
      )}
    </View>
  );
}

export default JobPreferencesCard;
