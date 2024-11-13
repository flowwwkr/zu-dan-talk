'use client';

import {
  Button,
  Flex,
  IconArrow,
  Span,
  Text,
  Wrapper,
} from '@flowwwkr/design-system-tailwind';
import { useState } from 'react';

const ChatCarousel = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Flex direction="flex-col" gap="gap-3" alignItems="ai-start">
      <Flex
        position="relative"
        width="w-56"
        height="h-20"
        borderRadius="rad-2"
        borderRadiusBottomLeft="rad-bl-0"
        color="c-gs-pure-white"
        colorOpacity="co-0.1"
        overflow="ovf-hidden"
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
              ? '-trlx-100%'
              : currentPage === 2
              ? 'trlx-0'
              : 'trlx-100%'
          }
        >
          <Flex
            width="w-full"
            height="h-full"
            padding="p-2"
            direction="flex-col"
            gap="gap-2"
            justifyContent="jc-start"
            alignItems="ai-start"
            alignContent="ac-start"
            wrap="flex-nowrap"
            shrink="shrink-0"
          >
            <Wrapper
              paddingX="px-2.5"
              paddingY="py-1"
              color="c-gs-pure-white"
              borderRadius="rad-3"
            >
              <Text size="title-l" color="c-on-secondary-container">
                실시간 정보
              </Text>
            </Wrapper>
            <Text
              size="body-2xl"
              color="c-gs-pure-white"
              line="line-clamp-none"
              wordBreak="break-keep"
            >
              빠르고 안정적인 메시징 시스템을 통해 가입 회원들에게{' '}
              <Span
                htmlAttributes={{
                  style: {
                    fontWeight: '700',
                  },
                }}
              >
                최신시장 소식을 간편하게 공유
              </Span>
              할 수 있습니다.
            </Text>
          </Flex>
          <Flex
            width="w-full"
            height="h-full"
            padding="p-2"
            direction="flex-col"
            gap="gap-2"
            justifyContent="jc-start"
            alignItems="ai-start"
            alignContent="ac-start"
            wrap="flex-nowrap"
            shrink="shrink-0"
          >
            <Wrapper
              paddingX="px-2.5"
              paddingY="py-1"
              color="c-gs-pure-white"
              borderRadius="rad-3"
            >
              <Text size="title-l" color="c-on-secondary-container">
                독립적인 플랫폼
              </Text>
            </Wrapper>
            <Text
              size="body-2xl"
              color="c-gs-pure-white"
              line="line-clamp-none"
              wordBreak="break-keep"
            >
              <Span
                htmlAttributes={{
                  style: {
                    fontWeight: '700',
                  },
                }}
              >
                다른 플랫폼에 의존하지 않고,
              </Span>
              자사앱으로 구축되어{' '}
              <Span
                htmlAttributes={{
                  style: {
                    fontWeight: '700',
                  },
                }}
              >
                회원들에게 신뢰감을 줄 수 있습니다.
              </Span>
            </Text>
          </Flex>
          <Flex
            width="w-full"
            height="h-full"
            padding="p-2"
            direction="flex-col"
            gap="gap-2"
            justifyContent="jc-start"
            alignItems="ai-start"
            alignContent="ac-start"
            shrink="shrink-0"
            wrap="flex-nowrap"
          >
            <Wrapper
              paddingX="px-2.5"
              paddingY="py-1"
              color="c-gs-pure-white"
              borderRadius="rad-3"
            >
              <Text size="title-l" color="c-on-secondary-container">
                맞춤형 제작 기능
              </Text>
            </Wrapper>
            <Text
              size="body-2xl"
              color="c-gs-pure-white"
              line="line-clamp-none"
              wordBreak="break-keep"
            >
              <Span
                htmlAttributes={{
                  style: {
                    fontWeight: '700',
                  },
                }}
              >
                운영 업체에서 직접 개발한 APP처럼{' '}
              </Span>
              로고, 색상을 맞춤형으로 제공하여,{' '}
              <Span
                htmlAttributes={{
                  style: {
                    fontWeight: '700',
                  },
                }}
              >
                맞춤형 소통 환경
              </Span>
              을 제공합니다.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex gap="gap-1">
        <Button
          form="btn-text"
          padding="p-0"
          color="c-gs-pure-white"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
          disabledStyle={{
            color: 'disabled:c-on-tertiary',
          }}
        >
          <IconArrow type="left" size="sz-3" color="c-inherit"></IconArrow>
        </Button>
        <Text size="body-5xl" color="c-gs-pure-white">
          <Span size="headline-l">0{currentPage}</Span>/03
        </Text>
        <Button
          form="btn-text"
          padding="p-0"
          color="c-gs-pure-white"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === 3}
          disabledStyle={{
            color: 'disabled:c-on-tertiary',
          }}
        >
          <IconArrow type="right" size="sz-3" color="c-inherit"></IconArrow>
        </Button>
      </Flex>
    </Flex>
  );
};

export default ChatCarousel;
