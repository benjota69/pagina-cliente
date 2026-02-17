import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedTitle({ text, className = "" }) {
  const lettersRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      lettersRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.05,
      }
    );
  }, []);

  return (
    <h2 className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          ref={(el) => (lettersRef.current[index] = el)}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
}
