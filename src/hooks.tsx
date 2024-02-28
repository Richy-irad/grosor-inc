import { useEffect, useState } from "react";

export function useIsVisible(ref: any) {
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);

    // cleanup
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return intersecting;
}