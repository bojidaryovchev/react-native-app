import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { BorderRadius, Colors, Spacing } from '../constants';
import Spacer from './Spacer';

const screenDimensions = Dimensions.get('screen');

export default function Keyboard({ onKeyPress, onBackspace }) {
  const keyboardAnimation = useRef(new Animated.Value(screenDimensions.height)).current;

  useEffect(() => {
    Animated.timing(keyboardAnimation, {
      toValue: 0,
      duration: 600,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  }, []);

  function keyClickHandler(key) {
    onKeyPress(key);
  }

  function backspaceClickHandler() {
    onBackspace();
  }

  return (
    <Animated.View style={[styles.container, { top: keyboardAnimation }]}>
      <View style={styles.keyboard}>
        <View style={styles.keyboardRow}>
          <TouchableOpacity style={styles.keyboardKey} onPress={() => keyClickHandler(1)}>
            <Text style={styles.keyboardKeyText}>1</Text>
          </TouchableOpacity>

          <Spacer horizontal size={Spacing[0]} />

          <TouchableOpacity style={styles.keyboardKey} onPress={() => keyClickHandler(2)}>
            <Text style={styles.keyboardKeyText}>2</Text>
          </TouchableOpacity>

          <Spacer horizontal size={Spacing[0]} />

          <TouchableOpacity style={styles.keyboardKey} onPress={() => keyClickHandler(3)}>
            <Text style={styles.keyboardKeyText}>3</Text>
          </TouchableOpacity>
        </View>

        <Spacer size={Spacing[0]} />

        <View style={styles.keyboardRow}>
          <TouchableOpacity style={styles.keyboardKey} onPress={() => keyClickHandler(4)}>
            <Text style={styles.keyboardKeyText}>4</Text>
          </TouchableOpacity>

          <Spacer horizontal size={Spacing[0]} />

          <TouchableOpacity style={styles.keyboardKey} onPress={() => keyClickHandler(5)}>
            <Text style={styles.keyboardKeyText}>5</Text>
          </TouchableOpacity>

          <Spacer horizontal size={Spacing[0]} />

          <TouchableOpacity style={styles.keyboardKey} onPress={() => keyClickHandler(6)}>
            <Text style={styles.keyboardKeyText}>6</Text>
          </TouchableOpacity>
        </View>

        <Spacer size={Spacing[0]} />

        <View style={styles.keyboardRow}>
          <TouchableOpacity style={styles.keyboardKey} onPress={() => keyClickHandler(7)}>
            <Text style={styles.keyboardKeyText}>7</Text>
          </TouchableOpacity>

          <Spacer horizontal size={Spacing[0]} />

          <TouchableOpacity style={styles.keyboardKey} onPress={() => keyClickHandler(8)}>
            <Text style={styles.keyboardKeyText}>8</Text>
          </TouchableOpacity>

          <Spacer horizontal size={Spacing[0]} />

          <TouchableOpacity style={styles.keyboardKey} onPress={() => keyClickHandler(9)}>
            <Text style={styles.keyboardKeyText}>9</Text>
          </TouchableOpacity>
        </View>

        <Spacer size={Spacing[0]} />

        <View style={styles.keyboardRow}>
          <TouchableOpacity style={[styles.keyboardKey, styles.keyboardKeyTransparent]}></TouchableOpacity>

          <Spacer horizontal size={Spacing[0]} />

          <TouchableOpacity style={styles.keyboardKey} onPress={() => keyClickHandler(0)}>
            <Text style={styles.keyboardKeyText}>0</Text>
          </TouchableOpacity>

          <Spacer horizontal size={Spacing[0]} />

          <TouchableOpacity style={[styles.keyboardKey, styles.keyboardKeyTransparent]} onPress={backspaceClickHandler}>
            <Icon name="backspace" style={styles.keyboardKeyBackspace}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: screenDimensions.height,
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
  },
  keyboard: {
    height: 320,
    backgroundColor: 'rgb(210, 213, 218)',
    padding: Spacing[0],
  },
  keyboardRow: {
    height: 48,
    flexDirection: 'row',
  },
  keyboardKey: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius[0],
    elevation: 2,
  },
  keyboardKeyTransparent: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  keyboardKeyText: {
    paddingTop: 4,
    fontSize: 28,
    fontFamily: 'Poppins_500Medium',
  },
  keyboardKeyBackspace: {
    fontSize: 28,
    color: 'rgb(67, 71, 78)',
  },
});
