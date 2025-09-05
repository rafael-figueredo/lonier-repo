module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Increase cache TTL to reduce repeated requests
    minimumCacheTTL: 60,
    // Add device sizes for better optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Add image sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Disable SVG for security
    dangerouslyAllowSVG: false,
    // Add content security policy for images
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Add server configuration for better timeout handling
  serverRuntimeConfig: {
    // Configure timeout settings
    timeout: 30000, // 30 seconds
  },
  // Add experimental features for better performance
  experimental: {
    // Add any experimental features here if needed
  },
};
