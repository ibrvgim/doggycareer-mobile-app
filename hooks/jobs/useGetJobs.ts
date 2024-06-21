import { getJobs } from '@/data/jobs/apiJobs';
import { useQuery } from '@tanstack/react-query';

export default function useGetJobs() {
  const { isPending, data: jobs } = useQuery({
    queryKey: ['jobs'],
    queryFn: getJobs,
  });

  return { isPending, jobs };
}
