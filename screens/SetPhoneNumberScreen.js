import { useNavigationState } from '@react-navigation/native';
import React from 'react';
import PhoneNumber from '../components/PhoneNumber';
import StatusBarPadding from '../components/StatusBarPadding';
import StepScreen from '../components/StepScreen';

export default function SetPhoneNumberScreen() {
  const state = useNavigationState((state) => state);
  const isThisScreen = state.routes[state.index].name === 'SetPhone';

  return (
    <StatusBarPadding>
      <StepScreen heading="The Basics" progress={45} title="Enter your phone number">
        {isThisScreen && <PhoneNumber />}
      </StepScreen>
    </StatusBarPadding>
  );
}
