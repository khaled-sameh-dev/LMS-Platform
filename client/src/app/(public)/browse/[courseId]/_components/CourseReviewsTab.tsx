// components/course/tabs/CourseReviewsTab.tsx
"use client";

import { Star, Loader2 } from "lucide-react";

interface ReviewUser {
  firstName: string;
  lastName: string;
  avatar?: string;
}

interface Review {
  id: string;
  rating: number;
  comment: string;
  user: ReviewUser;
  createdAt: string;
}

interface ReviewsData {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

interface CourseReviewsTabProps {
  reviewsData?: ReviewsData;
  isLoading: boolean;
}

const CourseReviewsTab = ({
  reviewsData,
  isLoading,
}: CourseReviewsTabProps) => {
  if (isLoading) {
    return (
      <div className="bg-secondry-blue rounded-lg p-8">
        <div className="text-center py-12">
          <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
          <p className="text-dirty-grey">Loading reviews...</p>
        </div>
      </div>
    );
  }

  if (!reviewsData || reviewsData.reviews.length === 0) {
    return (
      <div className="bg-secondry-blue rounded-lg p-8">
        <div className="text-center py-12">
          <Star className="w-16 h-16 text-dirty-grey mx-auto mb-4" />
          <p className="text-dirty-grey text-lg">No reviews yet</p>
          <p className="text-dirty-grey text-sm mt-2">
            Be the first to review this course
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondry-blue rounded-lg p-8">
      <div className="space-y-6">
        {/* Average Rating */}
        <div className="flex items-center gap-8 pb-6 border-b border-white/10">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2 text-white">
              {reviewsData.averageRating.toFixed(1)}
            </div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(reviewsData.averageRating)
                      ? "fill-warning text-warning"
                      : "text-dirty-grey"
                  }`}
                />
              ))}
            </div>
            <p className="text-dirty-grey text-sm">
              {reviewsData.totalReviews} ratings
            </p>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviewsData.reviews.map((review) => (
            <div key={review.id} className="space-y-3">
              <div className="flex items-start gap-4">
                <img
                  src={review.user.avatar || "https://i.pravatar.cc/150"}
                  alt={`${review.user.firstName} ${review.user.lastName}`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold text-white">
                        {review.user.firstName} {review.user.lastName}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "fill-warning text-warning"
                                  : "text-dirty-grey"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-dirty-grey text-sm">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-dirty-grey leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseReviewsTab;