import { useRef } from 'react';

import Header from 'components/index/Header';
import FirstBlock from 'components/index/FirstBlock';
import LeftBlock from 'components/index/LeftBlock';
import RightBlock from 'components/index/RightBlock';
import MiddleBlock from 'components/index/MiddleBlock';
import Footer from 'components/index/Footer';
import ScrollTopButton from 'components/index/ScrollTopButton';
import styled from '@emotion/styled';
import { media } from 'styles';

const Landing = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Header />
      <Container>
        <FirstBlock
          title="혼자 하는 코딩은 쓰니까."
          content="같이 코딩할까요, 지금 그 자리에서."
          imgPath="/svg/IndexSleep.svg"
          emailInputRef={emailInputRef}
        />
        <MiddleBlock
          subtitle="모여서 각자 코딩"
          title="모각코는, 개발자들을 위한 무료 화상채팅 서비스입니다"
          content="다른 개발자들과 소통하고 경쟁하며, 더 나은 자신을 향해 나아갈 동기를 얻어보세요!"
          onClickButton={() => emailInputRef.current?.focus()}
        />
        <RightBlock
          title="일정을 계획"
          content="메모와 일정을 캘린더에 정리하고, 기간별로 공부한 시간도 확인해보세요."
          imgPath="/svg/IndexGrowUp.svg"
        />
        <LeftBlock
          title="랭킹 시스템"
          content="같은 분야의 개발자들과 비교한 자신의 공부시간 순위를 알 수 있습니다."
          imgPath="/svg/IndexRun.svg"
        />
        <RightBlock
          title="철저한 익명제"
          content="기존 오프라인 코딩 모임의 가장 큰 문제점인 과한 네트워킹, 친목 등을 방지하고자, 모각코는 철저한 익명제로 운영됩니다."
          imgPath="/svg/IndexPrivacy.svg"
        />
      </Container>
      <ScrollTopButton />
      <Footer />
    </>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  padding: 0.33rem 0.66rem;

  ${media.lg} {
    padding: 0.66rem 2rem;
  }
`;

export default Landing;
