import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type MenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenu({ isOpen, setIsOpen }: MenuProps) {
  const containerRef = useRef(null);
  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  const timeline = useRef<gsap.core.Timeline | null>(null);

  useGSAP( () => {
    timeline.current = gsap.timeline({paused:true})
      .to(topRef.current, {y: 11, duration: 0.3, ease: "power2.inOut"}, 0)
      .to(bottomRef.current, {y: -11, duration: 0.3, ease: "power2.inOut"}, 0)

      .to(containerRef.current, { rotation: 90, duration: 0.5, ease: "power2.inOut"})

      .to(topRef.current, { rotation: 45, duration: 0.3, transformOrigin: "50% 50%" }, "<0.2")
      .to(bottomRef.current, { rotation: -45, duration: 0.3, transformOrigin: "20% 50%" }, "<")
      .to(middleRef.current, { rotation: -45, duration: 0.3, transformOrigin: "50% 50%" }, "<")
  }, [containerRef]);

  useEffect(() => {
    if (!timeline.current) return;

    if (isOpen) {
      timeline.current.play();
    } else {
      timeline.current.reverse();
    }
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div onClick={handleClick}>
      <svg
        ref={containerRef}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line ref={topRef} x1="6" y1="9" x2="33" y2="9" />
        <line ref={middleRef} x1="6" y1="20" x2="33" y2="20" />
        <line ref={bottomRef} x1="16" y1="31" x2="33" y2="31" />
      </svg>
    </div>
  );
}