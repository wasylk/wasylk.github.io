import React from 'react';
import styled from "styled-components";

import {COLORS} from "../style/colors";
import {FONTS} from "../style/fonts";
import StartButton from "./StartButton";

const RootView = styled.div`
  position: absolute;
  border-radius: 48px 0 0 0;
  border-width: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.WHITE};
  ${({isOpen}) => isOpen && `
    top: 10px;
    left: 240px;
    transform: rotate(-7deg);
  `}
`;
const HeaderView = styled.div`
  display: flex;
  flex-direction: row;
  margin: 36px 43px;
`;
const StartText = styled(FONTS.AVENIR_MEDIUM)`
  color: ${COLORS.GREY2};
  margin-left: 35px;
  text-transform: uppercase;
`;

const StartView = ({onOpenMenu, isOpen}) => {
  return (
    <RootView isOpen={isOpen}>
      <HeaderView>
        <StartButton onClick={onOpenMenu}/>
        <StartText>START</StartText>
      </HeaderView>
    </RootView>
  )
};

export default StartView;
