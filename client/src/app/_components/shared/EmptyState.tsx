import { motion } from "framer-motion";
import { Loader2, AlertCircle, Search } from "lucide-react";

interface EmptyStateProps {
  type: "loading" | "error" | "no-results";
  error?: any;
}

export const EmptyState = ({ type, error }: EmptyStateProps) => {
  const states = {
    loading: {
      icon: Loader2,
      iconClass: "w-8 h-8 text-blue-500 animate-spin mx-auto mb-3",
      title: "",
      description: "Searching...",
    },
    error: {
      icon: AlertCircle,
      iconClass: "w-8 h-8 text-red-500 mx-auto mb-3",
      title: "Something went wrong",
      description:
        error && "status" in error
          ? `Error: ${error.status}`
          : "Please try again later",
    },
    "no-results": {
      icon: Search,
      iconClass: "w-8 h-8 text-gray-400 mx-auto mb-3",
      title: "No results found",
      description: "Try searching for something else",
    },
  };

  const state = states[type];
  const Icon = state.icon;

  return (
    <motion.div
      className="py-12 px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Icon className={state.iconClass} />
      {state.title && (
        <p className="text-dirty-grey  font-medium mb-1">
          {state.title}
        </p>
      )}
      <p className="text-white/50 text-sm">
        {state.description}
      </p>
    </motion.div>
  );
};