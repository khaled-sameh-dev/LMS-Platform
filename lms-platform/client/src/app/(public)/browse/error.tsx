"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-primary-blue flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-12 h-12 text-red-500" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            Something Went Wrong
          </h2>
          <p className="text-dirty-grey mb-2">
            We encountered an error while loading the courses.
          </p>
          {error.digest && (
            <p className="text-xs text-dirty-grey/60 font-mono">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent/80 text-white rounded-lg font-semibold transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>

          <button
            onClick={() => window.location.reload()}
            className="w-full px-6 py-3 bg-secondry-blue hover:bg-secondry-blue/80 text-white rounded-lg font-semibold transition-colors border border-white/10"
          >
            Reload Page
          </button>
        </div>

        <p className="text-dirty-grey text-sm mt-6">
          If the problem persists, please contact support.
        </p>
      </div>
    </div>
  );
}
