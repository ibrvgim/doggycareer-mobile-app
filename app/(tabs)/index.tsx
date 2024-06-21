import SafeAreaContainer from '@/components/general/SafeAreaContainer';
import SearchingSystem from '@/components/general/SearchingSystem';
import { Text, View } from 'react-native';
import useGetJobs from '@/hooks/jobs/useGetJobs';
import { JobType } from '@/types/types';
import LoadingScreen from '@/components/general/LoadingScreen';
import JobsList from '@/components/jobs/JobsList';

function JobsScreen() {
  const { isPending, jobs } = useGetJobs();
  let filteredJobs: JobType[] | undefined = jobs;
  if (!filteredJobs) return;

  let content = <JobsList filteredJobs={filteredJobs} />;
  if (isPending) content = <LoadingScreen />;

  return (
    <SafeAreaContainer>
      <View className='flex-1'>
        <Text className='bg-blue-50 uppercase text-center pt-7 font-bold text-cyan-700 tracking-widest text-2xl'>
          Doggycareer
        </Text>
        <SearchingSystem />

        {content}
      </View>
    </SafeAreaContainer>
  );
}

export default JobsScreen;
