import {StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {useResizeMode} from 'react-native-keyboard-controller';
import KeyboardAwareScrollView from './KeyboardAwareScrollView';

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'lightblue',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
  },
  flex1: {flex: 1},
  textInput: {
    width: '100%',
    height: 50,
    marginTop: 50,
    backgroundColor: 'lightgray',
  },
});

const Centered: FC<{children: ReactNode}> = ({children}) => (
  <View style={styles.centered}>{children}</View>
);

export default function AwareScrollView() {
  useResizeMode();

  // header background style works together follow some states/ changing image background or background color

  return (
    <View style={styles.flex1}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />

      <View style={styles.header}>
        <Text>{'Screen header'}</Text>
        <Text>{'Screen header'}</Text>
        <Text>{'Screen header'}</Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}>
        <Centered>
          {new Array(5).fill(0).map((_, i) => (
            <TextInput key={i} value={i + '_'} style={[styles.textInput]} />
          ))}
        </Centered>
      </KeyboardAwareScrollView>
    </View>
  );
}
