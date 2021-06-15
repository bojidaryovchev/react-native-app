import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import CodeVerifiedScreen from './screens/CodeVerifiedScreen';
import ConfirmPinCodeScreen from './screens/ConfirmPinCodeScreen';
import DeviceVerificationScreen from './screens/DeviceVerificationScreen';
import SetPhoneNumberScreen from './screens/SetPhoneNumberScreen';
import SetPinCodeScreen from './screens/SetPinCodeScreen';

const Stack = createStackNavigator();

export default function AppRouting() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SetPin" headerMode="none">
        <Stack.Screen name="SetPin" component={SetPinCodeScreen} />
        <Stack.Screen name="ConfirmPin" component={ConfirmPinCodeScreen} />
        <Stack.Screen name="SetPhone" component={SetPhoneNumberScreen} />
        <Stack.Screen name="DeviceVerification" component={DeviceVerificationScreen} />
        <Stack.Screen name="CodeVerified" component={CodeVerifiedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
