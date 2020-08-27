import React, {useState} from 'react';
import styled from "styled-components";

import {COLORS} from "../style/colors";
import {FONTS} from "../style/fonts";
import MenuItem from './MenuItem';

const RootView = styled.div`
  position: absolute;
  border-radius: 48px 0 0 0;
  border-width: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.DARK};
`;
const HeaderText = styled(FONTS.AVENIR_BLACK)`
  color: ${COLORS.WHITE};
  margin: 122px 58px 0;
`;
const MenuWrapper = styled.div`
  margin: 57px 27px 0;
  width: 176px;
  flex-direction: column;
  background-color: ${COLORS.DARK};
`;
const Separator = styled.div`
  height: 0.5px;
  margin: 61.5px 0 61.5px;
  width: 100%;
  background-color: ${COLORS.GREY3};
`;

const MenuView = ({userName, onCloseMenu}) => {
  return (
    <RootView>
      <HeaderText>{userName}</HeaderText>
      <MenuWrapper>
        <MenuItem text={'Start'} isSelected={true} onCloseMenu={onCloseMenu}/>
        <MenuItem text={'Your Cart'}/>
        <MenuItem text={'Favourites'}/>
        <MenuItem text={'Your orders'}/>
        <Separator/>
        <MenuItem text={'Sign Out'}/>
      </MenuWrapper>
    </RootView>
  )
};

export default MenuView;
