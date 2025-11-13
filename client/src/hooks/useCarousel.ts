import { useEffect, useState } from "react";

interface useCarouselProps {
  total: number;
  interval?: number;
}

const useCarousel = ({ interval = 5000, total }: useCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, total]);

  return { currentIndex, setCurrentIndex };
};

export default useCarousel;
