"use client";
import Image from "next/image";
import { useState } from "react";

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  fill = false,
  sizes,
  quality = 85,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: fill ? "100%" : width,
        height: fill ? "100%" : height,
        backgroundColor: isLoaded ? "transparent" : "#f0f0f0",
        transition: "background-color 0.3s ease",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={sizes || (fill ? "100vw" : undefined)}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
        style={{
          objectFit: props.objectFit || "cover",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
        {...props}
      />
    </div>
  );
}
