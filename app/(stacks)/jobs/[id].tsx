import LoadingScreen from '@/components/general/LoadingScreen';
import CompanyDetailCard from '@/components/jobs/CompanyDetailCard';
import JobActionButtons from '@/components/jobs/JobActionButtons';
import JobContent from '@/components/jobs/JobContent';
import JobInfoBadges from '@/components/jobs/JobInfoBadges';
import SuggestedJobsList from '@/components/jobs/SuggestedJobsList';
import useGetSingleJobs from '@/hooks/jobs/useGetSingleJob';
import { jobPosted } from '@/utilities/jobPosted';
import { useLocalSearchParams } from 'expo-router';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';

function JobDetailsScreen() {
  const { id }: { id?: string } = useLocalSearchParams();
  const { isPending, job } = useGetSingleJobs(id as string);
  if (!id) return;

  console.log(isPending);

  if (isPending) return <LoadingScreen />;

  return (
    <ScrollView className='flex-1 border-t-[1px] bg-white border-t-gray-300'>
      <View className='px-5 pt-8'>
        <Text className='text-2xl font-bold opacity-90 text-cyan-700 tracking-widest mb-6'>
          {job?.jobTitle}
        </Text>

        <JobInfoBadges
          companyName={job?.companyName}
          location={job?.location}
          jobType={job?.jobType}
          postedAt={jobPosted(job?.postedAt)}
        />
        <JobActionButtons />
        <JobContent />

        <View className='mt-6 pb-6 border-b-[1px] border-b-gray-300 flex-row items-center'>
          <Text className='text-[15px] text-gray-500 font-semibold tracking-wider text-justify mr-3'>
            Are you interested?
          </Text>
          <Pressable className='flex-1 bg-cyan-700 text-center py-1 rounded-full items-center justify-center mr-2'>
            <Text className='text-gray-100 text-[15px] font-medium tracking-wider'>
              Apply Now
            </Text>
          </Pressable>
        </View>

        <CompanyDetailCard />
      </View>

      <View className='mt-12 pb-16 px-5 pt-8 bg-cyan-50'>
        <Text className='text-2xl font-semibold text-cyan-700 tracking-wider mb-8'>
          Other Job Suggestions
        </Text>
        <SuggestedJobsList jobId={id} />
      </View>
    </ScrollView>
  );
}

export default JobDetailsScreen;
