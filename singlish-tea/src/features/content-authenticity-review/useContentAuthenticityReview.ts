import { useState } from 'react';
import { api } from '~/trpc/react';

export type ContentAuthenticityReviewInput = {
  questionId: string;
  reason: string;
};

export const useContentAuthenticityReview = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mutation = api.contentAuthenticityReview.submitReview.useMutation();

  const submitReview = async (input: ContentAuthenticityReviewInput) => {
    setIsSubmitting(true);
    try {
      await mutation.mutateAsync(input);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitReview, isSubmitting, submitted };
};
