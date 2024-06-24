import LoadingScreen from '@/components/general/LoadingScreen';
import CompanyDetailCard from '@/components/jobs/CompanyDetailCard';
import JobActionButtons from '@/components/jobs/JobActionButtons';
import JobArchiveAction from '@/components/jobs/JobArchiveAction';
import JobContent from '@/components/jobs/JobContent';
import JobInfoBadges from '@/components/jobs/JobInfoBadges';
import SuggestedJobsList from '@/components/jobs/SuggestedJobsList';
import { useGetUser } from '@/hooks/auth/useGetUser';
import useGetSingleJobs from '@/hooks/jobs/useGetSingleJob';
import useGetStoredJobs from '@/hooks/jobs/useGetStoredJobs';
import { jobPosted } from '@/utilities/jobPosted';
import { useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

function JobDetailsScreen() {
  const { jobID }: { jobID?: string } = useLocalSearchParams();
  const { isPending: iSGettingJob, job } = useGetSingleJobs(jobID as string);
  const { isPending: isGettingStoredJobs, storedJobs } = useGetStoredJobs();
  const { isPending: isGettingUser, getUser } = useGetUser();

  const currentUserStoredJobs = storedJobs?.find(
    (item) => item?.userId === getUser?.id
  );
  const isApplied = currentUserStoredJobs?.appliedJobs.includes(jobID);
  const isArchived = currentUserStoredJobs?.archive.includes(jobID);

  if (!jobID) return;
  if (iSGettingJob || isGettingUser || isGettingStoredJobs)
    return <LoadingScreen />;
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
          officeType={job?.officeType}
        />

        {isApplied ? (
          <JobArchiveAction jobID={jobID} />
        ) : isArchived ? (
          <View className='flex-row items-center mt-8'>
            <FontAwesome6
              name='box-archive'
              size={20}
              color='rgb(156 163 175)'
            />
            <Text className='text-base text-gray-400 font-semibold tracking-wider ml-1'>
              Job is Archived.
            </Text>
          </View>
        ) : (
          <JobActionButtons
            savedJobs={currentUserStoredJobs?.savedJobs}
            jobId={jobID}
            userId={getUser?.id}
          />
        )}

        <JobContent job={job} />

        {!isApplied && !isArchived && (
          <View className='mt-8 pb-6 border-b-[1px] border-b-gray-300 flex-row items-center'>
            <Text className='text-[15px] text-gray-500 font-semibold tracking-wider text-justify mr-3'>
              Are you interested?
            </Text>
            <Pressable className='flex-1 bg-cyan-700 text-center py-1 rounded-full items-center justify-center mr-2'>
              <Text className='text-gray-100 text-[15px] font-medium tracking-wider'>
                Apply Now
              </Text>
            </Pressable>
          </View>
        )}

        <CompanyDetailCard job={job} />
      </View>

      <View className='mt-12 pb-16 px-5 pt-8 bg-cyan-50'>
        <Text className='text-2xl font-semibold text-cyan-700 tracking-wider mb-8'>
          Other Job Suggestions
        </Text>
        <SuggestedJobsList jobId={jobID} />
      </View>
    </ScrollView>
  );
}

export default JobDetailsScreen;
