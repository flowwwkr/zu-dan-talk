import { Flex, Text } from '@flowwwkr/design-system-tailwind';
import HeaderNav from '@/components/HeaderNav';

const Header = () => {
  return (
    <header className="w-full fixed t-0 l-0 z-100">
      <Flex
        width="w-full"
        height="h-9"
        justifyContent="jc-between"
        paddingY="py-2"
        paddingLeft="pl-20"
        paddingRight="pr-7.5"
        color="c-gs-pure-black"
        colorOpacity="co-0.4"
        alignItems="ai-center"
        wrap="flex-nowrap"
        desktop={{ paddingX: 'dt:px-3.5', paddingY: 'dt:py-2.75' }}
        tablet={{
          paddingX: 'tb:px-2.25',
          paddingY: 'tb:py-1.25',
          height: 'tb:h-6',
        }}
      >
        <Text
          font="font-secondary"
          color="c-gs-pure-white"
          size="headline-m"
          desktop={{
            size: 'dt:headline-s',
          }}
        >
          주단톡
        </Text>
        <Flex gap="gap-3">
          <HeaderNav></HeaderNav>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
