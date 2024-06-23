import { FlatList, View } from 'react-native';
import SuggestedJobCard from '../jobs/SuggestedJobCard';
import useGetJobs from '@/hooks/jobs/useGetJobs';
import LoadingScreen from '../general/LoadingScreen';
import { jobPosted } from '@/utilities/jobPosted';
import StoredJobsEmpty from './StoredJobsEmpty';
import { Ionicons } from '@expo/vector-icons';

function ArchiveJobs({ archiveJobs }: { archiveJobs: string[] }) {
  const { isPending, jobs } = useGetJobs();

  const allArchiveJobs = jobs?.filter((job) =>
    archiveJobs?.includes(job.id.toString())
  );

  if (allArchiveJobs?.length === 0) {
    return (
      <StoredJobsEmpty title='No Jobs in the Archive'>
        <Ionicons name='archive-outline' size={80} color='rgb(107 114 128)' />
      </StoredJobsEmpty>
    );
  }

  if (isPending) return <LoadingScreen />;
  return (
    <View className='flex-1 px-3 pt-3'>
      <FlatList
        data={allArchiveJobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SuggestedJobCard
            jobID={item?.id}
            image={item?.logo}
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

export default ArchiveJobs;
