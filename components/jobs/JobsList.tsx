import { Ionicons } from '@expo/vector-icons';
import { FlatList, Pressable, Text, View } from 'react-native';
import JobCard from './JobCard';
import { jobPosted } from '@/utilities/jobPosted';
import { JobType } from '@/types/types';
import { useRouter } from 'expo-router';

function JobsList({ filteredJobs }: { filteredJobs: JobType[] }) {
  const route = useRouter();

  return (
    <View className='flex-1'>
      <View className='flex-row justify-between items-center bg-blue-50 py-4 px-3'>
        <Text className='font-medium text-gray-600'>
          Jobs: {filteredJobs?.length}
        </Text>
        <Pressable
          className='flex-row items-center gap-2'
          onPress={() => route.push('modal')}
        >
          <Ionicons name='filter-outline' size={18} color='rgb(8 145 178)' />
          <Text className='font-medium text-cyan-600'>Filters</Text>
        </Pressable>
      </View>

      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <JobCard
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

export default JobsList;
