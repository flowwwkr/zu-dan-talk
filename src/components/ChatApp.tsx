import { Flex, Text, Wrapper } from '@flowwwkr/design-system-tailwind';
import background02 from '../assets/images/background-02@2x.png';
import Image from 'next/image';
import trustworthy from '../assets/images/trustworthy.png';
import phoneMockup from '../assets/images/phone-mockup.png';
import ChatCarousel from '@/components/ChatCarousel';

const ChatApp = () => (
  <Flex
    position="relative"
    width="w-full"
    height="h-[81rem]"
    direction="flex-col"
    desktop={{
      height: 'dt:h-[60rem]',
    }}
  >
    <Wrapper position="absolute" width="w-auto" height="h-full" zIndex="z-1">
      <Image
        src={background02}
        alt="hero-image"
        className="w-auto h-full obj-cover"
      ></Image>
    </Wrapper>
    <Flex position="relative" width="w-full" height="h-full" zIndex="z-2">
      <Flex
        position="relative"
        width="w-86%"
        height="h-full"
        desktop={{
          width: 'dt:w-96%',
        }}
        tablet={{
          paddingY: 'tb:py-2',
        }}
      >
        <Flex
          width="w-full"
          direction="flex-col"
          alignItems="ai-start"
          alignContent="ac-start"
          justifyContent="jc-start"
          gap="gap-[10rem]"
          desktop={{
            gap: 'dt:gap-8',
          }}
          tablet={{
            alignContent: 'tb:ac-center',
            alignItems: 'tb:ai-center',
            height: 'tb:h-full',
            justifyContent: 'tb:jc-between',
          }}
        >
          <Flex
            width="w-full"
            direction="flex-col"
            alignItems="ai-start"
            alignContent="ac-start"
            gap="gap-3.5"
            desktop={{
              gap: 'dt:gap-2',
            }}
            tablet={{
              alignContent: 'tb:ac-center',
              alignItems: 'tb:ai-center',
            }}
          >
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
              color="c-on-primary-container"
              desktop={{
                paddingX: 'dt:px-1.5',
                paddingY: 'dt:py-0.5',
              }}
            >
              <Text
                font="font-primary"
                size="body-3xl"
                color="lg-r"
                fromColor="fc-primary"
                toColor="tc-gs-pure-white"
                toOpacity="to-1"
                desktop={{
                  size: 'dt:body-2xl',
                }}
                tablet={{
                  size: 'tb:body-l',
                }}
                mobile={{
                  size: 'mb:body-m',
                }}
              >
                리딩방의 핵심은 믿음과 신뢰
              </Text>
            </Wrapper>
            <Wrapper position="relative">
              <Text
                position="relative"
                size="display-xl"
                color="c-gs-pure-white"
                zIndex="z-2"
                desktop={{
                  size: 'dt:display-m',
                }}
                tablet={{
                  size: 'tb:headline-l',
                }}
              >
                신뢰감을 주는 전용 채팅앱
              </Text>
              <Wrapper
                position="absolute"
                top="t-50%"
                left="l-50%"
                width="w-[62rem]"
                transformTranslate="-trl-50%"
              >
                <Image
                  className="w-full dt:w-72% tb:w-50%"
                  src={trustworthy}
                  alt="trustworthy"
                ></Image>
              </Wrapper>
            </Wrapper>
            <Text
              size="body-2xl"
              color="c-gs-pure-white"
              line="line-clamp-none"
              htmlAttributes={{
                style: { fontWeight: 500 },
              }}
              desktop={{
                size: 'dt:title-m',
              }}
              tablet={{
                size: 'tb:body-m',
              }}
            >
              회원들에게 손쉽게 투자 정보를 제공할 수 있고,
              <br />
              가입된 회원 관리가 가능한 &ldquo;독자적인 채팅
              솔루션&rdquo;입니다.
              <br />
              타사 플랫폼에 의존하지 않고 자유로운 운영 공간을 제공합니다.
            </Text>
          </Flex>
          <ChatCarousel></ChatCarousel>
        </Flex>
      </Flex>
      <Wrapper
        position="absolute"
        bottom="b-0"
        right="r-0"
        width="w-[120rem]"
        height="h-auto"
        zIndex="z-1"
        transformTranslateX="trlx-22%"
        transformTranslateY="trly-10%"
        desktop={{
          width: 'dt:w-[80rem]',
          transformTranslateY: 'dt:trly-5%',
        }}
        tablet={{
          width: 'tb:w-[40rem]',
          bottom: 'tb:b-50%',
          left: 'tb:l-50%',
          transformTranslateX: 'tb:-trlx-50%',
          transformTranslateY: 'tb:trly-50%',
        }}
      >
        <Image
          className="w-full h-auto"
          src={phoneMockup}
          alt="phone-mockup"
        ></Image>
      </Wrapper>
    </Flex>
  </Flex>
);
export default ChatApp;
