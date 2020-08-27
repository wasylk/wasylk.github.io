import React from 'react';
import styled from "styled-components";
import {COLORS} from "../style/colors";

const RootView = styled.div`
  display: flex;
  flex-direction: column;
`;
const Line = styled.div`
  width: 30px;
  height: 4px;
  background-color: ${COLORS.GREY1};
  margin-bottom: 8px;
  border-width: 0;
  border-radius: 3.5px;
`;

const StartButton = ({onClick}) => {
  return (
    <RootView onClick={onClick}>
      <Line/>
      <Line/>
      <Line/>
    </RootView>
  )
};

export default StartButton;
