import { FlatList, View } from 'react-native';
import { jobPosted } from '@/utilities/jobPosted';
import { JobType } from '@/types/types';
import useGetStoredJobs from '@/hooks/jobs/useGetStoredJobs';
import JobCard from '../jobs/JobCard';

function SuggestedJobsList({
  jobs,
  userId,
}: {
  jobs: JobType[] | undefined;
  userId: string | undefined;
}) {
  const { storedJobs } = useGetStoredJobs();
  const arhivedJobs = storedJobs?.find(
    (item) => item.userId === userId
  )?.archive;

  const filteredJobs = jobs?.filter(
    (item) =>
      item.postAuthor !== userId && !arhivedJobs?.includes(item.id.toString())
  );

  return (
    <View className='flex-1 bg-gray-100'>
      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <JobCard
            jobID={item?.id}
            image={item?.logo}
            title={item?.jobTitle}
            companyName={item?.companyName}
            location={item?.location}
            jobType={item?.jobType}
            postedAt={jobPosted(item?.postedAt)}
            officeType={item?.officeType}
          />
        )}
      />
    </View>
  );
}

export default SuggestedJobsList;
