import { useState } from 'react';
import { trpc } from '@/src/trpc/react';

export type ContentQuestion = {
  id: string;
  text: string;
  answer: string;
};

export const useContentManager = () => {
  const { data = [], isLoading, refetch } = trpc.contentManagement.getAll.useQuery();
  const createMutation = trpc.contentManagement.create.useMutation();
  const deleteMutation = trpc.contentManagement.delete.useMutation();
  // Update mutation can be added

  const create = async (q: Omit<ContentQuestion, 'id'>) => {
    await createMutation.mutateAsync(q);
    refetch();
  };
  const remove = async (id: string) => {
    await deleteMutation.mutateAsync({ id });
    refetch();
  };
  // Update function can be added

  return { questions: data as ContentQuestion[], isLoading, create, remove };
};
