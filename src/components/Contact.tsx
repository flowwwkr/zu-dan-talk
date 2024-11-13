'use client';

import {
  Button,
  CheckBox,
  Flex,
  Input,
  Label,
  Span,
  Text,
  Wrapper,
} from '@flowwwkr/design-system-tailwind';
import Image from 'next/image';
import background06 from '../assets/images/background-06@2x.png';
import { useState } from 'react';
import { contact } from '@/actions/contact';

const Contact = () => {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <Flex
      position="relative"
      width="w-full"
      height="h-[81rem]"
      direction="flex-col"
      htmlAttributes={{
        id: 'contact',
      }}
      mobile={{ height: 'mb:h-[64rem]' }}
    >
      <Wrapper position="absolute" width="w-auto" height="h-full" zIndex="z-1">
        <Image
          src={background06}
          alt="hero-image"
          className="w-auto h-full obj-cover"
        ></Image>
      </Wrapper>
      <Flex position="relative" width="w-full" height="h-full" zIndex="z-2">
        <Flex
          width="w-86%"
          direction="flex-col"
          gap="gap-5"
          mobile={{ gap: 'mb:gap-3' }}
        >
          <Flex
            width="w-full"
            direction="flex-col"
            gap="gap-3"
            mobile={{ gap: 'mb:gap-2' }}
            smallMobile={{ gap: 'sb:gap-1' }}
          >
            <Text
              color="c-gs-pure-white"
              size="body-3xl"
              mobile={{ size: 'mb:body-xl' }}
              smallMobile={{ size: 'sb:body-l' }}
            >
              리딩방 전용 임대형 단방향 채팅앱,{' '}
              <Span
                font="font-secondary"
                color="lg-b"
                fromColor="fc-gs-pure-white"
                fromOpacity="fo-1"
                toColor="tc-primary"
                toOpacity="to-1"
                htmlAttributes={{
                  style: { fontWeight: '700' },
                }}
              >
                &ldquo;주단톡&rdquo;
              </Span>
            </Text>
            <Text
              color="c-gs-pure-white"
              size="display-xl"
              mobile={{ size: 'mb:display-m' }}
              smallMobile={{ size: 'sb:headline-l' }}
            >
              지금 바로 문의하세요!
            </Text>
          </Flex>
          <form
            className="w-[55.2rem] mb:w-full"
            action={async (formData: FormData) => {
              if (!isCheck) {
                alert('약관에 동의해주세요.');
                return;
              }
              const result = await contact(formData);
              if (result.ok) {
                alert(result.message);
                window.location.reload();
              } else {
                alert(result.message);
              }
            }}
          >
            <Flex
              width="w-full"
              direction="flex-col"
              gap="gap-5"
              mobile={{ gap: 'mb:gap-3' }}
            >
              <Flex
                width="w-full"
                direction="flex-col"
                gap="gap-2"
                mobile={{ gap: 'mb:gap-1' }}
              >
                <Flex
                  width="w-full"
                  direction="flex-col"
                  gap="gap-1"
                  alignItems="ai-start"
                  alignContent="ac-start"
                >
                  <Label htmlFor="name">
                    <Text
                      size="body-2xl"
                      color="c-gs-pure-white"
                      mobile={{
                        size: 'mb:body-l',
                      }}
                      smallMobile={{
                        size: 'sb:body-m',
                      }}
                    >
                      이름
                    </Text>
                  </Label>
                  <Wrapper
                    width="w-full"
                    color="c-gs-pure-white"
                    paddingX="px-2"
                    paddingY="py-1"
                    borderRadius="rad-1"
                    mobile={{
                      paddingX: 'mb:px-1.5',
                      paddingY: 'mb:py-0.5',
                    }}
                  >
                    <Input
                      id="name"
                      name="name"
                      width="w-full"
                      font="font-primary"
                      fontSize="body-2xl"
                      color="c-on-neutral"
                      placeholderStyle={{
                        color: 'placeholder:c-on-tertiary',
                      }}
                      placeholder={'이름을 입력하세요'}
                      required
                      mobile={{
                        fontSize: 'mb:body-l',
                      }}
                      smallMobile={{
                        fontSize: 'sb:body-m',
                      }}
                    ></Input>
                  </Wrapper>
                </Flex>
                <Flex
                  width="w-full"
                  direction="flex-col"
                  gap="gap-1"
                  alignItems="ai-start"
                  alignContent="ac-start"
                >
                  <Label htmlFor="phone">
                    <Text
                      size="body-2xl"
                      color="c-gs-pure-white"
                      mobile={{
                        size: 'mb:body-l',
                      }}
                      smallMobile={{
                        size: 'sb:body-m',
                      }}
                    >
                      전화번호
                    </Text>
                  </Label>
                  <Wrapper
                    width="w-full"
                    color="c-gs-pure-white"
                    paddingX="px-2"
                    paddingY="py-1"
                    borderRadius="rad-1"
                    mobile={{
                      paddingX: 'mb:px-1.5',
                      paddingY: 'mb:py-0.5',
                    }}
                  >
                    <Input
                      id="phone"
                      name="phone"
                      width="w-full"
                      font="font-primary"
                      fontSize="body-2xl"
                      color="c-on-neutral"
                      placeholderStyle={{
                        color: 'placeholder:c-on-tertiary',
                      }}
                      placeholder={'11자리 전화번호를 입력하세요.'}
                      required
                      mobile={{
                        fontSize: 'mb:body-l',
                      }}
                      smallMobile={{
                        fontSize: 'sb:body-m',
                      }}
                    ></Input>
                  </Wrapper>
                </Flex>
                <Flex width="w-full" gap="gap-1" justifyContent="jc-start">
                  <CheckBox
                    id="agree"
                    name="agree"
                    size="chk-s"
                    value={isCheck}
                    onChange={() => setIsCheck((prev) => !prev)}
                  ></CheckBox>
                  <Label htmlFor="agree">
                    <Text
                      size="body-m"
                      color="c-gs-pure-white"
                      mobile={{ size: 'mb:body-s' }}
                      smallMobile={{ size: 'sb:label-s' }}
                    >
                      개인정보 수집 및 이용에 동의합니다.
                    </Text>
                  </Label>
                </Flex>
              </Flex>
              <Button
                type="submit"
                paddingX="px-2.5"
                paddingY="py-1"
                color="c-gs-pure-white"
                mobile={{
                  width: 'mb:w-22',
                  paddingX: 'mb:px-1.5',
                  paddingY: 'mb:py-0.5',
                }}
                smallMobile={{ width: 'sb:w-20' }}
              >
                <Text
                  size="title-l"
                  color="c-on-secondary-container"
                  mobile={{ size: 'mb:title-m' }}
                  smallMobile={{ size: 'sb:title-s' }}
                >
                  문의 신청하기
                </Text>
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
