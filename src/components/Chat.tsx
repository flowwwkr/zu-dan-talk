'use client';

import {
  Button,
  Flex,
  Icon,
  Text,
  Wrapper,
} from '@flowwwkr/design-system-tailwind';
import Image from 'next/image';
import background04 from '../assets/images/background-04@2x.png';
import SvgOneInCircle from '../assets/svgs/one-in-circle.svg';
import SvgTwoInCircle from '../assets/svgs/two-in-circle.svg';
import SvgOneInSquare from '../assets/svgs/one-in-square.svg';
import SvgTwoInSquare from '../assets/svgs/two-in-square.svg';
import SvgSend from '../assets/svgs/send.svg';
import SvgHeadphone from '../assets/svgs/headphone.svg';
import SvgForwardArrow from '../assets/svgs/forward-arrow.svg';
import phoneDetail01 from '../assets/images/phone-detail-01.png';
import phoneDetail02 from '../assets/images/phone-detail-02.png';
import { useState } from 'react';

const Chat = () => {
  const [currentTab, setCurrentTab] = useState('one');

  return (
    <Flex
      position="relative"
      width="w-full"
      height="h-[81rem]"
      direction="flex-col"
      overflowY="ovf-y-hidden"
      htmlAttributes={{
        id: 'chat',
      }}
      desktop={{ height: 'dt:h-[96rem]' }}
    >
      <Wrapper position="absolute" width="w-auto" height="h-full" zIndex="z-1">
        <Image
          src={background04}
          alt="hero-image"
          className="w-auto h-full obj-cover"
        ></Image>
      </Wrapper>
      <Flex
        position="relative"
        width="w-full"
        height="h-full"
        zIndex="z-2"
        desktop={{ alignContent: 'dt:ac-start', paddingTop: 'dt:pt-6' }}
      >
        <Flex
          position="relative"
          width="w-86%"
          height="h-70%"
          direction="flex-col"
          gap="gap-3"
          justifyContent="jc-start"
          alignItems="ai-start"
          alignContent="ac-end"
          desktop={{
            alignItems: 'dt:ai-center',
            alignContent: 'dt:ac-center',
            gap: 'dt:gap-2',
          }}
        >
          <Flex gap="gap-1">
            <Button
              gap="gap-1"
              padding="p-1"
              borderRadius="rad-3"
              borderWidth="bw-0.25"
              borderStyle="bs-solid"
              borderColor="bc-on-secondary"
              group="group"
              disabledStyle={{
                borderColor: 'disabled:bc-gs-pure-white',
              }}
              disabled={currentTab === 'one'}
              onClick={() => setCurrentTab('one')}
              desktop={{
                gap: 'dt:gap-0.5',
                paddingY: 'dt:py-0.5',
                paddingLeft: 'dt:pl-0.5',
                paddingRight: 'dt:pr-1',
              }}
            >
              <Icon
                color="c-on-secondary"
                groupDisabledStyle={{
                  color: 'group-disabled:c-gs-pure-white',
                }}
                desktop={{ size: 'dt:sz-2.5' }}
                mobile={{ size: 'mb:sz-2' }}
              >
                <SvgOneInCircle></SvgOneInCircle>
              </Icon>
              <Text
                size="body-2xl"
                color="c-on-secondary"
                groupDisabledStyle={{
                  color: 'group-disabled:c-gs-pure-white',
                }}
                desktop={{ size: 'dt:body-l' }}
                mobile={{ size: 'mb:body-m' }}
              >
                단방향 채팅방
              </Text>
              <Icon
                color="c-on-secondary"
                groupDisabledStyle={{
                  color: 'group-disabled:c-gs-pure-white',
                }}
                desktop={{ size: 'dt:sz-2.5' }}
                mobile={{ size: 'mb:sz-2' }}
              >
                <SvgSend></SvgSend>
              </Icon>
            </Button>
            <Button
              gap="gap-1"
              padding="p-1"
              borderRadius="rad-3"
              borderWidth="bw-0.25"
              borderStyle="bs-solid"
              borderColor="bc-on-secondary"
              group="group"
              disabledStyle={{
                borderColor: 'disabled:bc-gs-pure-white',
              }}
              disabled={currentTab === 'two'}
              onClick={() => setCurrentTab('two')}
              desktop={{
                gap: 'dt:gap-0.5',
                paddingY: 'dt:py-0.5',
                paddingLeft: 'dt:pl-0.5',
                paddingRight: 'dt:pr-1',
              }}
            >
              <Icon
                color="c-on-secondary"
                groupDisabledStyle={{
                  color: 'group-disabled:c-gs-pure-white',
                }}
                desktop={{ size: 'dt:sz-2.5' }}
                mobile={{ size: 'mb:sz-2' }}
              >
                <SvgTwoInCircle></SvgTwoInCircle>
              </Icon>
              <Text
                size="body-2xl"
                color="c-on-secondary"
                groupDisabledStyle={{
                  color: 'group-disabled:c-gs-pure-white',
                }}
                desktop={{ size: 'dt:body-l' }}
                mobile={{ size: 'mb:body-m' }}
              >
                1:1 문의 채팅방
              </Text>
              <Icon
                color="c-on-secondary"
                groupDisabledStyle={{
                  color: 'group-disabled:c-gs-pure-white',
                }}
                desktop={{ size: 'dt:sz-2.5' }}
                mobile={{ size: 'mb:sz-2' }}
              >
                <SvgHeadphone></SvgHeadphone>
              </Icon>
            </Button>
          </Flex>
          <Wrapper position="relative">
            {currentTab === 'one' && (
              <Flex
                position="relative"
                width="w-[55.2rem]"
                direction="flex-col"
                alignItems="ai-start"
                alignContent="ac-start"
                gap="gap-4"
                paddingX="px-3"
                paddingY="py-4"
                borderWidth="bw-0.25"
                borderStyle="bs-solid"
                borderColor="bc-gs-pure-white"
                borderRadius="rad-3"
                htmlAttributes={{
                  style: { boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.15)' },
                }}
                mobile={{ width: 'mb:w-90%', minWidth: 'mb:mw-[32.4rem]' }}
              >
                <Flex
                  width="w-full"
                  direction="flex-col"
                  gap="gap-1"
                  alignItems="ai-start"
                  alignContent="ac-start"
                >
                  <Text
                    color="c-primary-container"
                    size="body-3xl"
                    desktop={{ size: 'dt:body-xl' }}
                    mobile={{ size: 'mb:body-l' }}
                  >
                    투자에 필요한 정보만 위한
                  </Text>
                  <Text
                    color="c-gs-pure-white"
                    size="display-m"
                    desktop={{ size: 'dt:headline-l' }}
                    mobile={{ size: 'mb:headline-m' }}
                  >
                    단방향 채팅방
                  </Text>
                </Flex>
                <Flex
                  width="w-full"
                  direction="flex-col"
                  gap="gap-3"
                  alignItems="ai-start"
                  alignContent="ac-start"
                  desktop={{ gap: 'dt:gap-2' }}
                >
                  <Flex
                    width="w-full"
                    gap="gap-2"
                    padding="p-2"
                    borderRadius="rad-1.5"
                    justifyContent="jc-start"
                    color="c-on-tertiary-container"
                    wrap="flex-nowrap"
                    mobile={{ padding: 'mb:p-1' }}
                  >
                    <Icon
                      size="sz-3"
                      shrink="shrink-0"
                      desktop={{ size: 'dt:sz-2.5' }}
                      mobile={{ size: 'mb:sz-2' }}
                    >
                      <SvgOneInSquare></SvgOneInSquare>
                    </Icon>
                    <Text
                      size="body-2xl"
                      color="c-gs-pure-white"
                      line="line-clamp-none"
                      wordBreak="break-keep"
                      desktop={{ size: 'dt:body-l' }}
                      mobile={{ size: 'mb:body-m' }}
                    >
                      회원들이 필수적인 정보를 놓치지 않도록, 관리자가 주요 투자
                      정보를 공유하는 단방향 채팅방입니다.
                    </Text>
                  </Flex>
                  <Flex
                    width="w-full"
                    gap="gap-2"
                    padding="p-2"
                    borderRadius="rad-1.5"
                    justifyContent="jc-start"
                    color="c-on-tertiary-container"
                    wrap="flex-nowrap"
                    mobile={{ padding: 'mb:p-1' }}
                  >
                    <Icon
                      size="sz-3"
                      shrink="shrink-0"
                      desktop={{ size: 'dt:sz-2.5' }}
                      mobile={{ size: 'mb:sz-2' }}
                    >
                      <SvgTwoInSquare></SvgTwoInSquare>
                    </Icon>
                    <Text
                      size="body-2xl"
                      color="c-gs-pure-white"
                      line="line-clamp-none"
                      wordBreak="break-keep"
                      desktop={{ size: 'dt:body-l' }}
                      mobile={{ size: 'mb:body-m' }}
                    >
                      회원들이 매수/매도 정보를 놓치지 않도록, 매수/매도
                      메시지의 색상을 구분해서 보낼 수 있습니다.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            )}
            {currentTab === 'two' && (
              <Flex
                position="relative"
                width="w-[55.2rem]"
                direction="flex-col"
                alignItems="ai-start"
                alignContent="ac-start"
                gap="gap-4"
                paddingX="px-3"
                paddingY="py-4"
                borderWidth="bw-0.25"
                borderStyle="bs-solid"
                borderColor="bc-gs-pure-white"
                borderRadius="rad-3"
                htmlAttributes={{
                  style: { boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.15)' },
                }}
                mobile={{ width: 'mb:w-[32.4rem]' }}
              >
                <Flex
                  width="w-full"
                  direction="flex-col"
                  gap="gap-1"
                  alignItems="ai-start"
                  alignContent="ac-start"
                >
                  <Text
                    color="c-primary-container"
                    size="body-3xl"
                    desktop={{ size: 'dt:body-xl' }}
                    mobile={{ size: 'mb:body-l' }}
                  >
                    기간 연장 문의를 위한
                  </Text>
                  <Text
                    color="c-gs-pure-white"
                    size="display-m"
                    desktop={{ size: 'dt:headline-l' }}
                    mobile={{ size: 'mb:headline-m' }}
                  >
                    1:1 문의 채팅방
                  </Text>
                </Flex>
                <Flex
                  width="w-full"
                  direction="flex-col"
                  gap="gap-3"
                  alignItems="ai-start"
                  alignContent="ac-start"
                >
                  <Flex
                    width="w-full"
                    gap="gap-2"
                    padding="p-2"
                    borderRadius="rad-1.5"
                    justifyContent="jc-start"
                    color="c-on-tertiary-container"
                    wrap="flex-nowrap"
                  >
                    <Icon
                      size="sz-3"
                      shrink="shrink-0"
                      desktop={{ size: 'dt:sz-2.5' }}
                      mobile={{ size: 'mb:sz-2' }}
                    >
                      <SvgOneInSquare></SvgOneInSquare>
                    </Icon>
                    <Text
                      size="body-2xl"
                      color="c-gs-pure-white"
                      line="line-clamp-none"
                      wordBreak="break-keep"
                      desktop={{ size: 'dt:body-l' }}
                      mobile={{ size: 'mb:body-m' }}
                    >
                      가입 기간 연장을 위한 1:1 채팅방을 통해 회원들의 문의를
                      처리할 수 있습니다.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            )}
          </Wrapper>
          <Button
            paddingX="px-2.5"
            paddingY="py-1"
            color="c-gs-pure-white"
            justifyContent="jc-center"
            alignItems="ai-center"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth', // 부드러운 스크롤
                block: 'end', // 뷰포트의 시작 부분에 위치하도록
              });
            }}
            desktop={{
              width: 'dt:w-22',
              paddingX: 'dt:px-1.5',
              paddingY: 'dt:py-0.5',
            }}
            mobile={{ width: 'mb:w-20' }}
          >
            <Text
              font="font-primary"
              size="headline-xs"
              color="c-secondary"
              desktop={{ size: 'dt:title-m' }}
              mobile={{ size: 'mb:title-s' }}
            >
              이용 문의하기
            </Text>
            <Icon size="sz-3" color="c-secondary">
              <SvgForwardArrow />
            </Icon>
          </Button>
          <Wrapper
            position="absolute"
            top="t-0"
            left="l-0"
            width="w-[45.6rem]"
            opacity={currentTab === 'one' ? 'oc-0.2' : 'oc-1'}
            transformTranslateX={
              currentTab === 'one' ? '-trlx-[105%]' : '-trlx-0'
            }
            transition="trans-all"
            transitionDuration="dur-1000"
            desktop={{
              width: 'dt:w-[27.6rem]',
              top: 'dt:t-[47.1rem]',
              transformTranslateX: 'dt:-trlx-[150%]',
              left: 'dt:l-50%',
            }}
          >
            <Image
              className="w-full"
              src={phoneDetail01}
              alt="phone-detail-01"
            ></Image>
          </Wrapper>
          <Wrapper
            position="absolute"
            top="t-0"
            left="l-0"
            width="w-[45.6rem]"
            opacity={currentTab === 'two' ? 'oc-0.2' : 'oc-1'}
            transformTranslateX={
              currentTab === 'two' ? '-trlx-[105%]' : '-trlx-0'
            }
            transition="trans-all"
            transitionDuration="dur-1000"
            desktop={{
              width: 'dt:w-[27.6rem]',
              top: 'dt:t-[47.1rem]',
              left: 'dt:l-50%',
              transformTranslateX: 'dt:-trlx-50%',
            }}
          >
            <Image
              className="w-full"
              src={phoneDetail02}
              alt="phone-detail-02"
            ></Image>
          </Wrapper>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Chat;
