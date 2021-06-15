import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { BorderRadius, Colors } from '../constants';

function normalizeProgress(progress) {
  return progress < 0 ? 0 : progress > 100 ? 100 : progress || 0;
}

export default function ProgressBar({ progress }) {
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const width = progressAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: normalizeProgress(progress),
      duration: 800,
      useNativeDriver: false,
      easing: Easing.bounce,
    }).start();
  }, [progress]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.progressBar, { width }]}></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius[0],
  },
  progressBar: {
    backgroundColor: Colors.pink,
    height: 6,
    borderRadius: BorderRadius[0],
  },
});
