import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tomwebapp22.azurewebsites.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Remove these for static export:
  // typescript: { ignoreBuildErrors: true },
  // eslint: { ignoreDuringBuilds: true }
};

export default nextConfig;