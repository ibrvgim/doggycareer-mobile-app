import { ActivityIndicator, Pressable, ScrollView, Text } from 'react-native';
import WhereWorkCard from './WhereWorkCard';
import WhichJobCard from './WhichJobCard';
import JobTypeCard from './JobTypeCard';
import OfficeTypeCard from './OfficeTypeCard';
import { useSelector } from 'react-redux';
import { QuestionnaireType } from '@/types/types';
import useUpdatePersonalData from '@/hooks/users/useUpdatePersonalData';
import { useGetUser } from '@/hooks/auth/useGetUser';

function Questionnaire() {
  const { getUser } = useGetUser();
  const questionnaire = useSelector(
    (state: { questionnaire: QuestionnaireType }) => state.questionnaire
  );
  const { isPending, updateData } = useUpdatePersonalData();

  const isValid =
    questionnaire.industry.length > 0 ||
    questionnaire.jobType ||
    questionnaire.location.length > 0 ||
    questionnaire.officeType;

  function handleSubmit() {
    if (getUser?.id && isValid)
      updateData({
        id: getUser?.id,
        updatedData: { questionnaire: questionnaire },
      });
  }

  return (
    <ScrollView className='pt-6 px-4' showsVerticalScrollIndicator={false}>
      <Text className='text-2xl font-bold opacity-80 text-cyan-700 mb-2 tracking-wider'>
        Job Preferences
      </Text>
      <Text className='text-gray-400 font-medium text-[15px] tracking-wide mb-8'>
        Fill out the form and it will help you see more relevant vacancies that
        interest you.
      </Text>

      <WhereWorkCard questionnaire={questionnaire} />
      <WhichJobCard questionnaire={questionnaire} />
      <JobTypeCard questionnaire={questionnaire} />
      <OfficeTypeCard questionnaire={questionnaire} />

      <Pressable
        className={`bg-cyan-700 py-3 px-12 self-end mb-16 rounded-md ${
          !isValid ? 'opacity-50' : ''
        }`}
        onPress={handleSubmit}
        disabled={!isValid}
      >
        {isPending ? (
          <ActivityIndicator color='white' className='px-4' />
        ) : (
          <Text className='text-white font-medium tracking-wider'>Submit</Text>
        )}
      </Pressable>
    </ScrollView>
  );
}

export default Questionnaire;
