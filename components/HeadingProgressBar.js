import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Spacing } from '../constants';
import ProgressBar from './ProgressBar';

export default function HeadingProgressBar({ heading, progress }) {
  return (
    <View>
      <View>
        <Text style={[styles.text, styles.heading]}>{heading}</Text>
      </View>
      <View style={styles.progress}>
        <Text style={[styles.text, styles.number]}>{progress || 0}%</Text>
        <View style={styles.progressBar}>
          <ProgressBar progress={progress} />
        </View>
        <Text style={[styles.text, styles.number]}>100%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.secondary,
    fontFamily: 'Poppins_500Medium',
  },
  heading: {
    fontSize: 16,
    textAlign: 'center',
    paddingBottom: Spacing[0],
  },
  number: {
    fontSize: 14,
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    paddingHorizontal: Spacing[0],
  },
});
