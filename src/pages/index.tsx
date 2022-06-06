import type { NextPage } from 'next';
import styled from '@emotion/styled';

const Home: NextPage = () => {
  return <TestParagraph color="red">Hello World!</TestParagraph>;
};

const TestParagraph = styled.p<{ color: string }>`
  color: ${(p) => p.color};
`;

export default Home;
