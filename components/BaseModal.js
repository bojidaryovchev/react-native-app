import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { BorderRadius, Colors, Spacing } from '../constants';

export default function BaseModal({ visible, onClose, children }) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.container}>{children}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: Colors.modalBackdrop,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Spacing[3],
  },
  container: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius[1],
    paddingHorizontal: Spacing[2],
    paddingVertical: Spacing[3],
  },
});

export const baseModalStyles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: Colors.primary,
    fontSize: 18,
    paddingVertical: Spacing[0],
    fontFamily: 'Poppins_500Medium',
  },
  description: {
    textAlign: 'center',
    color: Colors.secondary,
    lineHeight: 24,
    paddingVertical: Spacing[3],
    fontFamily: 'Poppins_500Medium',
  },
});
