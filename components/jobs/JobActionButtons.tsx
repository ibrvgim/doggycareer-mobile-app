import { useUpdateSavedJob } from '@/hooks/jobs/useUpdateStoredJobs';
import { Pressable, Text, View } from 'react-native';

function JobActionButtons({
  savedJobs,
  jobId,
  userId,
}: {
  savedJobs: string[];
  jobId: string;
  userId: string | undefined;
}) {
  const isSaved = savedJobs?.includes(jobId);
  const { updateSaveJob } = useUpdateSavedJob();

  function handleJobSaving() {
    if (userId)
      if (savedJobs.includes(jobId)) {
        const clearedJobs = savedJobs.filter((job: string) => job !== jobId);
        updateSaveJob({ userId, saved: clearedJobs });
      } else updateSaveJob({ userId, saved: [jobId, ...savedJobs] });
  }

  return (
    <View className='mt-8 flex-row'>
      <Pressable className='flex-1 bg-cyan-700 text-center py-2 rounded-full items-center justify-center mr-2'>
        <Text className='text-gray-100 text-[15px] font-medium tracking-wider'>
          Apply Now
        </Text>
      </Pressable>

      <Pressable
        className={`flex-1 border-[1px] text-center py-1 rounded-full items-center justify-center ${
          isSaved ? 'border-red-500' : 'border-cyan-700'
        }`}
        onPress={handleJobSaving}
      >
        {isSaved ? (
          <Text className='text-red-500 text-[14px] font-medium tracking-wider'>
            Remove My Jobs
          </Text>
        ) : (
          <Text className='text-cyan-700 text-[15px] font-medium tracking-wider'>
            Save
          </Text>
        )}
      </Pressable>
    </View>
  );
}

export default JobActionButtons;
