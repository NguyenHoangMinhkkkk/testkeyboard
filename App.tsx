import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useResizeMode} from 'react-native-keyboard-controller';

import KeyboardAwareScrollView from './KeyboardAwareScrollView';

export default function AwareScrollView() {
  useResizeMode();

  const [manyTextInputs, setMany] = useState<number>(5);

  return (
    <View style={styles.flex}>
      <View style={styles.header}>
        <Text>{'number of TextInputs'}</Text>
        <TextInput
          value={String(manyTextInputs)}
          keyboardType="numeric"
          onChangeText={num => {
            setMany(Number(num));
          }}
          style={{borderWidth: 1}}
        />
      </View>
      <KeyboardAwareScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.flexCenter}>
          {new Array(manyTextInputs).fill(0).map((_, i) => (
            <TextInput
              key={i}
              placeholder={`${i}`}
              placeholderTextColor="black"
              style={styles.baseTextInput}
            />
          ))}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  baseTextInput: {
    width: '100%',
    height: 50,
    backgroundColor: 'lightgray',
    marginTop: 50,
  },
  flex: {flex: 1},
  flexCenter: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  header: {
    borderWidth: 1,
    backgroundColor: 'lightblue',
    padding: 20,
    paddingTop: 46,
  },
});
