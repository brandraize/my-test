"use client";
import React from "react";
import Link from "next/link";

export default function AdminAccount({ params, children }) {
  const lang = params?.lang || "en";

  return (
    <div style={{ padding: 32 }}>
      <h2>Admin area disabled</h2>
      <p>The admin interface has been removed from this build.</p>
      <p>
        Go back to the site: <Link href={`/${lang}`}>Home</Link>
      </p>
    </div>
  );
}
