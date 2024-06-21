import { getSingleJob } from '@/data/jobs/apiJobs';
import { useQuery } from '@tanstack/react-query';

export default function useGetSingleJobs(id: string) {
  const { isPending, data: job } = useQuery({
    queryKey: ['job'],
    queryFn: () => getSingleJob(id),
  });

  return { isPending, job };
}
