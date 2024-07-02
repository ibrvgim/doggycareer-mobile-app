import { ScrollView, Text, View } from 'react-native';
import WhereWorkCard from './WhereWorkCard';
import WhichJobCard from './WhichJobCard';
import JobTypeCard from './JobTypeCard';
import OfficeTypeCard from './OfficeTypeCard';
import { useSelector } from 'react-redux';
import { QuestionnaireType } from '@/types/types';
import useUpdatePersonalData from '@/hooks/users/useUpdatePersonalData';
import { useGetUser } from '@/hooks/auth/useGetUser';
import Button from '../general/Button';

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
    <ScrollView
      className='flex-1 pt-6 px-4'
      showsVerticalScrollIndicator={false}
    >
      <View className='flex-1 mb-14'>
        <Text className='text-2xl font-bold opacity-80 text-cyan-700 mb-2 tracking-wider'>
          Job Preferences
        </Text>
        <Text className='text-gray-400 font-medium text-[15px] tracking-wide mb-8'>
          Fill out the form and it will help you see more relevant vacancies
          that interest you.
        </Text>

        <WhereWorkCard questionnaire={questionnaire} />
        <WhichJobCard questionnaire={questionnaire} />
        <JobTypeCard questionnaire={questionnaire} />
        <OfficeTypeCard questionnaire={questionnaire} />

        {isValid && (
          <Button isPending={isPending} onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </View>
    </ScrollView>
  );
}

export default Questionnaire;
