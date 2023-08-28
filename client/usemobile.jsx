import { useEffect, useState } from "react";
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820); // Set your mobile breakpoint here
    };

    handleResize(); // Initial check on component mount

    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on component unmount
    };
  }, []);

  return isMobile;
};
export default useIsMobile;
