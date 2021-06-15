import { Portal } from '@gorhom/portal';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, Spacing } from '../constants';
import Keyboard from './Keyboard';

export default function PinCode({ onPinChange, maxPinLength }) {
  const emptyDots = Array.from(new Array(maxPinLength), () => false);

  const [pin, setPin] = useState([]);
  const [dots, setDots] = useState(emptyDots);

  useEffect(() => {
    setDots((dots) => dots.map((_, i) => i < pin.length));
    onPinChange(pin.join(''));
  }, [pin]);

  function keyPressHandler(key) {
    if (pin.length + 1 > maxPinLength) {
      return;
    }

    setPin((pin) => [...pin, key]);
  }

  function backspaceHandler() {
    setPin((pin) => {
      pin.pop();

      return pin.slice();
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.dots}>
        {dots.map((active, index) => (
          <View key={index} style={active ? [styles.dot, styles.dotActive] : styles.dot}></View>
        ))}
      </View>

      <Portal>
        <Keyboard onKeyPress={keyPressHandler} onBackspace={backspaceHandler} />
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing[2],
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Spacing[4],
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.secondary,
  },
  dotActive: {
    backgroundColor: Colors.primary,
  },
});
