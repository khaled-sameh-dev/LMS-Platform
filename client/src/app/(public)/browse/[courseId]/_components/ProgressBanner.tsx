// components/course/ProgressBanner.tsx
"use client";

import { Button } from "@/app/_components/ui/button";
import { Progress } from "@/app/_components/ui/progress";
import { TrendingUp, CheckCircle, Target, BarChart3, PlayCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProgressBannerProps {
  courseId: string;
  progressPercentage: number;
  completedChapters: number;
  totalChapters: number;
}

const ProgressBanner = ({
  courseId,
  progressPercentage,
  completedChapters,
  totalChapters,
}: ProgressBannerProps) => {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-r from-main-blue/20 to-main-blue/10 border border-main-blue/30 rounded-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Progress Stats */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-main-blue/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-main-blue" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                Your Learning Progress
              </h3>
              <p className="text-dirty-grey text-sm">
                Keep up the great work!
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-dirty-grey">
                Overall Completion
              </span>
              <span className="text-lg font-bold text-main-blue">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <Progress
              value={progressPercentage}
              className="h-3 bg-primary-blue"
            />
            <p className="text-sm text-dirty-grey">
              {completedChapters} of {totalChapters} lessons completed
            </p>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-4 lg:gap-6">
          <div className="bg-primary-blue rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="w-5 h-5 text-success" />
            </div>
            <p className="text-2xl font-bold text-white">
              {completedChapters}
            </p>
            <p className="text-xs text-dirty-grey">Completed</p>
          </div>

          <div className="bg-primary-blue rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="w-5 h-5 text-warning" />
            </div>
            <p className="text-2xl font-bold text-white">
              {totalChapters - completedChapters}
            </p>
            <p className="text-xs text-dirty-grey">Remaining</p>
          </div>

          <div className="bg-primary-blue rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <BarChart3 className="w-5 h-5 text-main-blue" />
            </div>
            <p className="text-2xl font-bold text-white">
              {Math.round(progressPercentage)}%
            </p>
            <p className="text-xs text-dirty-grey">Progress</p>
          </div>
        </div>

        {/* Continue Learning Button */}
        <div>
          <Button
            onClick={() => router.push(`/learn/course/${courseId}`)}
            className="bg-main-blue hover:bg-main-blue/80 text-white px-8 py-6 text-lg font-semibold whitespace-nowrap"
          >
            <PlayCircle className="w-5 h-5 mr-2" />
            Continue Learning
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgressBanner;