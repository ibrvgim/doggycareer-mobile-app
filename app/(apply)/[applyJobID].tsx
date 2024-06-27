import LoadingScreen from '@/components/general/LoadingScreen';
import ApplyForm from '@/components/jobs/ApplyForm';
import JobInfoBadges from '@/components/jobs/JobInfoBadges';
import useGetSingleJobs from '@/hooks/jobs/useGetSingleJob';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

function ApplyJobScreen() {
  const { applyJobID } = useLocalSearchParams();
  const { isPending, job } = useGetSingleJobs(applyJobID as string);

  if (isPending) return <LoadingScreen />;
  return (
    <View className='flex-1 pb-5 px-4 bg-white'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className='text-2xl font-semibold text-gray-600 opacity-90 mt-5 mb-4'>
          Apply for{' '}
          <Text className='text-2xl font-semibold text-cyan-700 opacity-90'>
            {job?.jobTitle}
          </Text>{' '}
          Position
        </Text>

        <JobInfoBadges
          companyName={job?.companyName}
          jobType={job?.jobType}
          location={job?.location}
          officeType={job?.officeType}
        />

        <ApplyForm applyJobID={applyJobID} />
      </ScrollView>
    </View>
  );
}

export default ApplyJobScreen;
