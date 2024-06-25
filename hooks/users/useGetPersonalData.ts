import { getPersonalData } from '@/data/users/apiUsers';
import { useQuery } from '@tanstack/react-query';

export function useGetPersonalData() {
  const { isPending, data } = useQuery({
    queryKey: ['personalData'],
    queryFn: getPersonalData,
  });

  return { isPending, data };
}
