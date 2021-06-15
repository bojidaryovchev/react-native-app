import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BorderRadius, Colors, FontSize, Spacing } from '../constants';
import BaseModal, { baseModalStyles } from './BaseModal';
import Spacer from './Spacer';

export default function ConfirmModal({ visible, title, description, onCancel, onConfirm }) {
  return (
    <BaseModal visible={visible} onClose={onCancel}>
      <Text style={baseModalStyles.title}>{title}</Text>
      <Text style={baseModalStyles.description}>{description}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.touchable, styles.cancelTouchable]} onPress={onCancel}>
          <Text style={[styles.touchableText, styles.cancelTouchableText]}>Cancel</Text>
        </TouchableOpacity>

        <Spacer horizontal size={Spacing[1]} />

        <TouchableOpacity style={[styles.touchable, styles.confirmTouchable]} onPress={onConfirm}>
          <Text style={[styles.touchableText, styles.confirmTouchableText]}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BaseModal>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
  },
  touchable: {
    flex: 1,
    paddingVertical: Spacing[0],
    borderRadius: BorderRadius[0],
    justifyContent: 'center',
  },
  touchableText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 2,
    fontSize: FontSize[0],
    fontFamily: 'Poppins_500Medium',
  },
  cancelTouchable: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  cancelTouchableText: {
    color: Colors.primary,
  },
  confirmTouchable: {
    backgroundColor: Colors.primary,
  },
  confirmTouchableText: {
    color: Colors.white,
  },
});
