import { useUpdateSavedJob } from '@/hooks/jobs/useUpdateStoredJobs';
import { useRouter } from 'expo-router';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';

function JobActionButtons({
  savedJobs,
  jobId,
  userId,
}: {
  savedJobs: string[];
  jobId: string;
  userId: string | undefined;
}) {
  const route = useRouter();
  const isSaved = savedJobs?.includes(jobId);
  const { isPending, updateSaveJob } = useUpdateSavedJob();

  function handleJobSaving() {
    if (userId)
      if (savedJobs.includes(jobId)) {
        const clearedJobs = savedJobs.filter((job: string) => job !== jobId);
        updateSaveJob({ userId, saved: clearedJobs });
      } else updateSaveJob({ userId, saved: [jobId, ...savedJobs] });
  }

  return (
    <View className='mt-8 flex-row'>
      <Pressable
        className='flex-1 bg-cyan-700 text-center py-2 rounded-full items-center justify-center mr-2'
        onPress={() => route.push(`(apply)/${jobId}`)}
      >
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
        {isPending ? (
          <ActivityIndicator
            color={isSaved ? 'rgb(239 68 68)' : 'rgb(14 116 144)'}
            size='small'
          />
        ) : isSaved ? (
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
