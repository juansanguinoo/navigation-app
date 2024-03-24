import React from 'react';
import {Text, View} from 'react-native';
import {HamburgerMenu, IonIcon} from '../../components';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>

      <IonIcon name="airplane-outline" />
    </View>
  );
};
