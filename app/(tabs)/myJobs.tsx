import AppliedJobs from '@/components/myJobs/AppliedJobs';
import MyJobsTab from '@/components/myJobs/MyJobsTab';
import SavedJobs from '@/components/myJobs/SavedJobs';
import { useState } from 'react';
import { StatusBar, View } from 'react-native';

function MyJobsScreen() {
  const [myJobs, setMyJobs] = useState('saved');

  function toggleMyJobs() {
    if (myJobs === 'saved') setMyJobs('applied');
    else setMyJobs('saved');
  }

  return (
    <View className='flex-1'>
      <StatusBar barStyle={'dark-content'} />
      <View className='flex-row py-6 bg-white px-3'>
        <MyJobsTab myJobs={myJobs} toggleMyJobs={toggleMyJobs} tag='saved'>
          Saved Jobs
        </MyJobsTab>

        <MyJobsTab myJobs={myJobs} toggleMyJobs={toggleMyJobs} tag='applied'>
          Applied Jobs
        </MyJobsTab>
      </View>

      {myJobs === 'saved' ? <SavedJobs /> : <AppliedJobs />}
    </View>
  );
}

export default MyJobsScreen;
