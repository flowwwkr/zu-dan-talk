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
import mobileProblemBackground from '../assets/images/mobile-problem-background.png';
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
    desktop={{
      height: 'dt:h-[120rem]',
    }}
    tablet={{
      height: 'tb:h-[128rem]',
    }}
  >
    <Wrapper position="absolute" width="w-auto" height="h-full" zIndex="z-1">
      <Image
        src={background01}
        alt="hero-image"
        className="w-auto h-full obj-cover"
      ></Image>
    </Wrapper>
    <Flex position="relative" width="w-full" zIndex="z-2">
      <Flex
        width="w-86%"
        height="h-[81rem]"
        desktop={{
          width: 'dt:w-94%',
          height: 'dt:h-[60rem]',
        }}
        tablet={{
          height: 'tb:h-[64rem]',
        }}
      >
        <Flex
          width="w-full"
          justifyContent="jc-between"
          alignItems="ai-start"
          desktop={{
            marginTop: 'dt:mt-4',
          }}
          tablet={{
            direction: 'tb:flex-col',
            marginTop: 'tb:mt-0',
            marginBottom: 'tb:mb-18',
            alignItems: 'tb:ai-center',
            gap: 'tb:gap-3',
          }}
        >
          <Flex
            direction="flex-col"
            gap="gap-3"
            alignItems="ai-start"
            tablet={{
              alignItems: 'tb:ai-center',
            }}
          >
            <Text
              font="font-primary"
              size="body-4xl"
              color="c-gs-pure-white"
              line="line-clamp-none"
              desktop={{
                size: 'dt:body-3xl',
              }}
              tablet={{
                align: 'tb:text-center',
              }}
            >
              리딩방 운영자님!
              <br />
              채팅앱, 개발하지 말고{' '}
              <Span
                htmlAttributes={{
                  style: { fontWeight: '700' },
                }}
              >
                임대하세요!
              </Span>
            </Text>
            <Flex
              direction="flex-col"
              gap="gap-2"
              alignItems="ai-start"
              tablet={{
                gap: 'tb:gap-0',
              }}
            >
              <Flex>
                <Text
                  font="font-secondary"
                  color="lg-b"
                  fromColor="fc-gs-pure-white"
                  fromOpacity="fo-1"
                  toColor="tc-primary"
                  toOpacity="to-1"
                  size="display-5xl"
                  desktop={{
                    size: 'dt:display-4xl',
                  }}
                  tablet={{
                    size: 'tb:display-2xl',
                  }}
                >
                  주
                </Text>
                <Text
                  font="font-secondary"
                  color="c-gs-pure-white"
                  htmlAttributes={{
                    style: { fontWeight: '400' },
                  }}
                  size="display-4xl"
                  desktop={{
                    size: 'dt:display-xl',
                  }}
                  tablet={{
                    size: 'tb:display-l',
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
                  size="display-5xl"
                  desktop={{
                    size: 'dt:display-4xl',
                  }}
                  tablet={{
                    size: 'tb:display-2xl',
                  }}
                >
                  단
                </Text>
                <Text
                  font="font-secondary"
                  color="c-gs-pure-white"
                  size="display-4xl"
                  htmlAttributes={{
                    style: { fontWeight: '400' },
                  }}
                  desktop={{
                    size: 'dt:display-xl',
                  }}
                  tablet={{
                    size: 'tb:display-l',
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
                  size="display-5xl"
                  desktop={{
                    size: 'dt:display-4xl',
                  }}
                  tablet={{
                    size: 'tb:display-2xl',
                  }}
                >
                  톡
                </Text>
                <Text
                  font="font-secondary"
                  color="c-gs-pure-white"
                  size="display-4xl"
                  desktop={{
                    size: 'dt:display-xl',
                  }}
                  tablet={{
                    size: 'tb:display-l',
                  }}
                  htmlAttributes={{
                    style: { fontWeight: '400' },
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
              desktop={{
                width: 'dt:w-[50rem]',
                transformTranslateY: 'dt:trly-16%',
                transformTranslateX: 'dt:trlx-8%',
              }}
              tablet={{
                width: 'tb:w-[32.4rem]',
                right: 'tb:r-50%',
                transformTranslateY: 'tb:trly-4%',
                transformTranslateX: 'tb:trlx-50%',
              }}
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
      <Flex
        width="w-86%"
        height="h-[81rem]"
        desktop={{
          width: 'dt:w-94%',
          height: 'dt:h-[60rem]',
        }}
        tablet={{
          height: 'tb:h-[64rem]',
        }}
      >
        <Flex
          width="w-full"
          direction="flex-col"
          gap="gap-8"
          marginTop="mt-8"
          desktop={{
            marginTop: 'dt:mt-0',
            gap: 'dt:gap-2',
          }}
          tablet={{
            gap: 'tb:gap-3',
            marginTop: 'tb:mt-8',
          }}
        >
          <Flex
            width="w-full"
            direction="flex-col"
            gap="gap-2"
            alignItems="ai-start"
            alignContent="ac-start"
            desktop={{
              gap: 'dt:gap-1',
            }}
          >
            <Text
              font="font-primary"
              size="body-5xl"
              color="c-gs-pure-white"
              desktop={{
                size: 'dt:body-3xl',
              }}
              tablet={{
                size: 'tb:body-l',
              }}
            >
              카카오톡에서 더 이상 운영할 수 없는 리딩방
            </Text>
            <Text
              font="font-primary"
              size="display-xl"
              color="c-gs-pure-white"
              desktop={{
                size: 'dt:display-m',
              }}
              tablet={{
                size: 'tb:headline-l',
              }}
              mobile={{
                size: 'mb:headline-s',
              }}
            >
              어디서 운영하고 계신가요?
            </Text>
          </Flex>
          <Flex
            width="w-full"
            justifyContent="jc-between"
            gap="gap-3"
            alignItems="ai-start"
            tablet={{
              direction: 'tb:flex-col',
            }}
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
              tablet={{
                width: 'tb:w-full',
                direction: 'tb:flex-row',
                grow: 'tb:grow-0',
                padding: 'tb:p-2',
              }}
            >
              <Flex
                position="relative"
                width="w-full"
                direction="flex-col"
                gap="gap-2"
                zIndex="z-2"
                alignItems="ai-start"
                tablet={{
                  direction: 'tb:flex-row',
                  alignItems: 'tb:ai-center',
                  wrap: 'tb:flex-nowrap',
                }}
              >
                <Icon size="sz-5" shrink="shrink-0">
                  <SvgEmotionPain />
                </Icon>
                <Text
                  size="body-xl"
                  line="line-clamp-none"
                  color="c-gs-pure-white"
                  wordBreak="break-keep"
                  desktop={{
                    size: 'dt:body-m',
                  }}
                  tablet={{
                    grow: 'tb:grow-1',
                  }}
                >
                  텔레그램을 쓰고 있는데... 텔레그램이 불법의 성지라서 걱정돼요.
                </Text>
              </Flex>
              <Image
                className="block tb:hidden"
                src={problemBackground}
                alt="problem-background"
                fill
              ></Image>
              <Image
                className="hidden tb:block"
                src={mobileProblemBackground}
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
              tablet={{
                width: 'tb:w-full',
                direction: 'tb:flex-row',
                grow: 'tb:grow-0',
                padding: 'tb:p-2',
              }}
            >
              <Flex
                position="relative"
                width="w-full"
                direction="flex-col"
                gap="gap-2"
                zIndex="z-2"
                alignItems="ai-start"
                tablet={{
                  direction: 'tb:flex-row',
                  wrap: 'tb:flex-nowrap',
                  alignItems: 'tb:ai-center',
                }}
              >
                <Icon size="sz-5" shrink="shrink-0">
                  <SvgEmotionSick />
                </Icon>
                <Text
                  size="body-xl"
                  line="line-clamp-none"
                  wordBreak="break-keep"
                  color="c-gs-pure-white"
                  desktop={{
                    size: 'dt:body-m',
                  }}
                  tablet={{
                    grow: 'tb:grow-1',
                  }}
                >
                  요즘 들어 주식 리딩방 찾기도 힘들고, 제대로 운영하는 곳이
                  있는지 모르겠어요.
                </Text>
              </Flex>
              <Image
                className="block tb:hidden"
                src={problemBackground}
                alt="problem-background"
                fill
              ></Image>
              <Image
                className="hidden tb:block"
                src={mobileProblemBackground}
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
              tablet={{
                width: 'tb:w-full',
                direction: 'tb:flex-row',
                grow: 'tb:grow-0',
                padding: 'tb:p-2',
              }}
            >
              <Flex
                position="relative"
                width="w-full"
                direction="flex-col"
                gap="gap-2"
                zIndex="z-2"
                alignItems="ai-start"
                tablet={{
                  direction: 'tb:flex-row',
                  wrap: 'tb:flex-nowrap',
                  alignItems: 'tb:ai-center',
                }}
              >
                <Icon size="sz-5" shrink="shrink-0">
                  <SvgEmotionSurprise />
                </Icon>
                <Text
                  size="body-xl"
                  line="line-clamp-none"
                  wordBreak="break-keep"
                  color="c-gs-pure-white"
                  desktop={{
                    size: 'dt:body-m',
                  }}
                  tablet={{
                    grow: 'tb:grow-1',
                  }}
                >
                  참여하는 리딩방이 카카오톡에서 더 이상 운영할 수 없다고 해서
                  나왔어요.
                </Text>
              </Flex>
              <Image
                className="block tb:hidden"
                src={problemBackground}
                alt="problem-background"
                fill
              ></Image>
              <Image
                className="hidden tb:block"
                src={mobileProblemBackground}
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
              tablet={{
                width: 'tb:w-full',
                direction: 'tb:flex-row',
                grow: 'tb:grow-0',
                padding: 'tb:p-2',
              }}
            >
              <Flex
                position="relative"
                width="w-full"
                direction="flex-col"
                gap="gap-2"
                zIndex="z-2"
                alignItems="ai-start"
                tablet={{
                  direction: 'tb:flex-row',
                  wrap: 'tb:flex-nowrap',
                  alignItems: 'tb:ai-center',
                }}
              >
                <Icon size="sz-5" shrink="shrink-0">
                  <SvgEmotionSad />
                </Icon>
                <Text
                  size="body-xl"
                  line="line-clamp-none"
                  wordBreak="break-keep"
                  color="c-gs-pure-white"
                  desktop={{
                    size: 'dt:body-m',
                  }}
                  tablet={{
                    grow: 'tb:grow-1',
                  }}
                >
                  <Span htmlAttributes={{ style: { fontWeight: '700' } }}>
                    양방향 투자자문
                  </Span>
                  을 하는 리딩방은 불법이던데 투자 정보만 받을 수 있는 리딩방은
                  없을까요?
                </Text>
              </Flex>
              <Image
                className="block tb:hidden"
                src={problemBackground}
                alt="problem-background"
                fill
              ></Image>
              <Image
                className="hidden tb:block"
                src={mobileProblemBackground}
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
            desktop={{
              gap: 'dt:gap-1',
            }}
          >
            <Text
              font="font-primary"
              size="body-5xl"
              color="c-gs-pure-white"
              desktop={{
                size: 'dt:body-3xl',
              }}
              tablet={{
                size: 'tb:body-l',
              }}
              mobile={{
                line: 'mb:line-clamp-none',
                wordBreak: 'mb:break-keep',
                align: 'mb:text-right',
              }}
              htmlAttributes={{
                style: {
                  textWrap: 'balance',
                },
              }}
            >
              카카오톡이 막혀 갈 곳 없는 리딩방 사장님을 위한 리딩방 전용 단방향
              채팅 APP
            </Text>
            <Text
              font="font-primary"
              size="display-xl"
              color="c-gs-pure-white"
              desktop={{
                size: 'dt:display-m',
              }}
              tablet={{
                size: 'tb:headline-l',
              }}
              mobile={{
                size: 'mb:headline-s',
              }}
            >
              <Span color="c-primary">자사앱</Span>처럼 손쉽게 운영하세요!
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);
export default Hero;
