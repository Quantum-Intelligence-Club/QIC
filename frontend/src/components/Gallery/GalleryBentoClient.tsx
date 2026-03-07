"use client";

import dynamic from "next/dynamic";

const GalleryBento = dynamic(
  () => import("./GalleryBento").then((m) => m.GalleryBento),
  { ssr: false }
);

export default function GalleryBentoClient() {
  return <GalleryBento />;
}
