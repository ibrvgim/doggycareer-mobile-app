import { getCities } from '@/data/general/getCities';
import { useQuery } from '@tanstack/react-query';

export default function useGetCities() {
  const { data: cities } = useQuery({
    queryKey: ['cities'],
    queryFn: getCities,
  });

  return { cities };
}
