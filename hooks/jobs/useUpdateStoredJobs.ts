import {
  updateAppliedJobs,
  updateArchiveJobs,
  updateSavedJobs,
} from '@/data/jobs/apiSavedAppliedJobs';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateSavedJob() {
  const queryClient = useQueryClient();

  const { isPending, mutate: updateSaveJob } = useMutation({
    mutationFn: updateSavedJobs,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['storedJobs'] }),

    onError: (error) => console.log(error.message),
  });

  return { isPending, updateSaveJob };
}

export function useUpdateAppliedJob() {
  const queryClient = useQueryClient();

  const { isPending, mutate: updateApplyJobs } = useMutation({
    mutationFn: updateAppliedJobs,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['storedJobs'] }),

    onError: (error) => console.log(error.message),
  });

  return { isPending, updateApplyJobs };
}

export function useUpdateArchiveJob() {
  const queryClient = useQueryClient();

  const { isPending, mutate: updateArchiveJob } = useMutation({
    mutationFn: updateArchiveJobs,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['storedJobs'] }),

    onError: (error) => console.log(error.message),
  });

  return { isPending, updateArchiveJob };
}
