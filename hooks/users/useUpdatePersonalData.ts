import { updatePersonalData } from '@/data/users/apiUsers';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUpdatePersonalData() {
  const queryClient = useQueryClient();

  const { mutate: updateData } = useMutation({
    mutationFn: updatePersonalData,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['personalData'] }),
  });

  return { updateData };
}
