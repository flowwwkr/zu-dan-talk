import {
  Flex,
  Icon,
  Span,
  Text,
  Wrapper,
} from '@flowwwkr/design-system-tailwind';
import Image from 'next/image';
import background01 from '../assets/images/background-01@2x.png';
import totalMockup from '../assets/images/total-mockup.png';
import problemBackground from '../assets/images/problem-background.png';
import SvgEmotionPain from '../assets/svgs/emotion-pain.svg';
import SvgEmotionSick from '../assets/svgs/emotion-sick.svg';
import SvgEmotionSurprise from '../assets/svgs/emotion-surprise.svg';
import SvgEmotionSad from '../assets/svgs/emotion-sad.svg';

const Hero = () => (
  <Flex
    position="relative"
    width="w-full"
    height="h-[162rem]"
    direction="flex-col"
  >
    <Wrapper position="absolute" width="w-auto" height="h-full" zIndex="z-1">
      <Image
        src={background01}
        alt="hero-image"
        className="w-auto h-full obj-cover"
      ></Image>
    </Wrapper>
    <Flex position="relative" width="w-full" zIndex="z-2">
      <Flex width="w-86%" height="h-[81rem]">
        <Flex width="w-full" justifyContent="jc-between" alignItems="ai-start">
          <Flex direction="flex-col" gap="gap-3" alignItems="ai-start">
            <Text
              font="font-primary"
              size="body-4xl"
              color="c-gs-pure-white"
              line="line-clamp-none"
            >
              리딩방 운영자님!
              <br />
              채팅앱, 개발하지 말고{' '}
              <Text
                tag="span"
                font="font-primary"
                color="c-inherit"
                size="headline-m"
                line="line-clamp-none"
                display="inline"
              >
                임대하세요!
              </Text>
            </Text>
            <Flex direction="flex-col" gap="gap-2" alignItems="ai-start">
              <Flex>
                <Text
                  font="font-secondary"
                  color="lg-b"
                  fromColor="fc-gs-pure-white"
                  fromOpacity="fo-1"
                  toColor="tc-primary"
                  toOpacity="to-1"
                  htmlAttributes={{
                    style: { fontSize: '12rem', fontWeight: '700' },
                  }}
                >
                  주
                </Text>
                <Text
                  font="font-secondary"
                  color="c-gs-pure-white"
                  htmlAttributes={{
                    style: { fontSize: '8.4rem', fontWeight: '400' },
                  }}
                >
                  식정보
                </Text>
              </Flex>
              <Flex>
                <Text
                  font="font-secondary"
                  color="lg-b"
                  fromColor="fc-gs-pure-white"
                  fromOpacity="fo-1"
                  toColor="tc-primary"
                  toOpacity="to-1"
                  htmlAttributes={{
                    style: { fontSize: '12rem', fontWeight: '700' },
                  }}
                >
                  단
                </Text>
                <Text
                  font="font-secondary"
                  color="c-gs-pure-white"
                  htmlAttributes={{
                    style: { fontSize: '8.4rem', fontWeight: '400' },
                  }}
                >
                  방향
                </Text>
              </Flex>
              <Flex>
                <Text
                  font="font-secondary"
                  color="lg-b"
                  fromColor="fc-gs-pure-white"
                  fromOpacity="fo-1"
                  toColor="tc-primary"
                  toOpacity="to-1"
                  htmlAttributes={{
                    style: { fontSize: '12rem', fontWeight: '700' },
                  }}
                >
                  톡
                </Text>
                <Text
                  font="font-secondary"
                  color="c-gs-pure-white"
                  htmlAttributes={{
                    style: { fontSize: '8.4rem', fontWeight: '400' },
                  }}
                >
                  TALK
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Wrapper
            position="relative"
            paddingX="px-2"
            paddingY="py-1"
            borderRadius="rad-3"
            borderWidth="bw-0.125"
            borderStyle="bs-solid"
            borderColor="blg-r"
            borderFromColor="b-from-c-primary"
            borderToColor="b-to-c-gs-pure-white"
            borderToOpacity="b-to-o-1"
            color="c-[#1b3b8f]"
          >
            <Text
              font="font-primary"
              size="body-3xl"
              color="lg-r"
              fromColor="fc-primary"
              toColor="tc-gs-pure-white"
              toOpacity="to-1"
            >
              리딩방 전용 임대형 단방향 채팅앱, &ldquo;주단톡&rdquo;
            </Text>
            <Wrapper
              position="absolute"
              right="r-0"
              top="t-100%"
              width="w-[95.4rem]"
              zIndex="z-5"
              transformTranslateX="trlx-8%"
              transformTranslateY="trly-2%"
            >
              <Image
                className="w-full"
                src={totalMockup}
                alt="total-mockup"
              ></Image>
            </Wrapper>
          </Wrapper>
        </Flex>
      </Flex>
      <Flex width="w-86%" height="h-[81rem]">
        <Flex width="w-full" direction="flex-col" gap="gap-8" marginTop="mt-8">
          <Flex
            width="w-full"
            direction="flex-col"
            gap="gap-2"
            alignItems="ai-start"
            alignContent="ac-start"
          >
            <Text font="font-primary" size="body-5xl" color="c-gs-pure-white">
              카카오톡에서 더 이상 운영할 수 없는 리딩방
            </Text>
            <Text font="font-primary" size="display-xl" color="c-gs-pure-white">
              어디서 운영하고 계신가요?
            </Text>
          </Flex>
          <Flex
            width="w-full"
            justifyContent="jc-between"
            gap="gap-3"
            alignItems="ai-start"
          >
            <Flex
              position="relative"
              basis="basis-0"
              grow="grow-1"
              padding="p-2"
              paddingBottom="pb-8"
              direction="flex-col"
              gap="gap-2"
              color="c-transparent"
            >
              <Flex
                position="relative"
                width="w-full"
                direction="flex-col"
                gap="gap-2"
                zIndex="z-2"
                alignItems="ai-start"
              >
                <Icon size="sz-5">
                  <SvgEmotionPain />
                </Icon>
                <Text
                  size="body-xl"
                  line="line-clamp-none"
                  color="c-gs-pure-white"
                  wordBreak="break-keep"
                >
                  텔레그램을 쓰고 있는데... 텔레그램이 불법의 성지라서 걱정돼요.
                </Text>
              </Flex>
              <Image
                src={problemBackground}
                alt="problem-background"
                fill
              ></Image>
            </Flex>
            <Flex
              position="relative"
              basis="basis-0"
              grow="grow-1"
              padding="p-2"
              paddingBottom="pb-8"
              direction="flex-col"
              gap="gap-2"
              color="c-transparent"
            >
              <Flex
                position="relative"
                width="w-full"
                direction="flex-col"
                gap="gap-2"
                zIndex="z-2"
                alignItems="ai-start"
              >
                <Icon size="sz-5">
                  <SvgEmotionSick />
                </Icon>
                <Text
                  size="body-xl"
                  line="line-clamp-none"
                  wordBreak="break-keep"
                  color="c-gs-pure-white"
                >
                  요즘 들어 주식 리딩방 찾기도 힘들고, 제대로 운영하는 곳이
                  있는지 모르겠어요.
                </Text>
              </Flex>
              <Image
                src={problemBackground}
                alt="problem-background"
                fill
              ></Image>
            </Flex>
            <Flex
              position="relative"
              basis="basis-0"
              grow="grow-1"
              padding="p-2"
              paddingBottom="pb-8"
              direction="flex-col"
              gap="gap-2"
              color="c-transparent"
            >
              <Flex
                position="relative"
                width="w-full"
                direction="flex-col"
                gap="gap-2"
                zIndex="z-2"
                alignItems="ai-start"
              >
                <Icon size="sz-5">
                  <SvgEmotionSurprise />
                </Icon>
                <Text
                  size="body-xl"
                  line="line-clamp-none"
                  wordBreak="break-keep"
                  color="c-gs-pure-white"
                >
                  참여하는 리딩방이 카카오톡에서 더 이상 운영할 수 없다고 해서
                  나왔어요.
                </Text>
              </Flex>
              <Image
                src={problemBackground}
                alt="problem-background"
                fill
              ></Image>
            </Flex>
            <Flex
              position="relative"
              basis="basis-0"
              grow="grow-1"
              padding="p-2"
              paddingBottom="pb-8"
              direction="flex-col"
              gap="gap-2"
              color="c-transparent"
            >
              <Flex
                position="relative"
                width="w-full"
                direction="flex-col"
                gap="gap-2"
                zIndex="z-2"
                alignItems="ai-start"
              >
                <Icon size="sz-5">
                  <SvgEmotionSad />
                </Icon>
                <Text
                  size="body-xl"
                  line="line-clamp-none"
                  wordBreak="break-keep"
                  color="c-gs-pure-white"
                >
                  <Span htmlAttributes={{ style: { fontWeight: '700' } }}>
                    양방향 투자자문
                  </Span>
                  을 하는 리딩방은 불법이던데 투자 정보만 받을 수 있는 리딩방은
                  없을까요?
                </Text>
              </Flex>
              <Image
                src={problemBackground}
                alt="problem-background"
                fill
              ></Image>
            </Flex>
          </Flex>
          <Flex
            width="w-full"
            direction="flex-col"
            gap="gap-2"
            alignItems="ai-end"
            alignContent="ac-end"
          >
            <Text font="font-primary" size="body-5xl" color="c-gs-pure-white">
              카카오톡이 막혀 갈 곳 없는 리딩방 사장님을 위한 리딩방 전용 단방향
              채팅 APP
            </Text>
            <Text font="font-primary" size="display-xl" color="c-gs-pure-white">
              <Span color="c-primary">자사앱</Span>처럼 손쉽게 운영하세요!
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);
export default Hero;
