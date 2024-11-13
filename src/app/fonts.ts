import localFont from 'next/font/local';

export const gmarketSans = localFont({
  src: [
    {
      path: '../assets/fonts/GmarketSansLight.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GmarketSansMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/GmarketSansBold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-secondary',
});

export const freesentation = localFont({
  src: '../assets/fonts/FreesentationVF.ttf',
  display: 'swap',
  variable: '--font-primary',
});
