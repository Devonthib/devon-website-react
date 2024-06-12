import cn from "@utils/cn";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollTopProps {
  className?: string;
  [rest: string]: any;
}

function ScrollTop({ className, ...rest }: ScrollTopProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollTop;
