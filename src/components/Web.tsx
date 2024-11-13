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
    tablet={{ height: 'tb:h-[200rem]' }}
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
        tablet={{ width: 'tb:w-94%', height: 'tb:h-[72rem]' }}
      >
        <Flex
          width="w-full"
          justifyContent="jc-between"
          gap="gap-[8rem]"
          marginTop="mt-24"
          desktop={{ gap: 'dt:gap-5' }}
          tablet={{ gap: 'tb:gap-4' }}
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
              tablet={{ size: 'tb:title-m' }}
            >
              리딩방 운영을 쉽고 스마트하게
            </Text>
            <Text
              font="font-secondary"
              size="display-xl"
              color="c-on-neutral"
              desktop={{ size: 'dt:display-m' }}
              tablet={{ size: 'tb:headline-m' }}
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
              tablet={{
                paddingX: 'tb:px-0',
                paddingTop: 'tb:pt-1.5',
                paddingBottom: 'tb:pb-1',
              }}
            >
              <Text
                font="font-secondary"
                size="display-xl"
                color="c-gs-pure-white"
                desktop={{ size: 'dt:display-m' }}
                tablet={{ size: 'tb:headline-m' }}
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
            <Wrapper
              width="w-[74.4rem]"
              desktop={{ width: 'dt:w-[49.6rem]' }}
              tablet={{ width: 'tb:w-[32.4rem]' }}
            >
              <Image
                src={laptopMockup}
                alt="laptop-mockup"
                className="w-full h-auto"
              ></Image>
            </Wrapper>
            <Flex
              width="w-full"
              direction="flex-col"
              gap="gap-2"
              desktop={{ gap: 'dt:gap-1' }}
            >
              <Text
                size="display-xl"
                color="c-gs-pure-black"
                desktop={{ size: 'dt:display-m' }}
                tablet={{
                  line: 'tb:line-clamp-none',
                  wordBreak: 'tb:break-keep',
                  size: 'tb:headline-m',
                  align: 'tb:text-center',
                }}
                htmlAttributes={{
                  style: {
                    textWrap: 'balance',
                  },
                }}
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
                tablet={{ size: 'tb:body-l' }}
                htmlAttributes={{
                  style: {
                    textWrap: 'balance',
                  },
                }}
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
        tablet={{ height: 'tb:h-[64rem]' }}
      >
        <ChatAdmin></ChatAdmin>
      </Flex>
      <Flex
        width="w-86%"
        height="h-[98rem]"
        justifyContent="jc-start"
        desktop={{ height: 'dt:h-[80rem]' }}
        tablet={{ height: 'tb:h-[64rem]' }}
      >
        <Flex
          position="relative"
          width="w-full"
          direction="flex-col"
          gap="gap-3"
          alignContent="ac-start"
          alignItems="ai-start"
          paddingY="py-20"
          desktop={{ gap: 'dt:gap-2' }}
          tablet={{
            gap: 'tb:gap-1',
            marginTop: 'tb:mt-32',
            paddingY: 'tb:py-0',
            alignContent: 'tb:ac-center',
            alignItems: 'tb:ai-center',
          }}
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
            desktop={{ paddingX: 'dt:px-1.5', paddingY: 'dt:py-0.5' }}
            tablet={{ position: 'tb:relative', zIndex: 'tb:z-3' }}
          >
            <Text
              size="body-3xl"
              color="c-gs-pure-white"
              desktop={{ size: 'dt:body-xl' }}
              tablet={{ size: 'tb:body-l' }}
            >
              리딩방 운영을 위한 스마트한 선택!
            </Text>
          </Wrapper>
          <Text
            size="display-xl"
            color="c-gs-pure-white"
            line="line-clamp-none"
            desktop={{ size: 'dt:display-m' }}
            tablet={{
              position: 'tb:relative',
              zIndex: 'tb:z-3',
              size: 'tb:headline-l',
            }}
          >
            단방향 단체 채팅방
            <br />& 1:1 문의 채팅방
          </Text>
          <Text
            size="body-2xl"
            color="c-gs-pure-white"
            line="line-clamp-none"
            desktop={{ size: 'dt:body-l' }}
            tablet={{
              position: 'tb:relative',
              zIndex: 'tb:z-3',
              align: 'tb:text-center',
              size: 'tb:body-m',
            }}
            htmlAttributes={{
              style: {
                textWrap: 'balance',
              },
            }}
          >
            투자 정보 공유만을 위한 단방향 단체 채팅방과, 가입 문의를 위한 1:1
            채팅방으로 차원이 다른 운영 경험을 제공합니다.
          </Text>
          <Wrapper
            position="absolute"
            top="t-50%"
            right="r-0"
            width="w-[90rem]"
            transformTranslateY="-trly-44%"
            transformTranslateX="trlx-20%"
            zIndex="z-3"
            desktop={{ width: 'dt:w-[50rem]' }}
            tablet={{
              position: 'tb:relative',
              zIndex: 'tb:z-2',
              width: 'tb:w-[40rem]',
              transformTranslateX: 'tb:trlx-0',
              transformTranslateY: 'tb:-trly-6',
            }}
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
            desktop={{ width: 'dt:w-[77.2rem]' }}
            tablet={{ bottom: 'tb:b-10' }}
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
