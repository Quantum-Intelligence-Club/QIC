import { Suspense } from "react";
import NotFoundContent from "@/components/not-found";

export default function NotFound() {
  return (
    <Suspense fallback={<div />}>
      <NotFoundContent />
    </Suspense>
  );
}
