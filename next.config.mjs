/** @type {import('next').NextConfig} */

let prefixCounter = 0;

const nextConfig = {
  webpack(config) {
    // SVG 파일을 로드할 때 @svgr/webpack을 사용하여 React 컴포넌트로 변환
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              dimensions: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeUnknownsAndDefaults: {
                          defaultAttrs: false,
                        },
                      },
                    },
                  },
                  {
                    name: 'prefixIds',
                    params: {
                      delim: '__',
                      prefixIds: true,
                      prefixClassNames: true,
                      prefix: () =>
                        `flowww_${
                          Math.floor(Math.random() * 9999) + 1
                        }_${prefixCounter++}`,
                    },
                  },
                ],
              },
            },
          },
        ],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    config.module.rules.push({
      test: /\.json$/,
      type: 'json', // Webpack 4+에서는 이 옵션이 더 적절함
    });
    return config;
  },
};

export default nextConfig;
