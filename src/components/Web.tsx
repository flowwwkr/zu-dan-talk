import { Flex, Span, Text, Wrapper } from '@flowwwkr/design-system-tailwind';
import background03 from '../assets/images/background-03@2x.png';
import laptopMockup from '../assets/images/laptop-mockup.png';
import Image from 'next/image';
import chatSolution from '../assets/images/chat-solution.png';
import chatMockup from '../assets/images/chat-mockup.png';
import ChatAdmin from '@/components/ChatAdmin';

const Web = () => (
  <Flex
    position="relative"
    width="w-full"
    height="h-[323rem]"
    direction="flex-col"
    htmlAttributes={{
      id: 'web',
    }}
    desktop={{ height: 'dt:h-[272rem]' }}
  >
    <Wrapper position="absolute" width="w-auto" height="h-full" zIndex="z-1">
      <Image
        src={background03}
        alt="hero-image"
        className="w-auto h-full obj-cover"
      ></Image>
    </Wrapper>
    <Flex position="relative" width="w-full" height="h-full" zIndex="z-2">
      <Flex
        width="w-86%"
        height="h-[144rem]"
        desktop={{ height: 'dt:h-[96rem]' }}
      >
        <Flex
          width="w-full"
          justifyContent="jc-between"
          gap="gap-[8rem]"
          marginTop="mt-24"
          desktop={{ gap: 'dt:gap-5' }}
        >
          <Flex
            width="w-full"
            direction="flex-col"
            gap="gap-2"
            desktop={{ gap: 'dt:gap-1' }}
          >
            <Text
              size="headline-l"
              color="c-on-primary-container"
              desktop={{ size: 'dt:headline-m' }}
            >
              리딩방 운영을 쉽고 스마트하게
            </Text>
            <Text
              font="font-secondary"
              size="display-xl"
              color="c-on-neutral"
              desktop={{ size: 'dt:display-m' }}
            >
              <Span color="c-on-primary-container">리딩방 운영</Span>의 모든 것!
            </Text>
            <Wrapper
              paddingX="px-2"
              paddingTop="pt-2"
              paddingBottom="pb-1.5"
              color="lg-r"
              fromColor="fc-secondary"
              toColor="tc-primary"
              toOpacity="to-1"
            >
              <Text
                font="font-secondary"
                size="display-xl"
                color="c-gs-pure-white"
                desktop={{ size: 'dt:display-m' }}
              >
                &ldquo;주단톡&rdquo;{' '}
                <Span
                  htmlAttributes={{
                    style: {
                      fontWeight: 500,
                    },
                  }}
                >
                  지금 도입하세요.
                </Span>
              </Text>
            </Wrapper>
          </Flex>
          <Flex
            width="w-full"
            direction="flex-col"
            gap="gap-3"
            desktop={{ gap: 'dt:gap-2' }}
          >
            <Wrapper width="w-[74.4rem]" desktop={{ width: 'dt:w-[49.6rem]' }}>
              <Image
                src={laptopMockup}
                alt="laptop-mockup"
                className="w-full h-auto"
              ></Image>
            </Wrapper>
            <Flex width="w-full" direction="flex-col" gap="gap-2">
              <Text
                size="display-xl"
                color="c-gs-pure-black"
                desktop={{ size: 'dt:display-m' }}
              >
                <Span color="c-on-primary-container">회원 관리</Span>를 위한{' '}
                <Span color="c-on-primary-container">관리자 전용 웹</Span> 제공
              </Text>
              <Text
                size="body-5xl"
                color="c-on-neutral"
                line="line-clamp-none"
                align="text-center"
                desktop={{ size: 'dt:body-4xl' }}
              >
                가입 회원 관리와 채팅방 설정을 관리자 전용 웹에서 간편하게,
                <br />
                채팅 솔루션은 효율적인 리딩방 운영을 지원합니다.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        width="w-86%"
        height="h-[81rem]"
        justifyContent="jc-start"
        desktop={{ height: 'dt:h-[96rem]' }}
      >
        <ChatAdmin></ChatAdmin>
      </Flex>
      <Flex
        width="w-86%"
        height="h-[98rem]"
        justifyContent="jc-start"
        desktop={{ height: 'dt:h-[80rem]' }}
      >
        <Flex
          position="relative"
          width="w-full"
          direction="flex-col"
          gap="gap-3"
          alignContent="ac-start"
          alignItems="ai-start"
          paddingY="py-20"
        >
          <Wrapper
            paddingX="px-2"
            paddingY="py-1"
            borderRadius="rad-3"
            borderWidth="bw-0.125"
            borderStyle="bs-solid"
            borderColor="bc-gs-pure-white"
            htmlAttributes={{
              style: { boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.15)' },
            }}
          >
            <Text size="body-3xl" color="c-gs-pure-white">
              리딩방 운영을 위한 스마트한 선택!
            </Text>
          </Wrapper>
          <Text
            size="display-xl"
            color="c-gs-pure-white"
            line="line-clamp-none"
          >
            단방향 단체 채팅방
            <br />& 1:1 문의 채팅방
          </Text>
          <Text size="body-2xl" color="c-gs-pure-white" line="line-clamp-none">
            투자 정보 공유만을 위한 단방향 단체 채팅방과,
            <br />
            가입 문의를 위한 1:1 채팅방으로 차원이 다른 운영 경험을 제공합니다.
          </Text>
          <Wrapper
            position="absolute"
            top="t-50%"
            right="r-0"
            width="w-[90rem]"
            transformTranslateY="-trly-44%"
            transformTranslateX="trlx-20%"
            zIndex="z-3"
          >
            <Image
              className="w-full"
              src={chatMockup}
              alt="chat-mockup"
            ></Image>
          </Wrapper>
          <Wrapper
            position="absolute"
            bottom="-b-6%"
            left="-l-2"
            width="w-[138rem]"
            zIndex="z-1"
          >
            <Image
              className="w-full"
              src={chatSolution}
              alt="chat-solution"
            ></Image>
          </Wrapper>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);
export default Web;
