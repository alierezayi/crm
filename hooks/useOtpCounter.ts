import { useEffect, useState } from "react";

function useOtpCounter(time: number) {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return {
    timeLeft,
    formatTime,
  };
}

export default useOtpCounter;
