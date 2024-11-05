import { motion } from "framer-motion";

interface LoadingProps {
  isDark?: boolean;
}

export const Loading = ({ isDark }: LoadingProps) => {
  return (
    <div
      className={`${
        isDark ? "bg-background" : "bg-accent"
      } rounded-full size-7 relative`}
    >
      <motion.span
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity }}
        className={`size-7 border ${isDark ? "border-accent" : "border-background"} border-t-NKGreen-300 absolute top-0 left-0 rounded-full`}
      />
    </div>
  );
};
