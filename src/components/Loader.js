import React from 'react';
import styled from "styled-components";
import Spinner from '@atlaskit/spinner';

const RootView = styled.div`
  display: flex;
  width: ${props => props.width ? `${props.width}px` : '100%;'};
  height: ${props => props.height ? `${props.height}px` : '100%;'};
`;
const SpinnerView = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loader = ({width, height, size}) => {
  return (
    <RootView width={width} height={height}>
      <SpinnerView>
        <Spinner size={size}/>
      </SpinnerView>
    </RootView>
  )
};

Loader.defaultProps = {
  size: 'large',
};

export default Loader;
