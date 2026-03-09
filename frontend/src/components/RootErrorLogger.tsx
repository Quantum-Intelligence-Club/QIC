"use client";

import { useEffect } from "react";

export function RootErrorLogger() {
  useEffect(() => {
    const handleRejection = (event: PromiseRejectionEvent) => {
      console.warn("Global Unhandled Rejection Caught by QIC Debugger:", event.reason);
      if (typeof event.reason === "object" && event.reason !== null) {
          console.log("Rejection Reason Details:", {
            constructor: event.reason.constructor?.name,
            message: (event.reason as any).message,
            stack: (event.reason as any).stack
          });
      }
    };
    
    const handleError = (event: ErrorEvent) => {
      console.warn("Global Error Caught by QIC Debugger:", event.error || event.message);
    };

    window.addEventListener("unhandledrejection", handleRejection);
    window.addEventListener("error", handleError);
    
    return () => {
      window.removeEventListener("unhandledrejection", handleRejection);
      window.removeEventListener("error", handleError);
    };
  }, []);
  return null;
}
