/** @type {import('next').NextConfig} */

module.exports = {
  compiler: {
    ssr: true,
    styledComponents: true,
  },
  esModule: true,
  images: {
    domains: ["source.unsplash.com", "storage.googleapis.com"],
    loader: "imgix",
    path: "",
  },
  reactStrictMode: true,

  webpack(config, { isServer }) {
    if (!isServer) {
      config.target = "electron-renderer";
    }

    return config;
  },
};
