import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {globalColors} from '../theme/theme';
import {Text} from 'react-native';
import {TopTabNavigator} from './TopTabNavigator';
import {StackNavigator} from './StackNavigator';
import {IonIcon} from '../components';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: ({color}) => (
            <Text style={{color}}>
              <IonIcon name="bookmark-outline" color={color} />
            </Text>
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({color}) => (
            <Text style={{color}}>
              <IonIcon name="bookmark-outline" color={color} />
            </Text>
          ),
        }}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => (
            <Text style={{color}}>
              <IonIcon name="bookmark-outline" color={color} />
            </Text>
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
