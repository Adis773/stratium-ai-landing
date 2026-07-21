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
        source: "/StratiumAI_Setup.exe",
        headers: [
          {
            key: "Content-Type",
            value: "application/x-msdownload",
          },
          {
            key: "Content-Disposition",
            value: "attachment; filename=StratiumAI_Setup.exe",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
