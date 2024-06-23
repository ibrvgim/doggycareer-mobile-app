import LoadingScreen from '@/components/general/LoadingScreen';
import AppliedJobs from '@/components/myJobs/AppliedJobs';
import ArchiveJobs from '@/components/myJobs/ArchiveJobs';
import MyJobsTab from '@/components/myJobs/MyJobsTab';
import SavedJobs from '@/components/myJobs/SavedJobs';
import { useGetUser } from '@/hooks/auth/useGetUser';
import useGetStoredJobs from '@/hooks/jobs/useGetStoredJobs';
import { useState } from 'react';
import { StatusBar, View } from 'react-native';

function MyJobsScreen() {
  const [myJobs, setMyJobs] = useState('saved');
  const { isPending: isGettingStoredJobs, storedJobs } = useGetStoredJobs();
  const { isPending: isGettingUser, getUser } = useGetUser();

  function handleSavedJobs() {
    setMyJobs('saved');
  }

  function handleAppliedJobs() {
    setMyJobs('applied');
  }

  function handleArchive() {
    setMyJobs('archive');
  }

  const currentUserData = storedJobs?.find(
    (item) => item.userId === getUser?.id
  );

  const savedJobs = currentUserData?.savedJobs;
  const appliedJobs = currentUserData?.appliedJobs;
  const archiveJobs = currentUserData?.archive;

  if (isGettingStoredJobs || isGettingUser) return <LoadingScreen />;
  return (
    <View className='flex-1'>
      <StatusBar barStyle={'dark-content'} />
      <View className='flex-row py-6 bg-white px-3'>
        <MyJobsTab myJobs={myJobs} toggleMyJobs={handleSavedJobs} tag='saved'>
          Saved Jobs
        </MyJobsTab>

        <MyJobsTab
          myJobs={myJobs}
          toggleMyJobs={handleAppliedJobs}
          tag='applied'
        >
          Applied Jobs
        </MyJobsTab>

        <MyJobsTab myJobs={myJobs} toggleMyJobs={handleArchive} tag='archive'>
          Archive
        </MyJobsTab>
      </View>

      {myJobs === 'saved' ? (
        <SavedJobs savedJobs={savedJobs} />
      ) : myJobs === 'applied' ? (
        <AppliedJobs appliedJobs={appliedJobs} />
      ) : (
        <ArchiveJobs archiveJobs={archiveJobs} />
      )}
    </View>
  );
}

export default MyJobsScreen;
