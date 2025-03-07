/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  // Add compression for better performance
  compress: true,
  // Add webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Only run in production builds
    if (!dev) {
      // Optimize CSS
      config.optimization.minimize = true;

      // Split chunks more aggressively
      config.optimization.splitChunks = {
        chunks: "all",
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: "framework",
            test: /[\\/]node_modules[\\/](@react|react|next|lucide-react)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const match = module.context.match(
                /[\\/]node_modules[\\/](.*?)(?:[\\/]|$)/,
              );
              if (!match) return "lib";
              const packageName = match[1];
              return `lib-${packageName.replace("@", "")}`;
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: "commons",
            minChunks: 2,
            priority: 20,
          },
        },
      };
    }
    return config;
  },
};

if (process.env.NEXT_PUBLIC_TEMPO) {
  nextConfig["experimental"] = {
    // NextJS 13.4.8 up to 14.1.3:
    // swcPlugins: [[require.resolve("tempo-devtools/swc/0.86"), {}]],
    // NextJS 14.1.3 to 14.2.11:
    swcPlugins: [[require.resolve("tempo-devtools/swc/0.90"), {}]],

    // NextJS 15+ (Not yet supported, coming soon)
  };
}

module.exports = nextConfig;
