import {
  updateAppliedJobs,
  updateArchiveJobs,
  updateSavedJobs,
} from '@/data/jobs/apiSavedAppliedJobs';
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

export function useUpdateAppliedJob() {
  const queryClient = useQueryClient();

  const { mutate: updateApplyJobs } = useMutation({
    mutationFn: updateAppliedJobs,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['storedJobs'] }),

    onError: (error) => console.log(error.message),
  });

  return { updateApplyJobs };
}

export function useUpdateArchiveJob() {
  const queryClient = useQueryClient();

  const { mutate: updateArchiveJob } = useMutation({
    mutationFn: updateArchiveJobs,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['storedJobs'] }),

    onError: (error) => console.log(error.message),
  });

  return { updateArchiveJob };
}
