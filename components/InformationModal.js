import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BorderRadius, Colors, FontSize, Spacing } from '../constants';
import BaseModal, { baseModalStyles } from './BaseModal';

export default function InformationModal({ visible, title, description, onOk }) {
  return (
    <BaseModal visible={visible} onClose={onOk}>
      <Text style={baseModalStyles.title}>{title}</Text>
      <Text style={baseModalStyles.description}>{description}</Text>
      <TouchableOpacity style={styles.touchable} onPress={onOk}>
        <Text style={styles.touchableText}>Ok</Text>
      </TouchableOpacity>
    </BaseModal>
  );
}

const styles = StyleSheet.create({
  touchable: {
    paddingVertical: Spacing[0],
    borderRadius: BorderRadius[0],
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  touchableText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 2,
    fontSize: FontSize[0],
    fontFamily: 'Poppins_500Medium',
    color: Colors.white,
  },
});
