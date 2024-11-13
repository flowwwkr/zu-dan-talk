import type { Config } from 'tailwindcss';
import { wrapFTConfig } from '@flowwwkr/design-system-tailwind';

const config: Config = wrapFTConfig({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
});
export default config;
