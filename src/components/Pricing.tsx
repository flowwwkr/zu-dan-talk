import {
  Flex,
  Icon,
  Span,
  Text,
  Wrapper,
} from '@flowwwkr/design-system-tailwind';
import Image from 'next/image';
import background05 from '../assets/images/background-05@2x.png';
import pricingInfoBackground from '../assets/images/pricing-info-background.png';
import SvgCelebration from '../assets/svgs/celebration.svg';

const Pricing = () => {
  return (
    <Flex
      position="relative"
      width="w-full"
      height="h-[81rem]"
      direction="flex-col"
      mobile={{ height: 'mb:h-[64rem]' }}
    >
      <Wrapper position="absolute" width="w-auto" height="h-full" zIndex="z-1">
        <Image
          src={background05}
          alt="hero-image"
          className="w-auto h-full obj-cover"
        ></Image>
      </Wrapper>
      <Flex position="relative" width="w-full" height="h-full" zIndex="z-2">
        <Flex
          width="w-86%"
          justifyContent="jc-between"
          desktop={{
            direction: 'dt:flex-col',
            gap: 'dt:gap-6',
            justifyContent: 'dt:jc-center',
          }}
          mobile={{ gap: 'mb:gap-4' }}
        >
          <Flex
            direction="flex-col"
            gap="gap-6"
            alignItems="ai-start"
            desktop={{
              gap: 'dt:gap-3',
              alignItems: 'dt:ai-center',
            }}
            mobile={{ gap: 'mb:gap-2' }}
          >
            <Flex
              width="w-full"
              direction="flex-col"
              gap="gap-2"
              alignItems="ai-start"
              alignContent="ac-start"
              desktop={{
                alignItems: 'dt:ai-center',
                alignContent: 'dt:ac-center',
              }}
            >
              <Text
                size="display-m"
                color="c-gs-pure-white"
                mobile={{ size: 'mb:headline-l' }}
              >
                잠깐!
              </Text>
              <Text
                size="body-5xl"
                color="c-gs-pure-white"
                line="line-clamp-none"
                desktop={{
                  size: 'dt:body-4xl',
                  align: 'dt:text-center',
                }}
                mobile={{ size: 'mb:body-xl' }}
              >
                자체 채팅앱 도입에{' '}
                <Span
                  color="c-orange-600"
                  size="headline-l"
                  desktop={{ size: 'dt:headline-m' }}
                  mobile={{ size: 'mb:title-m' }}
                >
                  최소 수천만원
                </Span>
                에서
                <br />
                <Span
                  color="c-orange-600"
                  size="headline-l"
                  desktop={{ size: 'dt:headline-m' }}
                  mobile={{ size: 'mb:title-m' }}
                >
                  수억원의 개발 비용
                </Span>
                을 부담하실 것인가요?
              </Text>
            </Flex>
            <Text
              font="font-secondary"
              color="lg-b"
              fromColor="fc-gs-pure-white"
              fromOpacity="fo-1"
              toColor="tc-primary"
              toOpacity="to-1"
              size="display-3xl"
              desktop={{
                size: 'dt:display-xl',
              }}
              mobile={{ size: 'mb:display-m' }}
            >
              월 30만원
            </Text>
            <Text
              size="body-5xl"
              color="c-gs-pure-white"
              desktop={{ size: 'dt:body-4xl' }}
              mobile={{ size: 'mb:body-xl' }}
            >
              자체 채팅앱 도입,{' '}
              <Span
                color="c-primary"
                size="headline-l"
                desktop={{ size: 'dt:headline-m' }}
                mobile={{ size: 'mb:title-m' }}
              >
                한 달 30만원
              </Span>
              이면 충분합니다.
            </Text>
          </Flex>
          <Flex
            position="relative"
            padding="p-3"
            direction="flex-col"
            gap="gap-6"
            borderRadius="rad-3"
            htmlAttributes={{
              style: { boxShadow: '0px 24px 48px 0px rgba(0, 0, 0, 0.25)' },
            }}
            desktop={{
              gap: 'dt:gap-4',
              maxWidth: 'dt:xw-[36rem]',
            }}
            mobile={{ width: 'mb:w-full', maxWidth: 'mb:xw-[32.4rem]' }}
          >
            <Flex position="relative" gap="gap-2" zIndex="z-2">
              <Icon size="sz-3.5" desktop={{ size: 'dt:sz-2.75' }}>
                <SvgCelebration></SvgCelebration>
              </Icon>
              <Text
                size="headline-s"
                color="c-primary"
                desktop={{ size: 'dt:title-m' }}
                mobile={{ size: 'mb:title-s' }}
              >
                이 모든 것을 단, <Span color="c-gs-pure-white">5일 만에 </Span>
                도입해보세요.
              </Text>
            </Flex>
            <Flex
              position="relative"
              width="w-full"
              direction="flex-col"
              gap="gap-4"
              zIndex="z-2"
              alignItems="ai-start"
              alignContent="ac-start"
              desktop={{
                gap: 'dt:gap-3',
              }}
            >
              <Flex
                width="w-full"
                direction="flex-col"
                gap="gap-1"
                alignContent="ac-start"
                alignItems="ai-start"
                desktop={{
                  gap: 'dt:gap-0.5',
                  alignContent: 'dt:ac-center',
                  alignItems: 'dt:ai-center',
                }}
              >
                <Text
                  size="headline-s"
                  color="c-gs-pure-white"
                  desktop={{ size: 'dt:title-m' }}
                >
                  우리 리딩방만의 커스텀 채팅앱
                </Text>
                <Text
                  size="body-xl"
                  color="c-gs-pure-white"
                  desktop={{ size: 'dt:body-m' }}
                >
                  자체 앱처럼 로고와 색상을 커스텀할 수 있습니다.
                </Text>
              </Flex>
              <Flex
                width="w-full"
                direction="flex-col"
                gap="gap-1"
                alignContent="ac-start"
                alignItems="ai-start"
                desktop={{
                  gap: 'dt:gap-0.5',
                  alignContent: 'dt:ac-center',
                  alignItems: 'dt:ai-center',
                }}
              >
                <Text
                  size="headline-s"
                  color="c-gs-pure-white"
                  desktop={{ size: 'dt:title-m' }}
                >
                  크로스플랫폼 메신저 APP 제공
                </Text>
                <Text
                  size="body-xl"
                  color="c-gs-pure-white"
                  desktop={{ size: 'dt:body-m' }}
                >
                  안드로이드/아이폰 모든 회원이 이용 가능합니다.
                </Text>
              </Flex>
              <Flex
                width="w-full"
                direction="flex-col"
                gap="gap-1"
                alignContent="ac-start"
                alignItems="ai-start"
                desktop={{
                  gap: 'dt:gap-0.5',
                  alignContent: 'dt:ac-center',
                  alignItems: 'dt:ai-center',
                }}
              >
                <Text
                  size="headline-s"
                  color="c-gs-pure-white"
                  desktop={{ size: 'dt:title-m' }}
                >
                  관리자 WEB 제공
                </Text>
                <Text
                  size="body-xl"
                  color="c-gs-pure-white"
                  desktop={{ size: 'dt:body-m' }}
                >
                  사용자 / 채팅방 관리용 웹페이지를 제공합니다.
                </Text>
              </Flex>
              <Flex
                width="w-full"
                direction="flex-col"
                gap="gap-1"
                alignContent="ac-start"
                alignItems="ai-start"
                desktop={{
                  gap: 'dt:gap-0.5',
                  alignContent: 'dt:ac-center',
                  alignItems: 'dt:ai-center',
                }}
              >
                <Text
                  size="headline-s"
                  color="c-gs-pure-white"
                  desktop={{ size: 'dt:title-m' }}
                >
                  메신저 셋팅을 위한 기술지원
                </Text>
                <Text
                  size="body-xl"
                  color="c-gs-pure-white"
                  desktop={{ size: 'dt:body-m' }}
                >
                  나머지는 기술지원팀이 모두 진행합니다.
                </Text>
              </Flex>
            </Flex>
            <Wrapper position="absolute" top="t-0" left="l-0" size="sz-full">
              <Image
                className="sz-full"
                src={pricingInfoBackground}
                alt="pricing-info-background"
              ></Image>
            </Wrapper>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Pricing;
