import { useState } from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';

function Button({
  children,
  isPending = false,
  onClick,
}: {
  children: React.ReactNode;
  isPending?: boolean;
  onClick: () => void;
}) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      className='self-end border-[1px] border-cyan-700 bg-cyan-700 px-10 py-2 rounded-md'
      style={[isPending || isPressed ? { opacity: 0.7 } : {}]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onClick}
      disabled={isPending}
    >
      {isPending ? (
        <ActivityIndicator color='white' className='px-5' />
      ) : (
        <Text className='text-white font-medium tracking-wide'>{children}</Text>
      )}
    </Pressable>
  );
}

export default Button;
