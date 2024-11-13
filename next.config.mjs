/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // SVG 파일을 로드할 때 @svgr/webpack을 사용하여 React 컴포넌트로 변환
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
