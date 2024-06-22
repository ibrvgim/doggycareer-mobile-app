import { getUserStoredJobs } from '@/data/jobs/apiSavedAppliedJobs';
import { useQuery } from '@tanstack/react-query';

export default function useGetStoredJobs() {
  const { isPending, data: storedJobs } = useQuery({
    queryKey: ['storedJobs'],
    queryFn: getUserStoredJobs,
  });

  return { isPending, storedJobs };
}
