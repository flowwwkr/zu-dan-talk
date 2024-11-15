'use client';

import adminMockup from '../assets/images/admin-mockup.png';
import SvgOneInCircle from '../assets/svgs/one-in-circle.svg';
import SvgTwoInCircle from '../assets/svgs/two-in-circle.svg';
import SvgThreeInCircle from '../assets/svgs/three-in-circle.svg';
import SvgOneInSquare from '../assets/svgs/one-in-square.svg';
import SvgTwoInSquare from '../assets/svgs/two-in-square.svg';
import SvgThreeInSquare from '../assets/svgs/three-in-square.svg';
import SvgPeople from '../assets/svgs/people.svg';
import SvgAdmin from '../assets/svgs/admin.svg';
import SvgManage from '../assets/svgs/manage.svg';
import {
  Block,
  Button,
  Flex,
  Icon,
  Span,
  Text,
  Wrapper,
} from '@flowwwkr/design-system-tailwind';
import Image from 'next/image';
import { TouchEvent, useRef, useState } from 'react';

const ChatAdmin = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startX = useRef(0);
  const endX = useRef(0);
  const isDragging = useRef(false);

  // 터치 시작 위치 기록
  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    startX.current = event.touches[0].clientX;
    isDragging.current = true;
  };

  // 터치 종료 위치 기록 및 슬라이드 변경
  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    endX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    if (startX.current - endX.current > 30) {
      setCurrentPage((prev) => (prev >= 3 ? 3 : prev + 1));
    } else if (endX.current - startX.current > 30) {
      setCurrentPage((prev) => (prev <= 1 ? 1 : prev - 1));
    }
  };

  return (
    <Flex
      position="relative"
      width="w-full"
      direction="flex-col"
      alignItems="ai-start"
      alignContent="ac-start"
      gap="gap-3"
      desktop={{
        marginTop: 'dt:mt-[46rem]',
        alignItems: 'dt:ai-center',
        alignContent: 'dt:ac-center',
        gap: 'dt:gap-2',
      }}
      tablet={{ marginTop: 'tb:mt-[27.7rem]', gap: 'tb:gap-1' }}
    >
      <Flex
        gap="gap-1"
        tablet={{
          display: 'tb:hidden',
        }}
      >
        <Button
          gap="gap-1"
          padding="p-1"
          borderRadius="rad-3"
          borderWidth="bw-0.25"
          borderStyle="bs-solid"
          borderColor="bc-tertiary"
          group="group"
          disabledStyle={{
            borderColor: 'disabled:bc-on-primary-container',
          }}
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          desktop={{
            gap: 'dt:gap-0.5',
            paddingY: 'dt:py-0.5',
            paddingLeft: 'dt:pl-0.5',
            paddingRight: 'dt:pr-1',
          }}
        >
          <Icon
            color="c-tertiary"
            groupDisabledStyle={{
              color: 'group-disabled:c-on-primary-container',
            }}
            desktop={{ size: 'dt:sz-2.5' }}
            tablet={{ size: 'tb:sz-2' }}
          >
            <SvgOneInCircle></SvgOneInCircle>
          </Icon>
          <Text
            size="body-2xl"
            color="c-tertiary"
            groupDisabledStyle={{
              color: 'group-disabled:c-on-primary-container',
            }}
            desktop={{ size: 'dt:body-l' }}
            tablet={{ size: 'tb:body-m' }}
          >
            회원 관리 기능
          </Text>
          <Icon
            color="c-tertiary"
            groupDisabledStyle={{
              color: 'group-disabled:c-on-primary-container',
            }}
            desktop={{ size: 'dt:sz-2.5' }}
            tablet={{ size: 'tb:sz-2' }}
          >
            <SvgPeople></SvgPeople>
          </Icon>
        </Button>
        <Button
          gap="gap-1"
          padding="p-1"
          borderRadius="rad-3"
          borderWidth="bw-0.25"
          borderStyle="bs-solid"
          borderColor="bc-tertiary"
          group="group"
          disabledStyle={{
            borderColor: 'disabled:bc-on-primary-container',
          }}
          onClick={() => setCurrentPage(2)}
          disabled={currentPage === 2}
          desktop={{
            gap: 'dt:gap-0.5',
            paddingY: 'dt:py-0.5',
            paddingLeft: 'dt:pl-0.5',
            paddingRight: 'dt:pr-1',
          }}
        >
          <Icon
            color="c-tertiary"
            groupDisabledStyle={{
              color: 'group-disabled:c-on-primary-container',
            }}
            desktop={{ size: 'dt:sz-2.5' }}
            tablet={{ size: 'tb:sz-2' }}
          >
            <SvgTwoInCircle></SvgTwoInCircle>
          </Icon>
          <Text
            size="body-2xl"
            color="c-tertiary"
            groupDisabledStyle={{
              color: 'group-disabled:c-on-primary-container',
            }}
            desktop={{ size: 'dt:body-l' }}
            tablet={{ size: 'tb:body-m' }}
          >
            관리자 기능
          </Text>
          <Icon
            color="c-tertiary"
            groupDisabledStyle={{
              color: 'group-disabled:c-on-primary-container',
            }}
            desktop={{ size: 'dt:sz-2.5' }}
            tablet={{ size: 'tb:sz-2' }}
          >
            <SvgAdmin></SvgAdmin>
          </Icon>
        </Button>
        <Button
          gap="gap-1"
          padding="p-1"
          borderRadius="rad-3"
          borderWidth="bw-0.25"
          borderStyle="bs-solid"
          borderColor="bc-tertiary"
          group="group"
          disabledStyle={{
            borderColor: 'disabled:bc-on-primary-container',
          }}
          onClick={() => setCurrentPage(3)}
          disabled={currentPage === 3}
          desktop={{
            gap: 'dt:gap-0.5',
            paddingY: 'dt:py-0.5',
            paddingLeft: 'dt:pl-0.5',
            paddingRight: 'dt:pr-1',
          }}
        >
          <Icon
            color="c-tertiary"
            groupDisabledStyle={{
              color: 'group-disabled:c-on-primary-container',
            }}
            desktop={{ size: 'dt:sz-2.5' }}
            tablet={{ size: 'tb:sz-2' }}
          >
            <SvgThreeInCircle></SvgThreeInCircle>
          </Icon>
          <Text
            size="body-2xl"
            color="c-tertiary"
            groupDisabledStyle={{
              color: 'group-disabled:c-on-primary-container',
            }}
            desktop={{ size: 'dt:body-l' }}
            tablet={{ size: 'tb:body-m' }}
          >
            채팅방 관리 기능
          </Text>
          <Icon
            color="c-tertiary"
            groupDisabledStyle={{
              color: 'group-disabled:c-on-primary-container',
            }}
            desktop={{ size: 'dt:sz-2.5' }}
            tablet={{ size: 'tb:sz-2' }}
          >
            <SvgManage></SvgManage>
          </Icon>
        </Button>
      </Flex>
      <Wrapper position="relative">
        <Flex
          position="relative"
          width="w-[55.2rem]"
          height="h-[40rem]"
          overflowX="ovf-x-hidden"
          borderWidth="bw-0.25"
          borderStyle="bs-solid"
          borderColor="bc-on-primary-container"
          borderRadius="rad-3"
          tablet={{
            width: 'tb:w-[32.4rem]',
            height: 'tb:h-[22.9rem]',
          }}
          htmlAttributes={{
            style: {
              boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.15)',
              userSelect: 'none',
            },
            onTouchStart: handleTouchStart,
            onTouchMove: handleTouchMove,
            onTouchEnd: handleTouchEnd,
            onMouseDown: (event) => {
              startX.current = event.clientX;
              isDragging.current = true;
            },
            onMouseMove: (event) => {
              if (isDragging.current) {
                endX.current = event.clientX;
              }
            },
            onMouseUp: handleTouchEnd,
            onMouseLeave: () => {
              isDragging.current = false;
            },
          }}
        >
          <Flex
            position="absolute"
            top="t-0"
            left="l-0"
            height="h-full"
            wrap="flex-nowrap"
            transition="trans-all"
            transitionDuration="dur-700"
            transformTranslateX={
              currentPage === 1
                ? 'trlx-100%'
                : currentPage === 2
                ? 'trlx-0'
                : '-trlx-100%'
            }
          >
            <Flex
              position="relative"
              width="w-full"
              wrap="flex-nowrap"
              shrink="shrink-0"
              height="h-full"
              direction="flex-col"
              alignItems="ai-start"
              alignContent="ac-start"
              gap="gap-4"
              paddingX="px-3"
              paddingY="py-4"
              color="c-gs-pure-white"
              tablet={{
                paddingX: 'tb:px-2',
                paddingY: 'tb:py-3',
              }}
            >
              <Flex
                width="w-full"
                direction="flex-col"
                gap="gap-1"
                alignItems="ai-start"
                alignContent="ac-start"
                wrap="flex-nowrap"
              >
                <Text
                  color="c-on-neutral"
                  size="body-3xl"
                  desktop={{ size: 'dt:body-xl' }}
                  tablet={{ size: 'tb:body-l' }}
                >
                  간편한 회원 관리!
                </Text>
                <Text
                  color="c-on-neutral"
                  size="display-m"
                  desktop={{ size: 'dt:headline-l' }}
                  tablet={{ size: 'tb:headline-m' }}
                >
                  회원 관리 기능
                </Text>
              </Flex>
              <Flex
                width="w-full"
                direction="flex-col"
                gap="gap-3"
                alignItems="ai-start"
                alignContent="ac-start"
                desktop={{ gap: 'dt:gap-2' }}
                tablet={{ gap: 'tb:gap-1' }}
              >
                <Flex
                  width="w-full"
                  gap="gap-1"
                  padding="p-2"
                  borderRadius="rad-1.5"
                  justifyContent="jc-start"
                  color="c-primary-container"
                  tablet={{ padding: 'tb:p-1' }}
                >
                  <Icon
                    size="sz-3"
                    shrink="shrink-0"
                    desktop={{ size: 'dt:sz-2.5' }}
                    tablet={{ size: 'tb:sz-2' }}
                  >
                    <SvgOneInSquare></SvgOneInSquare>
                  </Icon>
                  <Text
                    size="body-2xl"
                    color="c-on-primary-container"
                    desktop={{ size: 'dt:body-l' }}
                    tablet={{ size: 'tb:body-m' }}
                  >
                    <Span
                      htmlAttributes={{
                        style: {
                          fontWeight: 700,
                        },
                      }}
                    >
                      가입 요청을 승인하고 거절
                    </Span>
                    할 수 있어요.
                  </Text>
                </Flex>
                <Flex
                  width="w-full"
                  gap="gap-1"
                  padding="p-2"
                  borderRadius="rad-1.5"
                  justifyContent="jc-start"
                  color="c-primary-container"
                  tablet={{ padding: 'tb:p-1' }}
                  wrap="flex-nowrap"
                >
                  <Icon
                    size="sz-3"
                    shrink="shrink-0"
                    desktop={{ size: 'dt:sz-2.5' }}
                    tablet={{ size: 'tb:sz-2' }}
                  >
                    <SvgTwoInSquare></SvgTwoInSquare>
                  </Icon>
                  <Text
                    size="body-2xl"
                    color="c-on-primary-container"
                    desktop={{ size: 'dt:body-l' }}
                    tablet={{ size: 'tb:body-m' }}
                  >
                    <Span
                      htmlAttributes={{
                        style: {
                          fontWeight: 700,
                        },
                      }}
                    >
                      차단, 계정정지, 해제
                    </Span>{' '}
                    등{' '}
                    <Span
                      htmlAttributes={{
                        style: {
                          fontWeight: 700,
                        },
                      }}
                    >
                      계정을 관리
                    </Span>
                    할 수 있어요.
                  </Text>
                </Flex>
                <Flex
                  width="w-full"
                  gap="gap-1"
                  padding="p-2"
                  borderRadius="rad-1.5"
                  color="c-primary-container"
                  justifyContent="jc-start"
                  tablet={{ padding: 'tb:p-1' }}
                >
                  <Icon
                    size="sz-3"
                    shrink="shrink-0"
                    desktop={{ size: 'dt:sz-2.5' }}
                    tablet={{ size: 'tb:sz-2' }}
                  >
                    <SvgThreeInSquare></SvgThreeInSquare>
                  </Icon>
                  <Text
                    size="body-2xl"
                    color="c-on-primary-container"
                    desktop={{ size: 'dt:body-l' }}
                    tablet={{ size: 'tb:body-m' }}
                  >
                    <Span
                      htmlAttributes={{
                        style: {
                          fontWeight: 700,
                        },
                      }}
                    >
                      유저 통계와 활동 내역을 모니터링
                    </Span>
                    할 수 있어요.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              position="relative"
              width="w-full"
              height="h-full"
              wrap="flex-nowrap"
              shrink="shrink-0"
              direction="flex-col"
              alignItems="ai-start"
              alignContent="ac-start"
              gap="gap-4"
              paddingX="px-3"
              paddingY="py-4"
              color="c-gs-pure-white"
              tablet={{
                paddingX: 'tb:px-2',
                paddingY: 'tb:py-3',
              }}
            >
              <Flex
                width="w-full"
                direction="flex-col"
                gap="gap-1"
                wrap="flex-nowrap"
                alignItems="ai-start"
                alignContent="ac-start"
              >
                <Text
                  color="c-on-neutral"
                  size="body-3xl"
                  desktop={{ size: 'dt:body-xl' }}
                  tablet={{ size: 'tb:body-l' }}
                >
                  리딩방을 지휘하는 운영의 핵심
                </Text>
                <Text
                  color="c-on-neutral"
                  size="display-m"
                  desktop={{ size: 'dt:headline-l' }}
                  tablet={{ size: 'tb:headline-m' }}
                >
                  관리자 기능
                </Text>
              </Flex>
              <Flex
                width="w-full"
                direction="flex-col"
                gap="gap-3"
                alignItems="ai-start"
                alignContent="ac-start"
                desktop={{ gap: 'dt:gap-2' }}
                tablet={{ gap: 'tb:gap-1' }}
              >
                <Flex
                  width="w-full"
                  gap="gap-1"
                  padding="p-2"
                  borderRadius="rad-1.5"
                  justifyContent="jc-start"
                  color="c-primary-container"
                  tablet={{ padding: 'tb:p-1' }}
                >
                  <Icon
                    size="sz-3"
                    shrink="shrink-0"
                    desktop={{ size: 'dt:sz-2.5' }}
                    tablet={{ size: 'tb:sz-2' }}
                  >
                    <SvgOneInSquare></SvgOneInSquare>
                  </Icon>
                  <Text
                    size="body-2xl"
                    color="c-on-primary-container"
                    desktop={{ size: 'dt:body-l' }}
                    tablet={{ size: 'tb:body-m' }}
                  >
                    <Span
                      htmlAttributes={{
                        style: {
                          fontWeight: 700,
                        },
                      }}
                    >
                      회원의 APP 사용 기간을 추가
                    </Span>
                    할 수 있어요.
                  </Text>
                </Flex>
                <Flex
                  width="w-full"
                  gap="gap-1"
                  padding="p-2"
                  borderRadius="rad-1.5"
                  justifyContent="jc-start"
                  color="c-primary-container"
                  tablet={{ padding: 'tb:p-1' }}
                >
                  <Icon
                    size="sz-3"
                    shrink="shrink-0"
                    desktop={{ size: 'dt:sz-2.5' }}
                    tablet={{ size: 'tb:sz-2' }}
                  >
                    <SvgTwoInSquare></SvgTwoInSquare>
                  </Icon>
                  <Text
                    size="body-2xl"
                    color="c-on-primary-container"
                    desktop={{ size: 'dt:body-l' }}
                    tablet={{ size: 'tb:body-m' }}
                  >
                    <Span
                      htmlAttributes={{
                        style: {
                          fontWeight: 700,
                        },
                      }}
                    >
                      관리자 활동을 기록하고 확인
                    </Span>
                    할 수 있어요.
                  </Text>
                </Flex>
                <Flex
                  width="w-full"
                  gap="gap-1"
                  padding="p-2"
                  borderRadius="rad-1.5"
                  color="c-primary-container"
                  justifyContent="jc-start"
                  tablet={{ padding: 'tb:p-1' }}
                >
                  <Icon
                    size="sz-3"
                    shrink="shrink-0"
                    desktop={{ size: 'dt:sz-2.5' }}
                    tablet={{ size: 'tb:sz-2' }}
                  >
                    <SvgThreeInSquare></SvgThreeInSquare>
                  </Icon>
                  <Text
                    size="body-2xl"
                    color="c-on-primary-container"
                    desktop={{ size: 'dt:body-l' }}
                    tablet={{ size: 'tb:body-m' }}
                  >
                    안정성을 위해{' '}
                    <Span
                      htmlAttributes={{
                        style: {
                          fontWeight: 700,
                        },
                      }}
                    >
                      관리자 계정의 보안
                    </Span>
                    을 제공합니다.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              position="relative"
              width="w-full"
              wrap="flex-nowrap"
              height="h-full"
              direction="flex-col"
              shrink="shrink-0"
              alignItems="ai-start"
              alignContent="ac-start"
              gap="gap-4"
              paddingX="px-3"
              paddingY="py-4"
              color="c-gs-pure-white"
              tablet={{
                paddingX: 'tb:px-2',
                paddingY: 'tb:py-3',
              }}
            >
              <Flex
                width="w-full"
                direction="flex-col"
                gap="gap-1"
                wrap="flex-nowrap"
                alignItems="ai-start"
                alignContent="ac-start"
              >
                <Text
                  color="c-on-neutral"
                  size="body-3xl"
                  desktop={{ size: 'dt:body-xl' }}
                  tablet={{ size: 'tb:body-l' }}
                >
                  회원과 관리자가 모두 편한 채팅방!
                </Text>
                <Text
                  color="c-on-neutral"
                  size="display-m"
                  desktop={{ size: 'dt:headline-l' }}
                  tablet={{ size: 'tb:headline-m' }}
                >
                  채팅방 관리 기능
                </Text>
              </Flex>
              <Flex
                width="w-full"
                direction="flex-col"
                gap="gap-3"
                alignItems="ai-start"
                alignContent="ac-start"
                desktop={{ gap: 'dt:gap-2' }}
                tablet={{ gap: 'tb:gap-1' }}
              >
                <Flex
                  width="w-full"
                  gap="gap-1"
                  padding="p-2"
                  borderRadius="rad-1.5"
                  justifyContent="jc-start"
                  color="c-primary-container"
                  tablet={{ padding: 'tb:p-1' }}
                >
                  <Icon
                    size="sz-3"
                    shrink="shrink-0"
                    desktop={{ size: 'dt:sz-2.5' }}
                    tablet={{ size: 'tb:sz-2' }}
                  >
                    <SvgOneInSquare></SvgOneInSquare>
                  </Icon>
                  <Text
                    size="body-2xl"
                    color="c-on-primary-container"
                    desktop={{ size: 'dt:body-l' }}
                    tablet={{ size: 'tb:body-m' }}
                  >
                    <Span
                      htmlAttributes={{
                        style: {
                          fontWeight: 700,
                        },
                      }}
                    >
                      원하는 채팅방을 개설
                    </Span>
                    하고{' '}
                    <Span
                      htmlAttributes={{
                        style: {
                          fontWeight: 700,
                        },
                      }}
                    >
                      삭제
                    </Span>
                    할 수 있어요.
                  </Text>
                </Flex>
                <Flex
                  width="w-full"
                  gap="gap-1"
                  padding="p-2"
                  borderRadius="rad-1.5"
                  justifyContent="jc-start"
                  color="c-primary-container"
                  tablet={{ padding: 'tb:p-1' }}
                >
                  <Icon
                    size="sz-3"
                    shrink="shrink-0"
                    desktop={{ size: 'dt:sz-2.5' }}
                    tablet={{ size: 'tb:sz-2' }}
                  >
                    <SvgTwoInSquare></SvgTwoInSquare>
                  </Icon>
                  <Text
                    size="body-2xl"
                    color="c-on-primary-container"
                    desktop={{ size: 'dt:body-l' }}
                    tablet={{ size: 'tb:body-m' }}
                  >
                    <Span
                      htmlAttributes={{
                        style: {
                          fontWeight: 700,
                        },
                      }}
                    >
                      매수/매도 채팅을 알림
                    </Span>
                    으로{' '}
                    <Span
                      htmlAttributes={{
                        style: {
                          fontWeight: 700,
                        },
                      }}
                    >
                      보낼
                    </Span>{' '}
                    수 있어요.
                  </Text>
                </Flex>
                <Flex
                  width="w-full"
                  gap="gap-1"
                  padding="p-2"
                  borderRadius="rad-1.5"
                  color="c-primary-container"
                  justifyContent="jc-start"
                  tablet={{ padding: 'tb:p-1' }}
                >
                  <Icon
                    size="sz-3"
                    shrink="shrink-0"
                    desktop={{ size: 'dt:sz-2.5' }}
                    tablet={{ size: 'tb:sz-2' }}
                  >
                    <SvgThreeInSquare></SvgThreeInSquare>
                  </Icon>
                  <Text
                    size="body-2xl"
                    color="c-on-primary-container"
                    desktop={{ size: 'dt:body-l' }}
                    tablet={{ size: 'tb:body-m' }}
                  >
                    중요한 내용은{' '}
                    <Span
                      htmlAttributes={{
                        style: {
                          fontWeight: 700,
                        },
                      }}
                    >
                      메세지 공지
                    </Span>
                    를 할 수 있어요.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Block
          position="absolute"
          top="t-0"
          left="l-100%"
          size="sz-full"
          borderRadius="rad-3"
          color="c-primary-container"
          transformTranslateX="trlx-3"
          zIndex="z-2"
        ></Block>
        <Block
          position="absolute"
          top="t-0"
          right="r-100%"
          size="sz-full"
          borderRadius="rad-3"
          color="c-primary-container"
          transformTranslateX="-trlx-3"
          zIndex="z-2"
        ></Block>
      </Wrapper>
      <Wrapper
        position="absolute"
        top="t-0"
        left="l-50%"
        width="w-[92.8rem]"
        zIndex="z-3"
        transformTranslateY="trly-6%"
        desktop={{
          width: 'dt:w-[55.2rem]',
          top: 'dt:-t-[38.8rem]',
          left: 'dt:l-50%',
          transformTranslateX: 'dt:-trlx-50%',
        }}
        tablet={{ width: 'tb:w-[32.4rem]', top: 'tb:-t-[22.9rem]' }}
      >
        <Image className="w-full" src={adminMockup} alt="admin-mockup"></Image>
      </Wrapper>
    </Flex>
  );
};

export default ChatAdmin;
