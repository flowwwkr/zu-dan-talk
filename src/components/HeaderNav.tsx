'use client';

import SvgForwardArrow from '../assets/svgs/forward-arrow.svg';
import { Button, Icon, Text } from '@flowwwkr/design-system-tailwind';

const HeaderNav = () => {
  return (
    <>
      <Button
        paddingX="px-2.5"
        paddingY="py-1"
        color="c-transparent"
        justifyContent="jc-center"
        alignItems="ai-center"
        onClick={() => {
          window.scrollTo({
            top: 0, // Y 좌표 (px 단위)
            left: 0, // X 좌표
            behavior: 'smooth', // 부드러운 스크롤
          });
        }}
        desktop={{
          paddingX: 'dt:px-1.5',
          paddingY: 'dt:py-0.5',
        }}
        tablet={{
          display: 'tb:hidden',
        }}
      >
        <Text
          font="font-primary"
          size="headline-xs"
          color="c-gs-pure-white"
          desktop={{
            size: 'dt:title-m',
          }}
        >
          &ldquo;주단톡&rdquo;이란?
        </Text>
      </Button>
      <Button
        paddingX="px-2.5"
        paddingY="py-1"
        color="c-transparent"
        justifyContent="jc-center"
        alignItems="ai-center"
        onClick={() => {
          document.getElementById('web')?.scrollIntoView({
            behavior: 'smooth', // 부드러운 스크롤
            block: 'start', // 뷰포트의 시작 부분에 위치하도록
          });
        }}
        desktop={{
          paddingX: 'dt:px-1.5',
          paddingY: 'dt:py-0.5',
        }}
        tablet={{
          display: 'tb:hidden',
        }}
      >
        <Text
          font="font-primary"
          size="headline-xs"
          color="c-gs-pure-white"
          desktop={{
            size: 'dt:title-m',
          }}
        >
          관리자 웹 기능
        </Text>
      </Button>
      <Button
        paddingX="px-2.5"
        paddingY="py-1"
        color="c-transparent"
        justifyContent="jc-center"
        alignItems="ai-center"
        onClick={() => {
          document.getElementById('chat')?.scrollIntoView({
            behavior: 'smooth', // 부드러운 스크롤
            block: 'center', // 뷰포트의 시작 부분에 위치하도록
          });
        }}
        desktop={{
          paddingX: 'dt:px-1.5',
          paddingY: 'dt:py-0.5',
        }}
        tablet={{
          display: 'tb:hidden',
        }}
      >
        <Text
          font="font-primary"
          size="headline-xs"
          color="c-gs-pure-white"
          desktop={{
            size: 'dt:title-m',
          }}
        >
          채팅방 앱 기능
        </Text>
      </Button>
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
          paddingX: 'dt:px-1.5',
          paddingY: 'dt:py-0.5',
        }}
      >
        <Text
          font="font-primary"
          size="headline-xs"
          color="c-secondary"
          desktop={{
            size: 'dt:title-m',
          }}
        >
          이용 문의하기
        </Text>
        <Icon
          size="sz-3"
          color="c-secondary"
          desktop={{
            size: 'dt:sz-2.25',
          }}
        >
          <SvgForwardArrow />
        </Icon>
      </Button>
    </>
  );
};

export default HeaderNav;
