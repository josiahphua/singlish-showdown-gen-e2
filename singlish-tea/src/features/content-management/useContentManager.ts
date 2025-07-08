import { api } from '~/trpc/react';

export type ContentQuestion = {
  id: string;
  text: string;
  answer: string;
};

export const useContentManager = () => {
  const { data = [], isLoading, refetch } = api.contentManagement.getAll.useQuery();
  const createMutation = api.contentManagement.create.useMutation();
  const deleteMutation = api.contentManagement.delete.useMutation();
  // Update mutation can be added

  const create = async (q: Omit<ContentQuestion, 'id'>) => {
    await createMutation.mutateAsync(q);
    void refetch();
  };
  const remove = async (id: string) => {
    await deleteMutation.mutateAsync({ id });
    void refetch();
  };
  // Update function can be added

  return { questions: data as ContentQuestion[], isLoading, create, remove };
};
