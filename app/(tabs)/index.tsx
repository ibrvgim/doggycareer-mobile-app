import SafeAreaContainer from '@/components/general/SafeAreaContainer';
import SearchingSystem from '@/components/general/SearchingSystem';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import JobCard from '@/components/jobs/JobCard';

function JobsScreen() {
  return (
    <SafeAreaContainer>
      <View>
        {/* SEARCHING INPUTS */}
        <SearchingSystem />

        {/* FILTER */}
        <View className='flex-row justify-between items-center bg-blue-50 py-4 px-3'>
          <Text className='font-medium text-gray-600'>Jobs: 287</Text>
          <Pressable className='flex-row items-center gap-2'>
            <Ionicons name='filter-outline' size={18} color='rgb(8 145 178)' />
            <Text className='font-medium text-cyan-600'>Filters</Text>
          </Pressable>
        </View>

        {/* JOBS LIST */}
        <View>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </View>
      </View>
    </SafeAreaContainer>
  );
}

export default JobsScreen;
