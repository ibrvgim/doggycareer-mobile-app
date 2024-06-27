import SearchingSystem from '@/components/general/SearchingSystem';
import { Image, StatusBar, Text, View } from 'react-native';
import useGetJobs from '@/hooks/jobs/useGetJobs';
import LoadingScreen from '@/components/general/LoadingScreen';
import JobsList from '@/components/jobs/JobsList';
import { useSelector } from 'react-redux';

function JobsScreen() {
  const { isPending, jobs } = useGetJobs();
  const searches = useSelector(
    (state: { searchSystem: { title: string; region: string } }) =>
      state.searchSystem
  );

  let content = <JobsList jobs={jobs} />;
  if (isPending) content = <LoadingScreen />;
  return (
    <View className='flex-1'>
      <StatusBar barStyle={'dark-content'} />
      <View className='flex-row justify-center items-center gap-3 bg-blue-50 pt-8'>
        <Image
          source={require('../../assets/images/logo.png')}
          className='w-12 h-12'
        />
        <Text className='uppercase text-center font-bold text-cyan-700 tracking-widest text-2xl'>
          Doggycareer
        </Text>
      </View>
      <SearchingSystem searches={searches} />

      {content}
    </View>
  );
}

export default JobsScreen;
