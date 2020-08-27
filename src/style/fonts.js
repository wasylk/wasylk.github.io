import styled from 'styled-components';

const base = 'margin: 0 0 0 0;';

export const FONTS = {
  AVENIR_MEDIUM: styled.p`
  ${base}
  font-family: Avenir Medium;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 5px;
  line-height: 33px;
`,
  AVENIR_BLACK: styled.p`
  ${base}
  font-family: Avenir Black;
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 38px;
  `,
  AVENIR_ROMAN: styled.p`
  ${base}
  font-family: Avenir Roman;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 27px;
  `
};
