import useGetJobs from '@/hooks/jobs/useGetJobs';
import { View } from 'react-native';
import SuggestedJobCard from './SuggestedJobCard';
import { jobPosted } from '@/utilities/jobPosted';

function SuggestedJobsList({ jobId }: { jobId: string }) {
  const { jobs } = useGetJobs();

  return (
    <View>
      <View className='flex-col'>
        {jobs
          ?.filter((job) => job.id.toString() !== jobId)
          .slice(0, 5)
          .map((job) => (
            <SuggestedJobCard
              key={job.id}
              id={job?.id}
              image={job?.logo}
              title={job?.jobTitle}
              companyName={job?.companyName}
              location={job?.location}
              jobType={job?.jobType}
              postedAt={jobPosted(job?.postedAt)}
            />
          ))}
      </View>
    </View>
  );
}

export default SuggestedJobsList;
