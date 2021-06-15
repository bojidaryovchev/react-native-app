import { useNavigationState } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import PinCode from '../components/PinCode';
import StatusBarPadding from '../components/StatusBarPadding';
import StepScreen from '../components/StepScreen';
import { MaxPinLength } from '../constants';

export default function SetPinCodeScreen({ navigation }) {
  const state = useNavigationState((state) => state);
  const isThisScreen = state.routes[state.index].name === 'SetPin';

  const [pin, setPin] = useState('');

  useEffect(() => {
    if (pin.length === MaxPinLength) {
      navigation.navigate('ConfirmPin');
    }
  }, [pin]);

  return (
    <StatusBarPadding>
      <StepScreen
        heading="The Basics"
        progress={25}
        title="Set your PIN code"
        description="With your pin you can enter the app safely and quickly"
      >
        {isThisScreen && <PinCode onPinChange={setPin} maxPinLength={MaxPinLength} />}
      </StepScreen>
    </StatusBarPadding>
  );
}
