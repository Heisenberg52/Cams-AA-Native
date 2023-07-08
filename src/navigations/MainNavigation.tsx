import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OtpScreen from '../screens/OtpScreen';
import MobileScreen from '../screens/MobileScreen';

type ManinStackStackParamList = {
  Otp: undefined;
  Mobile: undefined;
  // Profile: {userId: string};
  // Feed: {sort: 'latest' | 'top'} | undefined;
};

const ManinStack = createNativeStackNavigator<ManinStackStackParamList>();

function ManinNavigation() {
  return (
    <NavigationContainer>
      <ManinStack.Navigator>
        <ManinStack.Screen
          name="Mobile"
          component={MobileScreen}
          options={{
            headerShown: false,
          }}
        />
        <ManinStack.Screen
          name="Otp"
          component={OtpScreen}
          options={{
            headerTitle: 'Enter OTP',
            headerStyle: {
              backgroundColor: '#272239',
            },
            headerTintColor: '#fff',
          }}
        />
      </ManinStack.Navigator>
    </NavigationContainer>
  );
}

export default ManinNavigation;
