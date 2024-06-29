import { JobType } from '@/types/types';
import { Text, View } from 'react-native';

function JobContent({ job }: { job: JobType }) {
  const descriptions = job?.jobDescription.trim().split('\\n');
  const responsibilities = job?.responsibilities.trim().split('\\n');
  const qualifications = job?.qualifications.trim().split('\\n');

  return (
    <View className='mt-8 border-b-[1px] border-b-gray-300'>
      <Text className='text-cyan-700 text-lg font-semibold mb-2'>
        About the Job:
      </Text>

      <View className='mb-8'>
        {descriptions?.map((item) => (
          <Text key={item} className='text-base text-gray-600 mb-2'>
            {item.trim()}
          </Text>
        ))}
      </View>

      <Text className='text-cyan-700 text-lg font-semibold mb-2'>
        Responsibilities:
      </Text>

      <View className='mb-8'>
        {responsibilities?.map((item) => (
          <Text key={item} className='text-base text-gray-600 mb-2'>
            {item.trim()}
          </Text>
        ))}
      </View>

      <Text className='text-cyan-700 text-lg font-semibold mb-2'>
        Qualifications:
      </Text>
      <View className='mb-4'>
        {qualifications?.map((item) => (
          <Text key={item} className='text-base text-gray-600 mb-2'>
            {item.trim()}
          </Text>
        ))}
      </View>
    </View>
  );
}

export default JobContent;
