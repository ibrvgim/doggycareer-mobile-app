import { createPersonalData, updatePersonalData } from '@/data/users/apiUsers';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreatePersonalData() {
  const queryClient = useQueryClient();

  const { mutate: createData } = useMutation({
    mutationFn: createPersonalData,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['personalData'] }),
  });

  return { createData };
}

export default function useUpdatePersonalData() {
  const queryClient = useQueryClient();

  const { isPending, mutate: updateData } = useMutation({
    mutationFn: updatePersonalData,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['personalData'] }),
  });

  return { isPending, updateData };
}
