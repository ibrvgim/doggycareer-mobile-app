import { JobType } from '@/types/types';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, Text, View } from 'react-native';

function CompanyDetailCard({ job }: { job: JobType }) {
  return (
    <View className='flex-row mt-12 border-[1px] border-gray-300 py-4 px-3 rounded-lg'>
      <View className='border-[1px] border-gray-300 rounded-md mr-4 self-center'>
        <Image
          source={require('../../assets/images/company.png')}
          className='w-14 h-14 m-2'
        />
      </View>

      <View>
        <Text className='text-lg tracking-wider text-gray-500 font-semibold mb-2'>
          {job?.companyName}
        </Text>

        <View className='gap-3'>
          <View className='flex-row items-center mr-5'>
            <Ionicons
              name='location-outline'
              size={17}
              color='rgb(251 113 133)'
            />
            <Text className='text-gray-500 ml-2 text-[13px]'>
              {job?.location}
            </Text>
          </View>

          <View className='flex-row items-center mr-5'>
            <Ionicons
              name='people-outline'
              size={17}
              color='rgb(251 113 133)'
            />
            <Text className='text-gray-500 ml-2 text-[13px]'>
              {job?.employeesNumber}
            </Text>
          </View>

          {job?.website && (
            <View className='flex-row items-center'>
              <Ionicons
                name='link-outline'
                size={17}
                color='rgb(251 113 133)'
              />
              <Link
                href={job.website}
                className='text-blue-500 text-[13px] ml-2'
              >
                {job.website.length > 30
                  ? job?.website.slice(0, 30) + '...'
                  : job?.website}
              </Link>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

export default CompanyDetailCard;
