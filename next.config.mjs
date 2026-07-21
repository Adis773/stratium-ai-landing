const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/StratiumAI_Setup.zip",
        headers: [
          {
            key: "Content-Type",
            value: "application/zip",
          },
          {
            key: "Content-Disposition",
            value: "attachment; filename=StratiumAI_Setup.zip",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
