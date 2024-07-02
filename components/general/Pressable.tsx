import { useState } from 'react';
import { Pressable } from 'react-native';

function PressableCustom(props: any) {
  const [isPressed, setIsPressed] = useState(false);
  const { children, style, ...rest } = props;

  return (
    <Pressable
      {...rest}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={isPressed ? [{ opacity: 0.65 }, style] : [style]}
    >
      {children}
    </Pressable>
  );
}

export default PressableCustom;
