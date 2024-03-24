/* eslint-disable react/no-unstable-nested-components */
import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text} from 'react-native';
import {IonIcon} from '..';
import {globalColors} from '../../theme/theme';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  return (
    <>
      {navigation.setOptions({
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Text style={{marginLeft: 10}}>
              <IonIcon name="menu-outline" color={globalColors.primary} />
            </Text>
          </Pressable>
        ),
      })}
    </>
  );
};
