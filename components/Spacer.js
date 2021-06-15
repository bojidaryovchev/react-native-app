import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Spacer({ horizontal, size }) {
  const styles = StyleSheet.create({
    view: horizontal
      ? {
          paddingRight: size,
        }
      : {
          paddingBottom: size,
        },
  });

  return <View style={styles.view} />;
}
