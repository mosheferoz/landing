"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect if component is mounted
 * Useful for deferring animations until after initial render
 */
export function useMounted(delay: number = 0) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return isMounted;
}

