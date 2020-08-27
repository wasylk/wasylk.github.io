import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {COLORS} from "../style/colors";
import {isIphoneX, delay} from "../tools/misc";
import DeviceMessage from "./DeviceMessage";
import Loader from "./Loader";
import StartView from "./StartView";
import MenuView from "./MenuView";

const RootView = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${COLORS.WHITE};
`;
const NavigationView = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${COLORS.BLACK};
`;

const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    delay(1000).then(() => {
      setIsLoading(false);
    });
  });
  if (isLoading) return <Loader height={750}/>;
  if (!isIphoneX()) return <DeviceMessage/>;
  return (
    <RootView>
      <NavigationView>
        {isOpen && <MenuView userName={'Viktor'} onCloseMenu={() => setIsOpen(false)}/>}
        <StartView isOpen={isOpen}
                   onOpenMenu={() => setIsOpen(true)}/>
      </NavigationView>
    </RootView>
  );
};

export default Navigation;
