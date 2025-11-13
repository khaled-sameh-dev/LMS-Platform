import { motion } from "framer-motion";
import { BookOpen, User, Tag, Search } from "lucide-react";
import { getTypeColor } from "@/utilis";

interface SuggesstionIconProps {
  type: string;
  avatarUrl?: string;
}

export const SuggesstionIcon = ({ type, avatarUrl }: SuggesstionIconProps) => {
  if (type === "Instructor" && avatarUrl) {
    return (
      <motion.img
        src={avatarUrl}
        alt="Instructor"
        className="w-8 h-8 rounded-full object-cover border-2 border-purple-500/30"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.1 }}
      />
    );
  }

  const icons = {
    Course: BookOpen,
    Category: Tag,
    Instructor: User,
  };

  const Icon = icons[type as keyof typeof icons] || Search;

  return (
    <motion.div
      className={`flex-shrink-0 ${getTypeColor(type)}`}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <Icon className="w-4 h-4" />
    </motion.div>
  );
};
