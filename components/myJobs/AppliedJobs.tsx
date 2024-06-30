import { FlatList, View } from 'react-native';
import SuggestedJobCard from '../jobs/SuggestedJobCard';
import useGetJobs from '@/hooks/jobs/useGetJobs';
import LoadingScreen from '../general/LoadingScreen';
import { jobPosted } from '@/utilities/jobPosted';
import StoredJobsEmpty from './StoredJobsEmpty';
import { Ionicons } from '@expo/vector-icons';

function AppliedJobs({ appliedJobs }: { appliedJobs: string[] }) {
  const { isPending, jobs } = useGetJobs();

  const allAppliedJobs = jobs?.filter((job) =>
    appliedJobs?.includes(job.id.toString())
  );

  if (allAppliedJobs?.length === 0) {
    return (
      <StoredJobsEmpty
        title='No Applied Jobs'
        description='Start your job search now and be one of the first to apply for new opportunities.'
      >
        <Ionicons
          name='heart-dislike-outline'
          size={80}
          color='rgb(107 114 128)'
        />
      </StoredJobsEmpty>
    );
  }

  if (isPending) return <LoadingScreen />;
  return (
    <View className='flex-1 px-3 pt-3'>
      <FlatList
        data={allAppliedJobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SuggestedJobCard
            jobID={item?.id}
            title={item?.jobTitle}
            companyName={item?.companyName}
            location={item?.location}
            jobType={item?.jobType}
            postedAt={jobPosted(item?.postedAt)}
          />
        )}
      />
    </View>
  );
}
export default AppliedJobs;
