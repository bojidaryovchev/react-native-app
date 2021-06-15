import React from 'react';
import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import { BorderRadius, Colors, Spacing } from '../constants';
import HeadingProgressBar from './HeadingProgressBar';

export default function StepScreen({ heading, progress, title, description, children }) {
  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <HeadingProgressBar heading={heading} progress={progress} />
      </View>

      <View style={styles.content}>
        <Text style={[styles.text, styles.title]}>{title}</Text>
        {description && <Text style={[styles.text, styles.description]}>{description}</Text>}
        {children}
      </View>
    </View>
  );
}

const screenDimensions = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    paddingTop: Spacing[3],
    paddingHorizontal: Spacing[2],
    height: screenDimensions.height - StatusBar.currentHeight,
  },
  progressBar: {
    paddingBottom: Spacing[3],
  },
  content: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: BorderRadius[2],
    borderTopRightRadius: BorderRadius[2],
    flex: 1,
    paddingTop: Spacing[4],
    paddingHorizontal: Spacing[3],
  },
  text: {
    textAlign: 'center',
    paddingVertical: Spacing[0],
    fontFamily: 'Poppins_500Medium',
  },
  title: {
    color: Colors.primary,
    fontSize: 20,
  },
  description: {
    color: Colors.secondary,
    fontSize: 14,
  },
});
