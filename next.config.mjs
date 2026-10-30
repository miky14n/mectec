import { networkInterfaces } from "node:os";

const localDevelopmentAddresses = Object.values(networkInterfaces())
  .flatMap((addresses) => addresses ?? [])
  .filter((address) => address.family === "IPv4" && !address.internal)
  .map((address) => address.address);

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    ...localDevelopmentAddresses,
    ...(process.env.NEXT_DEV_ALLOWED_ORIGINS ?? "")
      .split(",")
      .map((origin) => origin.trim())
      .filter(Boolean),
  ],
  images: {
    unoptimized: true,
  },
}

export default nextConfig
