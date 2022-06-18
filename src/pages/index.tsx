import type { NextPage } from 'next';
import styled from '@emotion/styled';

const Home: NextPage = () => {
  return <TestParagraph color="red">Hello World!</TestParagraph>;
};

const TestParagraph = styled.p<{ color: string }>`
  color: ${(p) => p.theme.palette.BLUE_0};
`;

export default Home;
