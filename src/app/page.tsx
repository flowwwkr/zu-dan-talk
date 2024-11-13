import Chat from '@/components/Chat';
import ChatApp from '@/components/ChatApp';
import Contact from '@/components/Contact';
import Web from '@/components/Web';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import { Flex } from '@flowwwkr/design-system-tailwind';

export default function Home() {
  return (
    <Flex width="w-full" color="c-on-primary-container">
      <Flex
        width="w-full"
        maxWidth="xw-xl-desktop"
        direction="flex-col"
        overflowX="ovf-x-hidden"
      >
        <Hero></Hero>
        <ChatApp></ChatApp>
        <Web></Web>
        <Chat></Chat>
        <Pricing></Pricing>
        <Contact></Contact>
      </Flex>
    </Flex>
  );
}
