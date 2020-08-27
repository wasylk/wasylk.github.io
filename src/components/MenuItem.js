import React from 'react';
import styled from "styled-components";

import {COLORS} from "../style/colors";
import {FONTS} from "../style/fonts";

const RootView = styled.div`
  height: 27px;
  width: 175px;
  padding: 12px 0 12px 30px;
  border-radius: 15.5px;
  margin-top: 19px;
  ${({isSelected}) => isSelected && `
    background-color: ${COLORS.LIGHT_RED_20};
  `}
`;
const MenuText = styled(FONTS.AVENIR_ROMAN)`
  color: ${({isSelected}) => isSelected ? COLORS.LIGHT_RED : COLORS.WHITE};
  ${({isSelected}) => isSelected && 'letter-spacing: -0.5px;'}
`;

const MenuItem = ({isSelected, text, offset, onCloseMenu}) => {
  return (
    <RootView isSelected={isSelected} offset={offset} onClick={onCloseMenu}>
      <MenuText isSelected={isSelected}>{text}</MenuText>
    </RootView>
  )
};

export default MenuItem;
