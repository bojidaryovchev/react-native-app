import { Portal } from '@gorhom/portal';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Spacing } from '../constants';
import Keyboard from './Keyboard';

export default function PhoneNumber() {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [phone, setPhone] = useState([]);

  function keyPressHandler(key) {
    setPhone((currentPhone) => [...currentPhone, key]);
  }

  function backspaceHandler() {
    setPhone((currentPhone) => {
      currentPhone.pop();

      return currentPhone.slice();
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          placeholder="Enter your phone number"
          showSoftInputOnFocus={false}
          value={phone.join('')}
          onFocus={() => setShowKeyboard(true)}
          onBlur={() => setShowKeyboard(false)}
        />
      </View>

      <Portal>{showKeyboard && <Keyboard onKeyPress={keyPressHandler} onBackspace={backspaceHandler} />}</Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacing[4],
  },
  input: {
    borderBottomColor: 'rgb(225, 223, 226)',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
});
