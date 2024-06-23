import { updateSavedJobs } from '@/data/jobs/apiSavedAppliedJobs';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateSavedJob() {
  const queryClient = useQueryClient();

  const { mutate: updateSaveJob } = useMutation({
    mutationFn: updateSavedJobs,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['storedJobs'] }),

    onError: (error) => console.log(error.message),
  });

  return { updateSaveJob };
}
