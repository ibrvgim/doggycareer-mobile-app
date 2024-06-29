import { updatePersonalData } from '@/data/users/apiUsers';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUpdatePersonalData() {
  const queryClient = useQueryClient();

  const { isPending, mutate: updateData } = useMutation({
    mutationFn: updatePersonalData,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['personalData'] }),
  });

  return { isPending, updateData };
}
