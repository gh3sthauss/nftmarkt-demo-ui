import { useState, useEffect } from "react";

const useScrollPosition = () => {
  // Store the state
  const [scrollPos, setScrollPos] = useState(
    process.browser && window.pageYOffset
  );

  // On Scroll
  const onScroll = () => {
    setScrollPos(process.browser && window.pageYOffset);
  };

  // Add and remove the window listener
  useEffect(() => {
    if (process.browser) {
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  });

  return scrollPos;
};

export default useScrollPosition;
