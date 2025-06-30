import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      setRingPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.2, // Smooth but subtle
        y: prev.y + (mousePos.y - prev.y) * 0.2,
      }));
      requestAnimationFrame(animate);
    };
    animate();
  }, [mousePos]);

  return (
    <>
      {/* Inner dot - follows immediately */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-[#eadad2] rounded-full z-[9999] pointer-events-none"
        style={{
          transform: `translate3d(${mousePos.x - 6}px, ${mousePos.y - 6}px, 0)`,
        }}
      />

      {/* Outer ring - lags very slightly */}
      <div
        className="fixed top-0 left-0 w-6 h-6 border-[1.5px] border-[#935f44] rounded-full z-[9998] pointer-events-none"
        style={{
          transform: `translate3d(${ringPos.x - 12}px, ${ringPos.y - 12}px, 0)`,
        }}
      />
    </>
  );
}
