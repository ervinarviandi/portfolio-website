import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";
import { PiConfettiBold } from "react-icons/pi";

export function ConfettiFireworks() {
  const handleClick = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <div className="">
      <Button onClick={handleClick} className="dark:bg-gray-500 rounded-lg px-6 py-2 dark:text-white bg-black text-gray-300 flex items0-center gap-x-2">< PiConfettiBold size={20} />Click Me</Button>
    </div>
  );
}
