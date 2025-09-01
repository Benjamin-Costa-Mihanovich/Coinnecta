import { useEffect, useState } from "react";

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const resetTimer = () => {
      const now = new Date().getTime();
      const resetTime = new Date();
      resetTime.setDate(resetTime.getDate() + 2);
      resetTime.setHours(0, 0, 0, 0);
      return Math.floor((resetTime.getTime() - now) / 1000);
    };

    let totalSeconds = resetTimer();

    const timer = setInterval(() => {
      if (totalSeconds <= 0) {
        totalSeconds = resetTimer();
      }

      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      setTimeLeft({ days, hours, minutes, seconds });
      totalSeconds -= 1;
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}
