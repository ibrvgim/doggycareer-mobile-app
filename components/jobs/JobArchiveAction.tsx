import { ActivityIndicator, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  useUpdateAppliedJob,
  useUpdateArchiveJob,
} from '@/hooks/jobs/useUpdateStoredJobs';
import { useGetUser } from '@/hooks/auth/useGetUser';
import useGetStoredJobs from '@/hooks/jobs/useGetStoredJobs';
import PressableCustom from '../general/Pressable';

function JobArchiveAction({ jobID }: { jobID: string | undefined }) {
  const { getUser } = useGetUser();
  const { storedJobs } = useGetStoredJobs();
  const { isPending, updateArchiveJob } = useUpdateArchiveJob();
  const { updateApplyJobs } = useUpdateAppliedJob();

  const currentUserStoredJobs = storedJobs?.find(
    (item) => item.userId === getUser?.id
  );
  const appliedJobs = currentUserStoredJobs?.appliedJobs.filter(
    (item: string) => item !== jobID
  );
  const archivedJobs = currentUserStoredJobs?.archive;

  function handleArchive() {
    updateApplyJobs({ userId: getUser?.id as string, applied: appliedJobs });
    updateArchiveJob({
      userId: getUser?.id as string,
      archived: [jobID, ...archivedJobs],
    });
  }

  return (
    <View className='mt-8'>
      <View className='flex-row items-center mb-4'>
        <MaterialCommunityIcons
          name='file-document-edit-outline'
          size={24}
          color='rgb(156 163 175)'
        />
        <Text className='text-base text-gray-400 font-semibold tracking-wider ml-1'>
          You have applied for this Job.
        </Text>
      </View>

      <PressableCustom
        className='bg-gray-600 text-center py-2 rounded-full items-center mr-2'
        onPress={handleArchive}
      >
        {isPending ? (
          <ActivityIndicator size='small' color='white' />
        ) : (
          <Text className='text-gray-100 font-medium tracking-wider'>
            Move to Archive
          </Text>
        )}
      </PressableCustom>
    </View>
  );
}

export default JobArchiveAction;
