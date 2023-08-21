import React from 'react';
import {KeyboardAvoidingView, StyleProp, ViewStyle} from 'react-native';

type Props = {
  headerShown?: boolean;
  addOffset?: number;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  behavior?: 'height' | 'position' | 'padding';
};

export default function KeyboardPaddingView(props: Props) {
  const keyboardVerticalOffset = React.useMemo(() => {
    const {headerShown = true, addOffset = 0} = props || {};
    return (headerShown ? 50 : 0) + addOffset;
  }, [props.addOffset, props.headerShown]);

  return (
    <KeyboardAvoidingView
      enabled
      behavior={props.behavior ?? 'padding'}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={props?.style ?? {}}>
      {props.children}
    </KeyboardAvoidingView>
  );
}
