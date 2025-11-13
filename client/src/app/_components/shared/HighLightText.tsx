import {motion} from "framer-motion"


export const highlightMatch = (text: string, searchQuery: string) => {
  if (!searchQuery.trim()) return text;

  const parts = text.split(new RegExp(`(${searchQuery})`, "gi"));
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === searchQuery.toLowerCase() ? (
          <motion.span
            key={i}
            className="text-blue-500 font-semibold"
            initial={{ backgroundColor: "rgba(59, 130, 246, 0)" }}
            animate={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            {part}
          </motion.span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};