import { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { freesentation, gmarketSans } from '@/app/fonts';

export const metadata: Metadata = {
  title: '주단톡',
  description: '주식정보 단방향 톡Talk',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gmarketSans.variable} ${freesentation.variable} ovf-x-hidden`}
    >
      <body className="w-full mh-screen">
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
