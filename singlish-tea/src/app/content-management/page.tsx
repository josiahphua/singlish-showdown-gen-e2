"use client";
import dynamic from "next/dynamic";

const ContentManager = dynamic(() => import("../../features/content-management/ContentManager"), { ssr: false });

export default function ContentManagementPage() {
  return (
    <main className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-2">Content Management</h2>
      <ContentManager />
    </main>
  );
}
