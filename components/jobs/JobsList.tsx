import { Ionicons } from '@expo/vector-icons';
import { FlatList, Pressable, Text, View } from 'react-native';
import JobCard from './JobCard';
import { jobPosted } from '@/utilities/jobPosted';
import { FiltersType, JobType } from '@/types/types';
import { useRouter } from 'expo-router';
import { useSelector } from 'react-redux';
import { differenceInDays, differenceInHours } from 'date-fns';
import JobsEmptyCard from './JobsEmptyCard';
import useGetStoredJobs from '@/hooks/jobs/useGetStoredJobs';
import { useGetUser } from '@/hooks/auth/useGetUser';

function JobsList({ jobs }: { jobs: JobType[] | undefined }) {
  const route = useRouter();
  const filters = useSelector(
    (state: { filters: FiltersType }) => state.filters
  );
  const searches = useSelector(
    (state: { searchSystem: { title: string; region: string } }) =>
      state.searchSystem
  );
  const { getUser } = useGetUser();
  const { storedJobs } = useGetStoredJobs();
  const { sortBy, publicationDate, jobType, officeType } = filters;

  const archiveJobs = storedJobs?.find(
    (item) => item.userId === getUser?.id
  )?.archive;

  let filteredJobs: JobType[] | undefined = jobs?.filter(
    (job) =>
      !archiveJobs?.includes(job.id.toString()) &&
      job.postAuthor !== getUser?.id
  );

  if (searches?.region || searches?.title) {
    filteredJobs = filteredJobs?.filter((job) => {
      if (searches?.region && searches?.title) {
        return (
          job.location.toLowerCase().trim().split('-').join(' ') ===
            searches?.region?.toLowerCase().trim().split('-').join(' ') &&
          (job.industry.toLowerCase().trim().split('-').join(' ') ===
            searches?.title?.toLowerCase().trim().split('-').join(' ') ||
            job.jobTitle
              .toLowerCase()
              .trim()
              .split('-')
              .join(' ')
              .includes(
                searches?.title?.toLowerCase().trim().split('-').join(' ')
              ))
        );
      } else if (searches?.region) {
        return (
          job.location.toLowerCase().trim().split('-').join(' ') ===
          searches?.region?.toLowerCase().trim().split('-').join(' ')
        );
      } else if (searches?.title) {
        return (
          job.industry.toLowerCase().trim().split('-').join(' ') ===
            searches?.title?.toLowerCase().trim().split('-').join(' ') ||
          job.jobTitle
            .toLowerCase()
            .trim()
            .split('-')
            .join(' ')
            .includes(
              searches?.title?.toLowerCase().trim().split('-').join(' ')
            )
        );
      } else return job;
    });
  }

  if (sortBy) {
    filteredJobs = filteredJobs?.sort((a, b) => {
      if (sortBy === 'recent') {
        return new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime();
      } else return NaN;
    });
  }

  if (publicationDate) {
    filteredJobs = filteredJobs?.filter((job) => {
      if (publicationDate === '24hours')
        return differenceInHours(new Date(), new Date(job.postedAt)) <= 24;
      else if (publicationDate === '7days')
        return differenceInDays(new Date(), new Date(job.postedAt)) <= 8;
      else if (publicationDate === '14days')
        return differenceInDays(new Date(), new Date(job.postedAt)) <= 15;
    });
  }

  if (jobType) {
    filteredJobs = filteredJobs?.filter((job) => {
      if (jobType === 'partTime')
        return job.jobType.toLowerCase() === 'part time';
      else if (jobType === 'fullTime')
        return job.jobType.toLowerCase() === 'full time';
      else return job;
    });
  }

  if (officeType) {
    filteredJobs = filteredJobs?.filter((job) => {
      if (officeType === 'hybrid')
        return job.officeType.toLowerCase() === 'hybrid';
      else if (officeType === 'onSite')
        return job.officeType.toLowerCase() === 'on site';
      else if (officeType === 'remote')
        return job.officeType.toLowerCase() === 'remote';
      else return job;
    });
  }

  if (filteredJobs?.length === 0) return <JobsEmptyCard />;
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
            officeType={item?.officeType}
            postedAt={jobPosted(item?.postedAt)}
          />
        )}
      />
    </View>
  );
}

export default JobsList;
