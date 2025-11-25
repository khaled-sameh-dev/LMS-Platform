import { useRef } from "react";
import { Chapter } from "@/types";

interface VideoPlayerProps {
  chapter: Chapter;
  handleMarkComplete: () => void;
  setWatchDuration: (duration: number) => void;
}

const VideoPlayer = ({ 
  chapter, 
  handleMarkComplete, 
  setWatchDuration 
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
   
      <video
        ref={videoRef}
        src={chapter.videoUrl}
        controls
        controlsList="nodownload"
        className="w-full h-full"
        onTimeUpdate={(e) => {
          const video = e.currentTarget;
          setWatchDuration(video.currentTime / 60);
        }}
        onEnded={handleMarkComplete}
        playsInline
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>
   
  );
};

export default VideoPlayer;
