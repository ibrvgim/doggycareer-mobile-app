import { getUserAPI } from '@/data/auth/apiAuth';
import { useQuery } from '@tanstack/react-query';

export function useGetUser() {
  const { isPending, data: getUser } = useQuery({
    queryKey: ['user'],
    queryFn: getUserAPI,
  });

  return { isPending, getUser };
}
