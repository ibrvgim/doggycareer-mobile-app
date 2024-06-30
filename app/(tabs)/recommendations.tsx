import LoadingScreen from '@/components/general/LoadingScreen';
import Questionnaire from '@/components/recommendations/Questionnaire';
import SuggestedJobsList from '@/components/recommendations/SuggestedJobsList';
import { useGetUser } from '@/hooks/auth/useGetUser';
import useGetJobs from '@/hooks/jobs/useGetJobs';
import { useGetPersonalData } from '@/hooks/users/useGetPersonalData';
import { Redirect } from 'expo-router';
import { StatusBar, View } from 'react-native';

function RecommendationsScreen() {
  const { isPending: isGettingUser, getUser } = useGetUser();
  const { isPending: isGettingPersonalData, data } = useGetPersonalData();
  const { isPending: isGettingJobs, jobs } = useGetJobs();

  const currentUserData = data?.find((item) => item.userId === getUser?.id);

  if (getUser?.role !== 'authenticated') Redirect({ href: '(auth)' });
  if (isGettingPersonalData || isGettingUser || isGettingJobs)
    return <LoadingScreen />;
  return (
    <View className='flex-1 bg-white'>
      <StatusBar barStyle={'dark-content'} />
      {currentUserData?.questionnaire ? (
        <SuggestedJobsList jobs={jobs} userId={getUser?.id} />
      ) : (
        <Questionnaire />
      )}
    </View>
  );
}

export default RecommendationsScreen;
