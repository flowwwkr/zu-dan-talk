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
    config.module.rules.push({
      test: /\.json$/,
      type: 'json', // Webpack 4+에서는 이 옵션이 더 적절함
    });
    return config;
  },
};

export default nextConfig;
