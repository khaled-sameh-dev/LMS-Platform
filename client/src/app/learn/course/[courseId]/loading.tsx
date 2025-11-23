// app/learn/course/[courseId]/loading.tsx
import { Loader2 } from "lucide-react";

export default function LearnLoading() {
  return (
    <div className="min-h-screen bg-primary-blue flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-main-blue animate-spin mx-auto mb-4" />
        <p className="text-dirty-grey text-lg">Loading course...</p>
        <p className="text-dirty-grey text-sm mt-2">Please wait</p>
      </div>
    </div>
  );
}