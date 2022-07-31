import { NextPage } from 'next';
import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { withAnimation } from 'hoc';

const TestPage: NextPage = () => {
  return (
    <Container>
      <Space />
      <Space />
      <Space />

      <Box1 order={1} block>
        BOX
      </Box1>
      <Box2 order={2} block>
        BOX
      </Box2>
      <Box3 order={3} block>
        BOX
      </Box3>

      <Space />

      <section style={{ display: 'flex', gap: '20px' }}>
        <Box4 order={1} className="test">
          BOX
        </Box4>
        <Box5 order={2}>BOX</Box5>
        <Box6 order={3}>BOX</Box6>
      </section>

      <Space />

      <section style={{ display: 'flex', gap: '20px' }}>
        <Box7 order={1}>BOX</Box7>
        <Box8 order={2}>BOX</Box8>
        <Box9 order={3}>BOX</Box9>
      </section>

      <Box order={1} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 1000vh;
`;

const Space = styled.div`
  width: 800px;
  height: 500px;
  margin: 0 auto;
  padding-bottom: 100px;
  border-bottom: 3px solid black;
`;

type BoxStyledProps = {
  order: 1 | 2 | 3;
  block?: boolean;
};
const boxColorStyles = ({ theme, order }: BoxStyledProps & { theme: Theme }) => {
  const colors = {
    1: css`
      background: ${theme.palette.BLUE_80};
      color: ${theme.palette.INK_5};
    `,
    2: css`
      background: ${theme.palette.YELLOW_70};
      color: ${theme.palette.INK_100};
    `,
    3: css`
      background: ${theme.palette.RED_50};
      color: ${theme.palette.INK_5};
    `,
  };

  return colors[order];
};

const Box = styled.div<BoxStyledProps>`
  ${({ block }) =>
    block
      ? css`
          flex: 1;
          height: 500px;
          :not(:first-of-type) {
            margin-top: 20px;
          }
        `
      : css`
          flex: 1;
        `}
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  border-radius: 5px;

  ${boxColorStyles};

  &.test {
    color: red;
  }
`;

const Box1 = withAnimation<BoxStyledProps>('fadeIn', Box, { origin: 'bottom' });
const Box2 = withAnimation<BoxStyledProps>('fadeIn', Box, { origin: 'left' });
const Box3 = withAnimation<BoxStyledProps>('fadeIn', Box, { origin: 'right' });

const Box4 = withAnimation<BoxStyledProps>('fadeIn', Box, { delay: 0 });
const Box5 = withAnimation<BoxStyledProps>('fadeIn', Box, { delay: 0.5 });
const Box6 = withAnimation<BoxStyledProps>('fadeIn', Box, { delay: 1 });

const Box7 = withAnimation<BoxStyledProps>('fadeIn', Box, { origin: 'left', delay: 0 });
const Box8 = withAnimation<BoxStyledProps>('fadeIn', Box, { origin: 'left', delay: 0.5 });
const Box9 = withAnimation<BoxStyledProps>('fadeIn', Box, { origin: 'left', delay: 1 });

export default TestPage;
