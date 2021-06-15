import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

export default function StatusBarPadding({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});
