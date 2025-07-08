import React, { useState } from 'react';
import { useContentAuthenticityReview } from './useContentAuthenticityReview';

export type ContentAuthenticityReviewProps = {
  questionId: string;
};

/**
 * ContentAuthenticityReview - UI for flagging quiz content as inauthentic or problematic.
 */
export const ContentAuthenticityReview: React.FC<ContentAuthenticityReviewProps> = ({ questionId }) => {
  const [reason, setReason] = useState('');
  const { submitReview, isSubmitting, submitted } = useContentAuthenticityReview();

  if (submitted) {
    return <div className="text-green-600">Thank you for your feedback!</div>;
  }

  return (
    <form
      className="flex flex-col gap-2 mt-4"
      onSubmit={e => {
        e.preventDefault();
        void submitReview({ questionId, reason });
      }}
    >
      <label htmlFor="authenticity-reason" className="text-sm">Flag this question as inauthentic/problematic:</label>
      <textarea
        id="authenticity-reason"
        className="textarea textarea-bordered"
        value={reason}
        onChange={e => setReason(e.target.value)}
        required
        minLength={5}
        placeholder="Describe the issue..."
      />
      <button
        type="submit"
        className="btn btn-warning"
        disabled={isSubmitting || !reason.trim()}
      >
        {isSubmitting ? 'Submitting...' : 'Flag Content'}
      </button>
    </form>
  );
};

export default ContentAuthenticityReview;
